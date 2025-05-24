export interface Language {
  id: string;
  name: string;
  monacoLanguage: string;
  defaultCode: string;
  compileEndpoint?: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    id: "javascript",
    name: "JavaScript",
    monacoLanguage: "javascript",
    defaultCode: `// JavaScript Example
console.log("Hello, World!");

// Function to calculate factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Calculate factorial of 5
const result = factorial(5);
console.log(\`Factorial of 5 is \${result}\`);
`,
  },
  {
    id: "typescript",
    name: "TypeScript",
    monacoLanguage: "typescript",
    defaultCode: `// TypeScript Example
console.log("Hello, World!");

// Function to calculate factorial
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Calculate factorial of 5
const result: number = factorial(5);
console.log(\`Factorial of 5 is \${result}\`);

// Interface example
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30
};

console.log(\`Person: \${person.name}, \${person.age}\`);
`,
  },
  {
    id: "python",
    name: "Python",
    monacoLanguage: "python",
    defaultCode: `# Python Example
print("Hello, World!")

# Function to calculate factorial
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Calculate factorial of 5
result = factorial(5)
print(f"Factorial of 5 is {result}")

# List comprehension example
squares = [x**2 for x in range(1, 6)]
print(f"Squares: {squares}")
`,
  },
  {
    id: "java",
    name: "Java",
    monacoLanguage: "java",
    defaultCode: `// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Calculate factorial of 5
        int result = factorial(5);
        System.out.println("Factorial of 5 is " + result);
    }
    
    // Function to calculate factorial
    public static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
}
`,
  },
  {
    id: "c",
    name: "C",
    monacoLanguage: "c",
    defaultCode: `#include <stdio.h>

// Function to calculate factorial
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("Hello, World!\\n");
    
    // Calculate factorial of 5
    int result = factorial(5);
    printf("Factorial of 5 is %d\\n", result);
    
    return 0;
}
`,
  },
  {
    id: "cpp",
    name: "C++",
    monacoLanguage: "cpp",
    defaultCode: `#include <iostream>
using namespace std;

// Function to calculate factorial
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    cout << "Hello, World!" << endl;
    
    // Calculate factorial of 5
    int result = factorial(5);
    cout << "Factorial of 5 is " << result << endl;
    
    return 0;
}
`,
  },
  {
    id: "csharp",
    name: "C#",
    monacoLanguage: "csharp",
    defaultCode: `using System;

class Program
{
    // Function to calculate factorial
    static int Factorial(int n)
    {
        if (n <= 1) return 1;
        return n * Factorial(n - 1);
    }
    
    static void Main()
    {
        Console.WriteLine("Hello, World!");
        
        // Calculate factorial of 5
        int result = Factorial(5);
        Console.WriteLine($"Factorial of 5 is {result}");
    }
}
`,
  },
  {
    id: "php",
    name: "PHP",
    monacoLanguage: "php",
    defaultCode: `<?php
// PHP Example
echo "Hello, World!\n";

// Function to calculate factorial
function factorial($n) {
    if ($n <= 1) return 1;
    return $n * factorial($n - 1);
}

// Calculate factorial of 5
$result = factorial(5);
echo "Factorial of 5 is " . $result . "\n";
?>
`,
  },
  {
    id: "go",
    name: "Go",
    monacoLanguage: "go",
    defaultCode: `package main

import "fmt"

// Function to calculate factorial
func factorial(n int) int {
    if n <= 1 {
        return 1
    }
    return n * factorial(n-1)
}

func main() {
    fmt.Println("Hello, World!")
    
    // Calculate factorial of 5
    result := factorial(5)
    fmt.Printf("Factorial of 5 is %d\n", result)
}
`,
  },
  {
    id: "ruby",
    name: "Ruby",
    monacoLanguage: "ruby",
    defaultCode: `# Ruby Example
puts "Hello, World!"

# Function to calculate factorial
def factorial(n)
  if n <= 1
    return 1
  end
  return n * factorial(n - 1)
end

# Calculate factorial of 5
result = factorial(5)
puts "Factorial of 5 is #{result}"

# Array example
fruits = ["apple", "banana", "orange"]
puts "Fruits: #{fruits.join(', ')}"
`,
  },
];

export const getLanguageById = (id: string): Language => {
  const language = SUPPORTED_LANGUAGES.find((lang) => lang.id === id);
  if (!language) {
    throw new Error(`Language with id ${id} not found`);
  }
  return language;
};