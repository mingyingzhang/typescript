type k = keyof any;
type k1 = keyof never;

// extends 前面的可以满足后面的需求
var kt: k = 2;
type Test<T> = T extends number ? 1 : 2;
type res = Test< 1 | 'a'>;

type Test2<T> = T extends true ? 1 : 2;
type res2 = Test2<boolean>;

type Test3<T> = T extends true ? 1 : 2;
type res3 = Test3<any>;

type Test4<T> = T extends true ? 1 : 2;
type res4 = Test4<never>;


type TTuple =[string,number];
type TArray = Array<string| number>;

type Res = TTuple extends TArray ? true : false;
type Res2 = TArray extends TTuple ? true : false;

type ElementOf<T> = T extends Array<infer P> ? P : never;
type ToUnion = ElementOf<TTuple>
