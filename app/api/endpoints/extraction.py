from fastapi import APIRouter, UploadFile, File, HTTPException
from app.schemas import FRAPattaCertificate
from app.services.ocr_service import extract_text_from_file
from app.services.llm_service import extract_fields_from_text

router = APIRouter()

@router.post(
    "/extract",
    response_model=FRAPattaCertificate,
    summary="Extract Structured Data from a Document",
    tags=["Extraction"]
)
async def extract_data_from_document(
    file: UploadFile = File(..., description="The document (PDF, JPEG, PNG) to process.")
):
    if not file:
        raise HTTPException(status_code=400, detail="No file was uploaded.")

    try:
        raw_text = await extract_text_from_file(file)
        
        if not raw_text or raw_text.strip() == "":
            raise HTTPException(
                status_code=422, 
                detail="Could not extract any text from the uploaded document. The document might be empty, scanned at a low quality, or contain no text."
            )
            
        extracted_data = await extract_fields_from_text(raw_text)
        
        return extracted_data

    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"An unexpected server error occurred: {str(e)}"
        )
