export interface LanguageOption {
  id: string;
  name: string;
  extension: string;
  defaultCode: string;
}

export const languageOptions: LanguageOption[] = [
  {
    id: "javascript",
    name: "JavaScript",
    extension: "js",
    defaultCode: `// JavaScript Example
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci Series:");
for (let i = 0; i < 10; i++) {
  console.log(\`Fibonacci(\${i}) = \${fibonacci(i)}\`);
}`,
  },
  {
    id: "typescript",
    name: "TypeScript",
    extension: "ts",
    defaultCode: `// TypeScript Example
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci Series:");
for (let i = 0; i < 10; i++) {
  console.log(\`Fibonacci(\${i}) = \${fibonacci(i)}\`);
}`,
  },
  {
    id: "python",
    name: "Python",
    extension: "py",
    defaultCode: `# Python Example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print("Fibonacci Series:")
for i in range(10):
    print(f"Fibonacci({i}) = {fibonacci(i)}")`,
  },
  {
    id: "java",
    name: "Java",
    extension: "java",
    defaultCode: `// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Fibonacci Series:");
        for (int i = 0; i < 10; i++) {
            System.out.println("Fibonacci(" + i + ") = " + fibonacci(i));
        }
    }
    
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}`,
  },
  {
    id: "cpp",
    name: "C++",
    extension: "cpp",
    defaultCode: `// C++ Example
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    cout << "Fibonacci Series:" << endl;
    for (int i = 0; i < 10; i++) {
        cout << "Fibonacci(" << i << ") = " << fibonacci(i) << endl;
    }
    return 0;
}`,
  },
  {
    id: "csharp",
    name: "C#",
    extension: "cs",
    defaultCode: `// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine("Fibonacci Series:");
        for (int i = 0; i < 10; i++) {
            Console.WriteLine($"Fibonacci({i}) = {Fibonacci(i)}");
        }
    }
    
    static int Fibonacci(int n) {
        if (n <= 1) return n;
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}`,
  },
  {
    id: "ruby",
    name: "Ruby",
    extension: "rb",
    defaultCode: `# Ruby Example
def fibonacci(n)
  return n if n <= 1
  fibonacci(n-1) + fibonacci(n-2)
end

puts "Fibonacci Series:"
10.times do |i|
  puts "Fibonacci(#{i}) = #{fibonacci(i)}"
end`,
  },
  {
    id: "go",
    name: "Go",
    extension: "go",
    defaultCode: `// Go Example
package main

import "fmt"

func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

func main() {
    fmt.Println("Fibonacci Series:")
    for i := 0; i < 10; i++ {
        fmt.Printf("Fibonacci(%d) = %d\\n", i, fibonacci(i))
    }
}`,
  }
];

export const getLanguageById = (id: string): LanguageOption => {
  return languageOptions.find((lang) => lang.id === id) || languageOptions[0];
};