import json
from openai import OpenAI
from fastapi import HTTPException
from app.config import settings
from app.schemas import FRAPattaCertificate

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=settings.OPENROUTER_API_KEY,
)

async def extract_fields_from_text(text: str) -> FRAPattaCertificate:
    """
    Uses an LLM via OpenRouter to extract structured fields from raw text.
    """
    
    # **MODIFIED PROMPT**: The prompt is now aware of mixed-language text.
    system_prompt = """
    You are an expert AI assistant specialized in extracting information from Indian government documents. 
    Your task is to analyze the provided OCR text from a Forest Rights Act (FRA) Patta Holder Certificate.
    The OCR text may contain a mix of English and Hindi (Devanagari script) text.
    
    Extract the required fields and return them as a single, valid JSON object. Your response must be in English characters (transliterate Hindi names if necessary).

    The required JSON fields are:
    - claimant_name
    - spouse_name
    - father_name
    - village
    - district
    - land_area
    - claim_status
    - certificate_number
    - issue_date (format as YYY-MM-DD if possible)
    - authority

    RULES:
    1.  Extract information regardless of whether it's in English or Hindi.
    2.  Only return the JSON object, with no additional text, explanations, or markdown.
    3.  If you cannot find a value for a specific field, omit the key from the final JSON object.
    4.  Do not invent or guess information. Only extract what is present in the text.
    """

    try:
        completion = client.chat.completions.create(
            model="mistralai/mistral-7b-instruct",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": f"Here is the OCR text:\n\n---\n\n{text}"},
            ],
            response_format={"type": "json_object"},
            temperature=0.0,
        )
        
        llm_response_content = completion.choices[0].message.content
        extracted_data = json.loads(llm_response_content)
        certificate = FRAPattaCertificate(**extracted_data)
        
        return certificate

    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500,
            detail="Error: The LLM returned a response that was not valid JSON."
        )
    except Exception as e:
        raise HTTPException(
            status_code=502,
            detail=f"An error occurred while communicating with the LLM service: {str(e)}"
        )