export const cppSnippets = [
    // Basic Loop
    `for (int i = 0; i < 10; i++) {\n    cout << i << endl;\n}`,
    
    // Function
    `string greet(string name) {\n    return "Hello, " + name + "!";\n}`,
    
    // While Loop
    `int counter = 0;\nwhile (counter < 5) {\n    cout << counter << endl;\n    counter++;\n}`,
    
    // Basic Class
    `class Person {\nprivate:\n    string name;\npublic:\n    Person(string n) : name(n) {}\n};`,
    
    // Vector Usage
    `vector<string> vec;\nvec.push_back("Hello");\nvec.push_back("World");`,
    
    // Recursion
    `int factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n}`,
    
    // Exception Handling
    `try {\n    int result = 10 / 0;\n} catch (exception& e) {\n    cout << "Error: " << e.what() << endl;\n}`,
    
    // Smart Pointers - unique_ptr
    `auto createPerson() {\n    return make_unique<Person>("John");\n}\n\nunique_ptr<Person> person = createPerson();\n// Memory automatically freed when person goes out of scope`,
    
    // Smart Pointers - shared_ptr
    `shared_ptr<int> ptr1 = make_shared<int>(42);\nshared_ptr<int> ptr2 = ptr1;\ncout << "Count: " << ptr1.use_count() << endl; // Shows 2`,
    
    // Lambda Expressions
    `auto multiply = [](int x, int y) { return x * y; };\nint result = multiply(5, 3);\n\nvector<int> numbers = {1, 2, 3, 4, 5};\nfor_each(numbers.begin(), numbers.end(), [](int n) {\n    cout << n * n << " ";\n});`,
    
    // Range-based for Loop
    `vector<int> numbers = {1, 2, 3, 4, 5};\nfor (const auto& num : numbers) {\n    cout << num << " ";\n}`,
    
    // std::optional
    `optional<string> getMaybeValue(bool hasValue) {\n    if (hasValue)\n        return "Hello";\n    return nullopt;\n}\n\nauto value = getMaybeValue(true);\nif (value) {\n    cout << *value << endl;\n}`,
    
    // std::variant
    `variant<int, string, double> var;\nvar = 42;\ncout << get<int>(var) << endl;\nvar = "Hello";\ncout << get<string>(var) << endl;`,
    
    // Template Metaprogramming
    `template<typename T>\nconcept Numeric = is_arithmetic_v<T>;\n\ntemplate<Numeric T>\nT add(T a, T b) {\n    return a + b;\n}`,
    
    // Move Semantics
    `class Buffer {\nprivate:\n    unique_ptr<int[]> data;\n    size_t size;\npublic:\n    Buffer(size_t s) : data(make_unique<int[]>(s)), size(s) {}\n    Buffer(Buffer&& other) noexcept\n        : data(move(other.data)), size(other.size) {\n        other.size = 0;\n    }\n};`,
    
    // Structured Bindings
    `map<string, int> ages = {{"Alice", 25}, {"Bob", 30}};\nfor (const auto& [name, age] : ages) {\n    cout << name << " is " << age << " years old\\n";\n}`,
    
    // constexpr Functions
    `constexpr int fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}\nconstexpr int fib10 = fibonacci(10);`,
    
    // std::array with Compile-time Size
    `array<int, 5> arr = {1, 2, 3, 4, 5};\nfor (const auto& elem : arr) {\n    cout << elem << " ";\n}`,
    
    // Fold Expressions
    `template<typename... Args>\nauto sum(Args... args) {\n    return (args + ...);\n}\nint total = sum(1, 2, 3, 4, 5);`,
    
    // std::span
    `void processArray(span<int> numbers) {\n    for (int num : numbers) {\n        cout << num << " ";\n    }\n}\n\narray<int, 5> arr = {1, 2, 3, 4, 5};\nprocessArray(arr);`,
    
    // Coroutines (C++20)
    `generator<int> range(int start, int end) {\n    for (int i = start; i < end; ++i) {\n        co_yield i;\n    }\n}\n\nfor (int i : range(0, 5)) {\n    cout << i << " ";\n}`
];
