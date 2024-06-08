#This file is the center of all api calls going in and out
from typing import Union
from fastapi import FastAPI
import projectManager

app = FastAPI()

@app.get("/projects")
async def read_projects():
    return {"Test": "Project"}
