let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
enum Color {Red=2, Green, Blue};
let c: Color = Color.Green;
let d = (Object.keys(Color) as Array<keyof typeof Color>).map(v => v);
let listAny: any[] = [1,'3',false]
// void 代表函数没有返回值
function create(o: object | null): void {
    console.log(o);
}
let someValue: any = 'meng';
// 类型断言 可以理解为开发者预判someValue的类型为String
let strLength: number = (someValue as string).length;

// 接口
interface LabelledValue {
    label: string
};
function printLabel(labelledObject: LabelledValue):void{
    console.log(labelledObject.label);
};
let myObj = {name:'zhang',label:'person'};
// 只读数组
let a: ReadonlyArray<number | string>= [12,3,'yes'];
// a[0] = 3; //Error
// 可索引的类型
interface NumberDictionary {
    [index: string]: number,
    // name: string //name的值不是number类型
    label: number
}
let numberTest: NumberDictionary;
numberTest = {label: 9};
// 接口继承
interface Shape {
    color: string;
};
interface PenStroke {
    penWidth: number;
};
interface Square extends Shape, PenStroke {
    sideLength: number
};
let square = <Square>{};
square.color = 'red';
square.penWidth = 3;
square.sideLength = 4;
// 范型
interface Lengthwise {
    length: number;
};
function loggingIdentity<T extends Lengthwise>(arg: T): T{
    console.log(arg.length);
    return arg;
}
enum ShapeKind {
    Circle,
    Square
};
interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}
interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}
let cc: Circle = {
    // kind: ShapeKind.Square, // Error
    kind: ShapeKind.Circle,
    radius: 100,
}
// const枚举 它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来
const enum Enum {
    A = 1,
    B = A * 2
};
let dirs = [Enum.A,Enum.B];
// let dirkeys = Object.keys(Enum); //Error

//类型兼容性
interface Named {
    name: string
};
let x: Named;
let y = {name:'zh',label: 3}; 
x = y; // 会判断y中是否包含name属性

/** @type {{a: number}} */
let obj = { a: 1 };
// obj.b = 2; // 只有a属性没有b属性
/** @type{number | string} */
// let z = {};//??
let zz: Array<string>;
zz = ['4']

console.log(list,list2,c,d,Color,listAny,strLength);
create({props:8});
create(null);
// create(8)// Error

printLabel(myObj);
console.log(a,square);
loggingIdentity({length: 89,label: 9});
console.log(cc);
console.log(dirs,x,zz);

type oneType = {
    name: string
};
type twoType = {
    age: number
} & oneType;

let testType: twoType = {age: 39,name: '8'}

