# Execution Context (Deep Dive)

## Summary
An **Execution Context** is the environment where JS code runs. It contains the LexicalEnvironment (variables/funcs), `this` binding, and internal engine data. Global code and each function call create their own execution context.

## Key Concepts
- Creation phase: hoisting of function declarations and `var` (initialised as `undefined`), TDZ for `let/const`.
- Execution phase: code runs line-by-line, assignments happen.
- Call stack: contexts are pushed/popped; synchronous execution.
- Event loop: microtasks (Promises) run before macrotasks (setTimeout) after the stack clears.
- Closures: returned inner functions keep reference to their outer LexicalEnvironment.

## Examples
See `execution-context.js` for practical examples demonstrating hoisting, call stack, event loop, and closure relation.

## Practice Problems
1. Predict outputs for the snippet using setTimeout and Promise (order).
2. Explain results of accessing `var` vs `let` before declaration.
3. Build `makeCounter()` and explain where `count` is stored.
4. Create nested function calls to inspect call stack in DevTools.

## Debugging Tips
- Use `debugger;` and DevTools to step into function calls and inspect the Scope panel.
- Use `console.trace()` to print a stack trace.
- Use small isolated files to reproduce and inspect behavior.

## Further Reading
- MDN: Execution context and hoisting
- "You Don't Know JS" — Scope & Closures
