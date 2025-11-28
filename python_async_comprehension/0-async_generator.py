#!/usr/bin/env python3
"""Yield 10 random numbers between 0 and 10"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Yield a random number between 0 and 10,
    10 times, with a 1-second delay.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
