#!/usr/bin/env python3
"""
Docstring for 2-measure_runtime.
"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Run async_comprehension 4 times in
    parallel and measure total runtime.
    """
    start = time.time()

    # Run 4 async comprehensions concurrently
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end = time.time()
    return end - start
