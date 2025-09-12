from fastapi import APIRouter
from fastapi.responses import FileResponse

router = APIRouter()

@router.get("/map")
def get_map():
    return FileResponse("map.html")
