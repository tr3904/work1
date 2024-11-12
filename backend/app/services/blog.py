from app import db
from datetime import datetime
from sqlalchemy import inspect


class Blog(db.Model):
    """Model for blogs table"""
    __tablename__ = "blogs"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(500), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_date = db.Column(db.DateTime, nullable=False, )

    # password_hash = db.Column(db.String(128)

    def __init__(self, title, description):
        # super().__init__()
        self.title = title
        self.description = description
        self.created_date = datetime.now()

    def as_dict(self):
        return {c.key: getattr(self, c.key)
                for c in inspect(self).mapper.column_attrs}