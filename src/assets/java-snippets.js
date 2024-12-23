export const javaSnippets = [
    // Basic Loop
    `for (int i = 0; i < 10; i++) {\n    System.out.println(i);\n}`,
    
    // Basic Method
    `public String greet(String name) {\n    return "Hello, " + name + "!";\n}`,
    
    // While Loop
    `int counter = 0;\nwhile (counter < 5) {\n    System.out.println(counter);\n    counter++;\n}`,
    
    // Basic Class
    `public class Person {\n    private String name;\n    public Person(String name) {\n        this.name = name;\n    }\n}`,
    
    // ArrayList Usage
    `ArrayList<String> list = new ArrayList<>();\nlist.add("Hello");\nlist.add("World");`,
    
    // Recursion
    `public static int factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n}`,
    
    // Exception Handling
    `try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Division by zero");\n}`,
    
    // Records (Java 16+)
    `record Point(int x, int y) {\n    // Compact constructor\n    public Point {\n        if (x < 0 || y < 0) {\n            throw new IllegalArgumentException("Coordinates must be non-negative");\n        }\n    }\n}`,
    
    // Pattern Matching for instanceof (Java 16+)
    `if (obj instanceof String str) {\n    // str is already cast to String\n    System.out.println(str.toUpperCase());\n}`,
    
    // Switch Expressions (Java 14+)
    `String result = switch(day) {\n    case MONDAY, FRIDAY -> "Working day";\n    case SATURDAY, SUNDAY -> "Weekend";\n    default -> "Unknown";\n};`,
    
    // Text Blocks (Java 15+)
    `String query = """
                   SELECT id, name, email
                   FROM users
                   WHERE active = true
                   ORDER BY name
                   """;`,
    
    // Sealed Classes (Java 17+)
    `sealed interface Shape permits Circle, Rectangle, Triangle {\n    double area();\n}\n\nfinal class Circle implements Shape {\n    private final double radius;\n    public Circle(double radius) { this.radius = radius; }\n    public double area() { return Math.PI * radius * radius; }\n}`,
    
    // Stream API
    `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nint sum = numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .map(n -> n * n)\n    .reduce(0, Integer::sum);`,
    
    // Optional Usage
    `Optional<String> optional = Optional.ofNullable(getName());\nString name = optional.orElse("Unknown");\n\noptional.ifPresent(value -> System.out.println("Name: " + value));`,
    
    // CompletableFuture
    `CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n    return fetchDataFromApi();\n}).thenApply(data -> {\n    return processData(data);\n}).exceptionally(ex -> {\n    return "Error: " + ex.getMessage();\n});`,
    
    // var Type Inference (Java 10+)
    `var numbers = new ArrayList<Integer>();\nvar map = Map.of("key1", 1, "key2", 2);\nvar result = calculateResult();`,
    
    // Collection Factory Methods
    `List<String> list = List.of("one", "two", "three");\nSet<Integer> set = Set.of(1, 2, 3);\nMap<String, Integer> map = Map.of("one", 1, "two", 2);`,
    
    // Enhanced for Loop with var
    `var numbers = List.of(1, 2, 3, 4, 5);\nfor (var number : numbers) {\n    System.out.println(number);\n}`,
    
    // Method References
    `List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\nnames.forEach(System.out::println);`,
    
    // Time API
    `LocalDateTime now = LocalDateTime.now();\nZonedDateTime zoned = ZonedDateTime.now(ZoneId.of("UTC"));\nDuration duration = Duration.between(start, end);`,
    
    // Collectors Usage
    `List<Person> people = getPeople();\nMap<String, List<Person>> byDepartment = people.stream()\n    .collect(Collectors.groupingBy(Person::getDepartment));`,
    
    // Pattern Matching for Switch (Java 17 Preview)
    `String formatted = switch (obj) {\n    case Integer i -> String.format("int %d", i);\n    case Long l    -> String.format("long %d", l);\n    case Double d  -> String.format("double %f", d);\n    case String s  -> String.format("String %s", s);\n    default        -> obj.toString();\n};`,
    
    // Records with Generic Type
    `record Pair<T, U>(T first, U second) {\n    public Pair {\n        Objects.requireNonNull(first);\n        Objects.requireNonNull(second);\n    }\n}`,
    
    // Enhanced Random Number Generation
    `var random = new Random();\nvar randomInts = random.ints(10, 1, 100)\n    .boxed()\n    .collect(Collectors.toList());`,
    
    // Reactive Streams
    `Flow.Publisher<String> publisher = subscriber -> {\n    subscriber.onNext("Hello");\n    subscriber.onNext("World");\n    subscriber.onComplete();\n};`
];
