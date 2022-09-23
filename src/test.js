var list = [1, 2, 3];
var list2 = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var d = Object.keys(Color).map(function (v) { return v; });
var listAny = [1, '3', false];
// void 代表函数没有返回值
function create(o) {
    console.log(o);
}
var someValue = 'meng';
// 类型断言 可以理解为开发者预判someValue的类型为String
var strLength = someValue.length;
;
function printLabel(labelledObject) {
    console.log(labelledObject.label);
}
;
var myObj = { name: 'zhang', label: 'person' };
// 只读数组
var a = [12, 3, 'yes'];
var numberTest;
numberTest = { label: 9 };
;
;
;
var square = {};
square.color = 'red';
square.penWidth = 3;
square.sideLength = 4;
;
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
;
var cc = {
    // kind: ShapeKind.Square, // Error
    kind: ShapeKind.Circle,
    radius: 100
};
;
var dirs = [1 /* A */, 2 /* B */];
;
var x;
var y = { name: 'zh', label: 3 };
x = y; // 会判断y中是否包含name属性
/** @type {{a: number}} */
var obj = { a: 1 };
// obj.b = 2; // 只有a属性没有b属性
/** @type{number | string} */
// let z = {};//??
var zz;
zz = ['4'];
console.log(list, list2, c, d, Color, listAny, strLength);
create({ props: 8 });
create(null);
// create(8)// Error
printLabel(myObj);
console.log(a, square);
loggingIdentity({ length: 89, label: 9 });
console.log(cc);
console.log(dirs, x, zz);
