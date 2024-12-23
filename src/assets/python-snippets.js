export const pythonSnippets = [
    `for i in range(10):\n    print(i)`,
    `def greet(name):\n    return f"Hello, {name}!"`,
    `counter = 0\nwhile counter < 5:\n    print(counter)\n    counter += 1`,
    `def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n-1)`,
    `numbers = [1, 2, 3, 4, 5]\nfor num in numbers:\n    print(num ** 2)`,
    `class Person:\n    def __init__(self, name):\n        self.name = name\n    def greet(self):\n        print(f"Hi, I'm {self.name}")`,
    `try:\n    result = 10/0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")`,
    `fruits = ["apple", "banana", "cherry"]\nprint([fruit.upper() for fruit in fruits])`,
    `def is_prime(n):\n    if n < 2: return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0: return False\n    return True`,
    `with open("file.txt", "r") as f:\n    content = f.read()`,
    `def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b`,
    `dict_comp = {x: x**2 for x in range(5)}`,
    `from collections import Counter\ntext = "hello"\nchar_count = Counter(text)`,
    `def quicksort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr)//2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)`,
    `class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None`,
    `def binary_search(arr, target):\n    left, right = 0, len(arr)-1\n    while left <= right:\n        mid = (left + right)//2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: left = mid + 1\n        else: right = mid - 1\n    return -1`,
    `@property\ndef area(self):\n    return self.width * self.height`,
    `from functools import reduce\nproduct = reduce(lambda x, y: x*y, [1,2,3,4,5])`,
    `async def fetch_data():\n    async with aiohttp.ClientSession() as session:\n        async with session.get(url) as response:\n            return await response.json()`,
    `def decorator(func):\n    def wrapper():\n        print("Before")\n        func()\n        print("After")\n    return wrapper`,
    `set1 = {1, 2, 3}\nset2 = {3, 4, 5}\nintersection = set1 & set2`,
    `import threading\ndef worker():\n    print("Worker thread running")`,
    `def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr)//2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)`,
    `class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, item):\n        self.items.append(item)`,
    `def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a`,
    `matrix = [[0]*3 for _ in range(3)]`,
    `def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]`,
    `class Queue:\n    def __init__(self):\n        self.items = []\n    def enqueue(self, item):\n        self.items.append(item)`,
    `def power(base, exp):\n    if exp == 0: return 1\n    if exp < 0: return 1/power(base, -exp)\n    return base * power(base, exp-1)`,
    `from datetime import datetime\nnow = datetime.now()`,
    `import json\ndata = json.dumps({"name": "John"})`,
    `def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i-1\n        while j >= 0 and arr[j] > key:\n            arr[j+1] = arr[j]\n            j -= 1\n        arr[j+1] = key`,
    `class BinaryTree:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None`,
    `def selection_sort(arr):\n    for i in range(len(arr)):\n        min_idx = i\n        for j in range(i+1, len(arr)):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]`,
    `from collections import deque\nqueue = deque(["a", "b", "c"])`,
    `def linear_search(arr, target):\n    for i, num in enumerate(arr):\n        if num == target:\n            return i\n    return -1`,
    `class Graph:\n    def __init__(self):\n        self.graph = {}`,
    `def dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(start)\n    for next in graph[start]:\n        if next not in visited:\n            dfs(graph, next, visited)`,
    `def bfs(graph, start):\n    visited = set([start])\n    queue = deque([start])\n    while queue:\n        vertex = queue.popleft()\n        for neighbor in graph[vertex]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)`,
    `def heap_sort(arr):\n    def heapify(arr, n, i):\n        largest = i\n        l = 2 * i + 1\n        r = 2 * i + 2\n        if l < n and arr[l] > arr[largest]:\n            largest = l\n        if r < n and arr[r] > arr[largest]:\n            largest = r\n        if largest != i:\n            arr[i], arr[largest] = arr[largest], arr[i]\n            heapify(arr, n, largest)`,
    `def knapsack(values, weights, capacity):\n    n = len(values)\n    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]`,
    `def longest_common_subsequence(str1, str2):\n    m, n = len(str1), len(str2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]`,
    `def edit_distance(str1, str2):\n    m, n = len(str1), len(str2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]`,
    `def coin_change(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0`,
    `def matrix_multiply(A, B):\n    return [[sum(a*b for a,b in zip(A_row,B_col)) for B_col in zip(*B)] for A_row in A]`,
    `def is_palindrome(s):\n    return s == s[::-1]`,
    `def count_sort(arr):\n    max_element = max(arr)\n    count = [0] * (max_element + 1)\n    for i in arr:\n        count[i] += 1`,
    `def radix_sort(arr):\n    max_num = max(arr)\n    exp = 1\n    while max_num // exp > 0:\n        counting_sort(arr, exp)\n        exp *= 10`,
    `def shell_sort(arr):\n    n = len(arr)\n    gap = n//2\n    while gap > 0:\n        for i in range(gap,n):\n            temp = arr[i]\n            j = i\n            while j >= gap and arr[j-gap] > temp:\n                arr[j] = arr[j-gap]\n                j -= gap\n            arr[j] = temp\n        gap //= 2`,
    `def floyd_warshall(graph):\n    V = len(graph)\n    dist = [[float('inf')]*V for _ in range(V)]`,
    `def dijkstra(graph, start):\n    distances = {vertex: float('inf') for vertex in graph}\n    distances[start] = 0`,
    `def bellman_ford(graph, start):\n    distances = {vertex: float('inf') for vertex in graph}\n    distances[start] = 0`
];