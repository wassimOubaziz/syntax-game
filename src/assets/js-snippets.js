export const jsSnippets = [
  // Basic Operations
  `for (let i = 0; i < 10; i++) {\n  console.log(i);\n}`,
  
  // String Manipulation
  `const greet = (name) => {\n  return "Hello, " + name + "!";\n}`,
  
  // Loops
  `let counter = 0;\nwhile (counter < 5) {\n  console.log(counter);\n  counter++;\n}`,
  
  // Array Map
  `const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled);`,
  
  // Array Filter
  `const scores = [85, 92, 78, 95, 88];\nconst highScores = scores.filter(score => score > 90);\nconsole.log(highScores);`,
  
  // Array ForEach
  `const fruits = ['apple', 'banana', 'cherry'];\nfruits.forEach(fruit => {\n  console.log(fruit.toUpperCase());\n});`,
  
  // Object Destructuring
  `const user = {\n  name: 'John',\n  age: 25\n};\nconst { name, age } = user;\nconsole.log(name + " is " + age + " years old");`,
  
  // Object Methods
  `const book = {\n  title: 'JavaScript Guide',\n  author: 'Jane Doe',\n  getInfo() {\n    return this.title + " by " + this.author;\n  }\n};`,
  
  // String Methods
  `const text = "Hello, World!";\nconst reversed = text.split('').reverse().join('');\nconsole.log(reversed);`,
  
  // Array Methods
  `const sentence = "javascript is awesome";\nconst words = sentence.split(' ');\nconst capitalized = words.map(word => {\n  return word[0].toUpperCase() + word.slice(1);\n}).join(' ');`,
  
  // Optional Chaining
  `const user = {\n  details: {\n    address: null\n  }\n};\nconst zipCode = user?.details?.address?.zipCode;\nconsole.log(zipCode); // undefined`,

  // Nullish Coalescing
  `const config = {\n  timeout: 0,\n  retry: null\n};\nconst timeout = config.timeout ?? 5000;\nconst retry = config.retry ?? 3;\nconsole.log(timeout, retry); // 0, 3`,

  // Private Class Fields
  `class BankAccount {\n  #balance = 0;\n  deposit(amount) {\n    this.#balance += amount;\n  }\n  getBalance() {\n    return this.#balance;\n  }\n}`,

  // Spread Operator Examples
  `const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\n\nconst obj1 = { foo: 'bar' };\nconst obj2 = { baz: 'qux' };\nconst mergedObj = { ...obj1, ...obj2 };`,

  // Modern Async/Await with Error Handling
  `async function fetchUserData(id) {\n  try {\n    const response = await fetch(\`/api/users/\${id}\`);\n    if (!response.ok) throw new Error('User not found');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error.message);\n    throw error;\n  }\n}`,

  // Generator Function
  `function* numberGenerator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst gen = numberGenerator();\nconsole.log(gen.next().value); // 1\nconsole.log(gen.next().value); // 2`,

  // Set Data Structure
  `const uniqueNumbers = new Set([1, 1, 2, 2, 3, 3]);\nconsole.log([...uniqueNumbers]); // [1, 2, 3]\nuniqueNumbers.add(4);\nuniqueNumbers.delete(1);`,

  // Map Data Structure
  `const userMap = new Map();\nuserMap.set('john', { age: 30, role: 'admin' });\nuserMap.set('jane', { age: 25, role: 'user' });\n\nfor (const [key, value] of userMap) {\n  console.log(\`\${key}: \${value.role}\`);\n}`,

  // Template Literals with Tags
  `const highlight = (strings, ...values) => {
    return strings.reduce((result, str, i) => 
      \`\${result}\${str}\${values[i] ? \`<span>\${values[i]}</span>\` : ''}\`
    , '');
  };
  const name = 'JavaScript';
  const result = highlight\`Hello \${name}!\`;`,

  // Array Methods - flatMap
  `const sentences = ['Hello world', 'How are you'];\nconst words = sentences.flatMap(sentence => sentence.split(' '));\nconsole.log(words); // ['Hello', 'world', 'How', 'are', 'you']`,

  // Object Methods - Object.fromEntries
  `const entries = [['name', 'John'], ['age', 30]];\nconst obj = Object.fromEntries(entries);\nconsole.log(obj); // { name: 'John', age: 30 }`,

  // Promise.allSettled
  `const promises = [\n  Promise.resolve(1),\n  Promise.reject('error'),\n  Promise.resolve(3)\n];\n\nPromise.allSettled(promises)\n  .then(results => {\n    results.forEach(result => {\n      if (result.status === 'fulfilled') {\n        console.log('Value:', result.value);\n      } else {\n        console.log('Error:', result.reason);\n      }\n    });\n  });`,

  // Spread Operator
  `const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nconsole.log(combined);`,
  
  // Rest Parameters
  `function sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sum(1, 2, 3, 4));`,
  
  // Promise
  `function delay(ms) {\n  return new Promise(resolve => {\n    setTimeout(resolve, ms);\n  });\n}`,
  
  // Async/Await
  `async function fetchUser() {\n  try {\n    const response = await fetch('https://api.example.com/user');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}`,
  
  // Class Definition
  `class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n  \n  getArea() {\n    return this.width * this.height;\n  }\n}`,
  
  // Error Handling
  `try {\n  throw new Error('Something went wrong');\n} catch (error) {\n  console.error(error.message);\n} finally {\n  console.log('Cleanup code');\n}`,
  
  // Map Data Structure
  `const userRoles = new Map();\nuserRoles.set('admin', ['read', 'write']);\nuserRoles.set('user', ['read']);\nconsole.log(userRoles.get('admin'));`,
  
  // Set Data Structure
  `const uniqueNumbers = new Set([1, 1, 2, 2, 3, 3]);\nconsole.log([...uniqueNumbers]);`,
  
  // Array Destructuring
  `const coordinates = [10, 20, 30];\nconst [x, y, z] = coordinates;\nconsole.log("Point:", x, y, z);`,
  
  // Object Methods
  `const calculator = {\n  add(a, b) { return a + b; },\n  subtract(a, b) { return a - b; },\n  multiply(a, b) { return a * b; }\n};`,
  
  // Generator Function
  `function* numberGenerator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst gen = numberGenerator();\nconsole.log(gen.next().value);`,
  
  // Regular Expression
  `const email = "user@example.com";\nconst isValid = /^[\\w-]+(\\.[\\w-]+)*@([\\w-]+\\.)+[\\w-]{2,4}$/.test(email);\nconsole.log(isValid);`,
  
  // Array Methods Chain
  `const numbers = [1, 2, 3, 4, 5];\nconst result = numbers\n  .filter(n => n % 2 === 0)\n  .map(n => n * 2)\n  .reduce((sum, n) => sum + n, 0);`,
  
  // Closure
  `function createCounter() {\n  let count = 0;\n  return {\n    increment() { count++; return count; },\n    decrement() { count--; return count; }\n  };\n}`,
  
  // DOM Manipulation
  `function createElements() {\n  const div = document.createElement('div');\n  div.className = 'container';\n  div.innerHTML = '<h1>Hello World</h1>';\n  document.body.appendChild(div);\n}`,
  
  // Event Handling
  `document.addEventListener('click', (event) => {\n  if (event.target.matches('.button')) {\n    console.log('Clicked:', event.target.textContent);\n  }\n});`,
  
  // Array Sorting
  `const items = ['banana', 'apple', 'orange', 'grape'];\nconst sorted = items.sort();\nconsole.log(sorted);`,
  
  // Object Freeze
  `const settings = Object.freeze({\n  theme: 'dark',\n  language: 'en'\n});\nconsole.log(settings);`,
  
  // Array Find
  `const users = [\n  { id: 1, name: 'John' },\n  { id: 2, name: 'Jane' }\n];\nconst user = users.find(u => u.id === 1);`,
  
  // String Template
  `const name = 'World';\nconst message = "Hello, " + name + "!";\nconsole.log(message);`,
  
  // Nullish Coalescing
  `const value = null;\nconst defaultValue = value ?? 'default';\nconsole.log(defaultValue);`,

  // Array Transformation
  `const prices = [10.99, 5.45, 23.99, 7.89];
const formatted = prices.map(price => 
  "$" + price.toFixed(2)
);
console.log(formatted);`,

  // Object Property Shorthand
  `const firstName = "John";
const lastName = "Doe";
const age = 30;
const person = { firstName, lastName, age };
console.log(person);`,

  // Array Includes
  `const fruits = ["apple", "banana", "orange"];
const hasApple = fruits.includes("apple");
const hasGrape = fruits.includes("grape");
console.log(hasApple, hasGrape);`,

  // String Padding
  `const numbers = [1, 2, 3, 4, 5];
const padded = numbers.map(num => 
  String(num).padStart(3, '0')
);
console.log(padded);`,

  // Object Entries
  `const stock = {
  apple: 5,
  banana: 8,
  orange: 12
};
for (const [fruit, count] of Object.entries(stock)) {
  console.log(fruit + ": " + count);
}`,

  // Array Flat
  `const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat(2);
console.log(flattened);`,

  // Optional Chaining
  `const user = {
  details: {
    address: null
  }
};
const city = user.details?.address?.city ?? "Unknown";
console.log(city);`,

  // Array Some
  `const numbers = [1, 3, 5, 7, 8, 9];
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Contains even number:", hasEven);`,

  // String Replace All
  `const text = "cat cat cat";
const replaced = text.replaceAll("cat", "dog");
console.log(replaced);`,

  // Object Values
  `const scores = {
  math: 95,
  science: 88,
  history: 92
};
const average = Object.values(scores)
  .reduce((sum, score) => sum + score, 0) / Object.values(scores).length;`,

  // Array Every
  `const ages = [18, 21, 25, 19, 20];
const allAdults = ages.every(age => age >= 18);
console.log("All adults:", allAdults);`,

  // Date Formatting
  `const now = new Date();
const formatted = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(now);`,

  // Number Formatting
  `const number = 1234567.89;
const formatted = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(number);`,

  // Array From
  `const range = Array.from(
  { length: 5 },
  (_, index) => (index + 1) * 2
);
console.log(range);`,

  // Object Keys
  `const permissions = {
  read: true,
  write: true,
  execute: false
};
const capabilities = Object.keys(permissions)
  .filter(key => permissions[key]);`,

  // Promise All
  `const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
];
Promise.all(promises)
  .then(results => console.log(results));`,

  // Object Assign
  `const defaultSettings = {
  theme: 'light',
  fontSize: 12,
  notifications: true
};
const userSettings = {
  theme: 'dark'
};
const finalSettings = Object.assign({}, defaultSettings, userSettings);`,

  // Array Find Index
  `const inventory = [
  { id: 1, stock: 5 },
  { id: 2, stock: 0 },
  { id: 3, stock: 8 }
];
const outOfStock = inventory.findIndex(item => item.stock === 0);`,

  // String Trim
  `const input = "   hello world   ";
const cleaned = input.trim();
const words = cleaned.split(' ');
console.log(words);`,

  // Math Methods
  `const numbers = [2.1, 2.7, -1.5, -2.8];
const rounded = numbers.map(num => ({
  floor: Math.floor(num),
  ceil: Math.ceil(num),
  round: Math.round(num)
}));`,

  // URL Manipulation
  `const url = new URL('https://example.com/path?name=John&age=25');
url.searchParams.append('city', 'New York');
console.log(url.toString());`,

  // Set Operations
  `const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const intersection = new Set(
  [...set1].filter(x => set2.has(x))
);`,

  // JSON Manipulation
  `const data = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'music']
};
const json = JSON.stringify(data, null, 2);
const parsed = JSON.parse(json);`,

  // Array Group By (Modern JS)
  `const inventory = [
  { type: 'fruit', name: 'apple' },
  { type: 'vegetable', name: 'carrot' },
  { type: 'fruit', name: 'banana' }
];
const grouped = inventory.reduce((acc, item) => {
  (acc[item.type] = acc[item.type] || []).push(item);
  return acc;
}, {});`,

  // Promise Race
  `const timeout = new Promise(resolve => 
  setTimeout(() => resolve('timeout'), 5000)
);
const data = new Promise(resolve =>
  setTimeout(() => resolve('data'), 3000)
);
Promise.race([timeout, data])
  .then(result => console.log(result));`,

  // Web Storage
  `localStorage.setItem('user', JSON.stringify({
  name: 'John',
  theme: 'dark'
}));
const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser);`,

  // Regular Expression Groups
  `const pattern = /(\d{4})-(\d{2})-(\d{2})/;
const date = '2024-12-25';
const [full, year, month, day] = date.match(pattern);
console.log(year, month, day);`,

  // Array Sort Custom
  `const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 699 },
  { name: 'Tablet', price: 399 }
];
products.sort((a, b) => a.price - b.price);`,

  // Async Function Composition
  `async function fetchUserData(id) {
  const response = await fetch('/api/users/' + id);
  const user = await response.json();
  const formatted = {
    ...user,
    fullName: user.firstName + ' ' + user.lastName,
    joinDate: new Date(user.joinDate).toLocaleDateString()
  };
  return formatted;
}`
];
