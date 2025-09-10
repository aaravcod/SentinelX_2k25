from pydantic import BaseModel, Field
from typing import Optional

class FRAPattaCertificate(BaseModel):
    """
    Defines the structured data extracted from an FRA Patta Holder Certificate.
    Each field is optional to gracefully handle cases where the LLM
    cannot find a specific piece of information in the document.
    """
    claimant_name: Optional[str] = Field(
        None, 
        description="Name of the patta holder (claimant).",
        examples=["Ram Singh"]
    )
    spouse_name: Optional[str] = Field(
        None, 
        description="Name of the spouse, if mentioned.",
        examples=["Sita Devi"]
    )
    father_name: Optional[str] = Field(
        None, 
        description="Name of the father.",
        examples=["Lakhan Singh"]
    )
    village: Optional[str] = Field(
        None, 
        description="Name of the village.",
        examples=["Govindpur"]
    )
    district: Optional[str] = Field(
        None, 
        description="Name of the district.",
        examples=["Rampur"]
    )
    land_area: Optional[str] = Field(
        None, 
        description="Land area allotted, including units (e.g., '2.5 Acres', '1.0 Hectare').",
        examples=["2.5 Acres"]
    )
    claim_status: Optional[str] = Field(
        None, 
        description="Status of the claim (e.g., Approved, Pending, Rejected).",
        examples=["Approved"]
    )
    certificate_number: Optional[str] = Field(
        None, 
        description="The unique certificate or patta number.",
        examples=["FRA/RP/12345"]
    )
    issue_date: Optional[str] = Field(
        None, 
        description="Date of issue, preferably in YYYY-MM-DD format.",
        examples=["2023-07-15"]
    )
    authority: Optional[str] = Field(
        None, 
        description="Name of the issuing authority.",
        examples=["District Level Committee, Rampur"]
    )

    class Config:
        from_attributes = True
        json_schema_extra = {
            "example": {
                "claimant_name": "Ram Singh",
                "spouse_name": "Sita Devi",
                "father_name": "Lakhan Singh",
                "village": "Govindpur",
                "district": "Rampur",
                "land_area": "1.5 Hectare",
                "claim_status": "Approved",
                "certificate_number": "FRA/RP/12345/2023",
                "issue_date": "2023-07-15",
                "authority": "District Level Committee, Rampur"
            }
        }
