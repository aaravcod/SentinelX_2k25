import pytesseract
from PIL import Image
import fitz  
from fastapi import UploadFile, HTTPException
import io
import os

# --- scab change this path ---
# Set the command for the Tesseract executable.
TESSERACT_CMD = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
pytesseract.pytesseract.tesseract_cmd = TESSERACT_CMD

async def extract_text_from_file(file: UploadFile) -> str:
    file_extension = os.path.splitext(file.filename)[1].lower()
    
    try:
        if file_extension == ".pdf":
            return await _extract_text_from_pdf(file)
        elif file_extension in [".jpeg", ".jpg", ".png"]:
            return await _extract_text_from_image(file)
        else:
            raise HTTPException(
                status_code=400,
                detail=f"Unsupported file type: {file_extension}. Please upload a PDF, JPEG, or PNG."
            )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"An error occurred during file processing: {str(e)}"
        )

async def _extract_text_from_image(file: UploadFile) -> str:
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    
    text = pytesseract.image_to_string(image, lang='eng+hin')
    return text

async def _extract_text_from_pdf(file: UploadFile) -> str:
    contents = await file.read()
    pdf_document = fitz.open(stream=contents, filetype="pdf")
    full_text = []
    
    for page_num in range(len(pdf_document)):
        page = pdf_document.load_page(page_num)
        pix = page.get_pixmap(dpi=300) 
        img_data = pix.tobytes("png")
        image = Image.open(io.BytesIO(img_data))
        
        page_text = pytesseract.image_to_string(image, lang='eng+hin')
        full_text.append(page_text)
        
    return "\n".join(full_text)