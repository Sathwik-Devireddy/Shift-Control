console.log("hello node js from ts");
//basic types
let isDone = false;
let num = 9;
let str = "hello";
let list = [1, 2, 3];
let products = ["a", "b", "c"];
let any = ["a", 1, true];
let x = undefined;
let g = null;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
//tuple
let tup = [1, "hello"];
//function
function add(x, y) {
    return x + y;
}
let user = {
    name: "Nataraj",
    age: 28
};
export {};
//# sourceMappingURL=basics.js.map