from fastapi import FastAPI
from app.api.endpoints import extraction

app = FastAPI(
    title="LLM-Powered Document Extractor API",
    description="An API to extract structured data from documents like FRA Patta Holder Certificates using OCR and LLMs.",
    version="1.0.0",
)

app.include_router(extraction.router, prefix="/api", tags=["Extraction"])

@app.get("/", tags=["Health Check"])
async def read_root():

    return {"status": "ok", "message": "Welcome to the Document Extractor API!"}
