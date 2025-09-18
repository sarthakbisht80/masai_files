Explanation:

Global Scope

var data = 50; defines a global variable.

This global value is accessible unless shadowed by a local variable.

Inside outer()

var data = 100; is hoisted to the top of outer.

During the first console.log, the local data exists but is still undefined.

After logging, it gets assigned 100.

Output: Outer data: undefined.

Inside inner()

Similarly, var data = 200; is hoisted in inner.

On the console.log, the local variable is declared but uninitialized → undefined.

After logging, it becomes 200.

Output: Inner data: undefined.

Inside deep()

No local data is declared inside deep.

JS looks up the scope chain and finds data = 200 from inner.

Output: Deep data: 200.