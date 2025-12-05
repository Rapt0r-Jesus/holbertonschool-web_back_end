#!/usr/bin/env python3
"""
This module had a function that inserts a new document
in a collection based on kwargs.
"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a MongoDB collection.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
