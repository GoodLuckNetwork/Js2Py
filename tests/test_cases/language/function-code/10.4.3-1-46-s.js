// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.4.3-1-46-s
description: >
    Strict Mode - checking 'this' (FunctionExpression with a strict
    directive prologue defined within a FunctionDeclaration)
flags: [noStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
function f1() {
    var f = function () {
        "use strict";
        return typeof this;
    }
    return (f()==="undefined") && (this===fnGlobalObject());
}
return f1();
}
runTestCase(testcase);
