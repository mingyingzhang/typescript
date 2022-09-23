type A = {
    aa: string,
    Bb: string,
    cc_Dd: string
}

const obj = {name: '11',age: 23};
type K = keyof typeof obj;

//条件判断
type isTwo<T> = T extends 2 ? true : false;

type one = isTwo<1>;
type two = isTwo<2>;

// type MapType<T> = {
//     [Key in keyof T]: [T[Key]];
// }

// ===========重映射===========
type MapType<T> = {
    [Key in keyof T 
        as `${Key & string}${Key & string}${Key & string}`
    ]: [T[Key]];
}

type three = MapType<{a:1,b:2}>;

type Tuple = keyof {name: '11',age: 23};

type GetValueType<P> = P extends Promise<infer Value> ? Value : never;
type GetValueResult = GetValueType<Promise<'test'>>;

type GetFirst<Arr extends unknown[]> = Arr extends [infer F, ...unknown[]] ? F : never;
type GetFirstResult = GetFirst<[1,2,3]>;

type GetLast<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...unknown[], infer Last] ? Last : never;
type GetLastValue = GetLast<[1,2,3]>;

type PopArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...infer Rest, unknown] ? Rest : never;
// type PopResult = PopArr<[1,2,3]>;
type PopResult = PopArr<[]>;

type ShiftArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [unknown, ...infer Rest] ? Rest : never;
type ShiftResult = ShiftArr<[1,2,3]>;

// 判断字符串是否以某个字符串开头
type StartWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true: false;
type StartWithResult = StartWith<'zhang mengying','zhang'>;

// 匹配
type ReplaceStr<Str extends string, From extends string, To extends string> = Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : Str;
type ReplaceResult = ReplaceStr<'zzhi','h','hang'>;

// 去掉空白字符
type TrimStrRight<Str extends string> = Str extends `${infer Rest}${' ' | '\n' | '\t'}` ? TrimStrRight<Rest> : Str;
type TrimStrRightResult = TrimStrRight<'k   '>;

type TrimStrLeft<Str extends string> = Str extends `${' ' | '\n' | '\t'}${infer Rest}` ? TrimStrLeft<Rest> : Str;
type TrimStrLeftResult = TrimStrLeft<'    k'>;

type TrimStr<Str extends string> = TrimStrRight<TrimStrLeft<Str>>;
type TrimStrResult = TrimStr<'    k  '>;

type GetParameters<Func extends Function> = Func extends (...args: infer Arg) => unknown ? Arg : never;
type ParametersResult = GetParameters<(name:string,age:number) => string>;

type GetReturnType<Func extends Function> = Func extends (...args: any[]) => infer ReturnType ? ReturnType : never;
type ReturnTypeResult = GetReturnType<(name: string,age: number) => boolean>;

class Dong {
    name: string;
    constructor() {
        this.name = 'dong';
    }
    hello(this: Dong){
        return 'hello,i am '+this.name
    }
}

let dong = new Dong();
dong.hello();

type GetThisParameterType<T> = T extends (this: infer ThisType, ...args: any[]) => any ? ThisType : unknown;
type GetThisParameterTypeRes = GetThisParameterType<typeof dong.hello>;

// 获取构造器对应实例的类型
interface Person {
    name: string
}
interface PersonConstructor {
    new(name:string): Person
}

type GetInstanceType<ConstructorType extends new(...args: any) => any> = ConstructorType extends new(...args: any) => infer InstanceType ? InstanceType : any;
type GetInstanceTypeRes = GetInstanceType<PersonConstructor>;

type GetConstructorParameter<ConstructorType extends new(...args: any) => any> = ConstructorType extends new(...args: infer ParameterType) => any ? ParameterType : [];
type GetConstructorParameterRes = GetConstructorParameter<PersonConstructor>;

// 提取ref的值的类型
type GetRefProps<Props> =
        'ref' extends keyof Props 
            ? Props extends {ref?: infer Value | undefined} 
                ? Value 
                : never 
            : never;
type GetRefPropsRes = GetRefProps<{ref?: 9,name: '000'}>;