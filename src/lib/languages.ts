export interface Language {
  id: string;
  name: string;
  extension: string;
  monacoLanguage: string;
  defaultCode: string;
}

export const languages: Language[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    extension: 'js',
    monacoLanguage: 'javascript',
    defaultCode: `// JavaScript Code Example
console.log("Hello, World!");

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial of 5 is:", factorial(5));
`,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    extension: 'ts',
    monacoLanguage: 'typescript',
    defaultCode: `// TypeScript Code Example
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("TypeScript"));

interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "John",
  age: 30
};

console.log(user);
`,
  },
  {
    id: 'python',
    name: 'Python',
    extension: 'py',
    monacoLanguage: 'python',
    defaultCode: `# Python Code Example
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print("Hello, World!")
print(f"Factorial of 5 is: {factorial(5)}")
`,
  },
  {
    id: 'java',
    name: 'Java',
    extension: 'java',
    monacoLanguage: 'java',
    defaultCode: `// Java Code Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Factorial of 5 is: " + factorial(5));
    }
    
    public static int factorial(int n) {
        if (n == 0 || n == 1) return 1;
        return n * factorial(n - 1);
    }
}
`,
  },
  {
    id: 'csharp',
    name: 'C#',
    extension: 'cs',
    monacoLanguage: 'csharp',
    defaultCode: `// C# Code Example
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
        Console.WriteLine($"Factorial of 5 is: {Factorial(5)}");
    }
    
    static int Factorial(int n)
    {
        if (n == 0 || n == 1) return 1;
        return n * Factorial(n - 1);
    }
}
`,
  },
  {
    id: 'cpp',
    name: 'C++',
    extension: 'cpp',
    monacoLanguage: 'cpp',
    defaultCode: `// C++ Code Example
#include <iostream>

int factorial(int n) {
    if (n == 0 || n == 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    std::cout << "Hello, World!" << std::endl;
    std::cout << "Factorial of 5 is: " << factorial(5) << std::endl;
    return 0;
}
`,
  },
  {
    id: 'go',
    name: 'Go',
    extension: 'go',
    monacoLanguage: 'go',
    defaultCode: `// Go Code Example
package main

import "fmt"

func factorial(n int) int {
    if n == 0 || n == 1 {
        return 1
    }
    return n * factorial(n-1)
}

func main() {
    fmt.Println("Hello, World!")
    fmt.Printf("Factorial of 5 is: %d\\n", factorial(5))
}
`,
  },
  {
    id: 'ruby',
    name: 'Ruby',
    extension: 'rb',
    monacoLanguage: 'ruby',
    defaultCode: `# Ruby Code Example
def factorial(n)
  if n == 0 || n == 1
    return 1
  else
    return n * factorial(n-1)
  end
end

puts "Hello, World!"
puts "Factorial of 5 is: #{factorial(5)}"
`,
  },
  {
    id: 'html',
    name: 'HTML',
    extension: 'html',
    monacoLanguage: 'html',
    defaultCode: `<!DOCTYPE html>
<html>
<head>
    <title>HTML Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #333;
        }
        .container {
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <div class="container">
        <p>This is a basic HTML example.</p>
        <button onclick="alert('Button clicked!')">Click Me</button>
    </div>
</body>
</html>
`,
  },
];

export const getLanguageById = (id: string): Language | undefined => {
  return languages.find(lang => lang.id === id);
};

export const getDefaultLanguage = (): Language => {
  return languages[0]; // JavaScript as default
};