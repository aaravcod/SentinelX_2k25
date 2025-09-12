from fastapi import FastAPI
from app.api.endpoints import extraction
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import map
app = FastAPI(
    title="LLM-Powered Document Extractor API",
    description="An API to extract structured data from documents like FRA Patta Holder Certificates using OCR and LLMs.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(extraction.router,prefix="/api", tags=["Extraction"])
app.include_router(map.router,prefix="/api", tags=["Map"])
@app.get("/", tags=["Health Check"])
async def read_root():

    return {"status": "ok", "message": "Welcome to the Document Extractor API!"}
