#!/usr/bin/env python3
"""
This module had a function that lists
all documents in a NoSQL database collection.
"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """
    Lists all documents in a MongoDB collection.
    """
    return list(mongo_collection.find({}))
