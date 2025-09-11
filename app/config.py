import os
from pydantic_settings import BaseSettings
from dotenv import load_dotenv


load_dotenv()

class Settings(BaseSettings):

    OPENROUTER_API_KEY: str
    class Config:
        extra="ignore"
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
