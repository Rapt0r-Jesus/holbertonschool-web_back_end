#!/usr/bin/env python3
"""index range"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Return a tuple of (start_index, end_index) for pagination.

    Args:
        page (int): 1-indexed page number.
        page_size (int): number of items per page.
    """
    start_index = (page - 1) * page_size
    end_index = start_index * page_size
    return (start_index, end_index)
