Explanation

Global Scope

var data = 50; creates a global variable.

Inside outer()

var data = 100; is hoisted to the top of outer.

At the first log, it exists but is undefined.

After the log, it becomes 100.

Output: Outer data: undefined.

Inside inner()

Same behavior: var data = 200; is hoisted.

At the log, it’s still undefined.

Afterward, it becomes 200.

Output: Inner data: undefined.

Inside deep()

No local variable, so JS looks up the scope chain.

Finds data = 200 from inner.

Output: Deep data: 200.