// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.20-1-15
description: Array.prototype.filter applied to the Arguments object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return '[object Arguments]' === Object.prototype.toString.call(obj);
        }

        var obj = (function () {
            return arguments;
        }("a", "b"));

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr[0] === "a" && newArr[1] === "b";
    }
runTestCase(testcase);
