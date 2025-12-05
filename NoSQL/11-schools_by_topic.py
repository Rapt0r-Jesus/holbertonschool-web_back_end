#!/usr/bin/env python3
"""
This module had a function that returns
the list of school having a specific topic.
"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of schools that have a specific topic.
    """
    return list(mongo_collection.find({"topics": topic}))
