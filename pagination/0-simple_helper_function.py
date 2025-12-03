def index_range(page, page_size):
    """
    Return a tuple of (start_index, end_index) for pagination.
    
    Args:
        page (int): 1-indexed page number.
        page_size (int): number of items per page.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
