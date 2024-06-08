#This file is the Project object
from pydantic import BaseModel
from typing import List, Optional

class Project(BaseModel):
    name: str
    id: Optional[int] = None
    start_date: str
    end_date: str
    event_list: Optional[List[int]] = None
    initials: str

    def set_name(self, name: str):
        self.name = name

    def get_name(self) -> str:
        return self.name

    def set_id(self, id: int):
        self.id = id

    def get_id(self) -> int:
        return self.id
    
    def set_start_date(self, start_date):
        self.start_date = start_date

    def get_start_date(self) -> str:
        return self.start_date

    def set_end_date(self, end_date):
        self.end_date = end_date

    def get_end_date(self) -> str:
        return self.end_date

    def set_event_list():
        pass

    def get_event_list():
        pass

    def set_initials(self, initials: str):
        self.initials = initials

    def get_initials(self) -> str:
        return self.initials

