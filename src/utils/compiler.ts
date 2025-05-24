interface CompileResult {
  output: string;
  error: string | null;
}

// This is a simple compiler that runs code in the browser
// In a real app, we would use a backend service for compilation
export const compileAndRun = (code: string, language: string): Promise<CompileResult> => {
  // For this demo, we'll only support JavaScript execution in the browser
  return new Promise((resolve) => {
    if (language === 'javascript' || language === 'typescript') {
      try {
        // Create a sandbox for running the code
        const output: string[] = [];
        const originalConsoleLog = console.log;
        const originalConsoleError = console.error;
        const originalConsoleWarn = console.warn;
        const originalConsoleInfo = console.info;
        
        // Override console methods to capture output
        console.log = (...args) => {
          output.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
          originalConsoleLog(...args);
        };
        
        console.error = (...args) => {
          output.push(`Error: ${args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' ')}`);
          originalConsoleError(...args);
        };
        
        console.warn = (...args) => {
          output.push(`Warning: ${args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' ')}`);
          originalConsoleWarn(...args);
        };
        
        console.info = (...args) => {
          output.push(`Info: ${args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' ')}`);
          originalConsoleInfo(...args);
        };
        
        // Execute the code
        // eslint-disable-next-line no-new-func
        const executeCode = new Function(code);
        executeCode();
        
        // Restore console methods
        console.log = originalConsoleLog;
        console.error = originalConsoleError;
        console.warn = originalConsoleWarn;
        console.info = originalConsoleInfo;
        
        resolve({
          output: output.join('\n'),
          error: null
        });
      } catch (error) {
        resolve({
          output: '',
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    } else {
      // For other languages, we would use a backend service
      // For now, we'll just return a message
      resolve({
        output: `Running ${language} code is not supported in this demo.\n\nIn a full implementation, this would be sent to a backend service for compilation and execution.`,
        error: null
      });
    }
  });
};