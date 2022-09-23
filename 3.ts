/**
 * 递归复用做循环
 */

type DeepPromiseValueType<P> = 
    P extends Promise<infer ValueType> 
        ?  DeepPromiseValueType<ValueType> 
        : P;
type DeepPromiseValueTypeRes = DeepPromiseValueType<Promise<Promise<Record<string,any>>>>;

type ReverseArr<Arr extends unknown[]> = Arr extends [infer First,...infer Rest] ? [...ReverseArr<Rest>, First] : Arr;
type ReverseArrRes = ReverseArr<[1,2,3]>;

type IsEqual<A,B> = (A extends B ? true : false) & (B extends A ? true : false); //判断A和B是否相等，需要满足A是B的子类并且B是A的子类
type Includes<Arr extends unknown[],Value> = 
    Arr extends [infer First,...infer Rest] 
        ? IsEqual<First, Value> extends true //注意这里判断返回结果是否为true 需要extends true
            ? true 
            : Includes<Rest, Value> 
        : false;
type IncludesRes = Includes<[1,2,3],3>;

// Result 是构造的新的数组
type RemoveItem<Arr extends unknown[],Value,Result extends unknown[] = []> = 
    Arr extends [infer First,...infer Rest] 
        ? IsEqual<First, Value> extends true 
            ? RemoveItem<Rest, Value, Result> //如果相等的话 就需要删除当前值 所以只需要返回Result
            : RemoveItem<Rest, Value, [...Result, First]> // 不相等 需要将Result以及First一起返回
        : Result;
type RemoveItemRes = RemoveItem<[1,2,3],2>;

type BuildArr<Length extends number, Ele = unknown, Result extends unknown[] = []> = 
    Result['length'] extends Length ? Result : BuildArr<Length, Ele, [...Result, Ele]>;
type BuildArrRes = BuildArr<4>;
    
type Replace<Str extends string,From extends string, To extends string> = 
    Str extends `${infer Prefix}${From}${infer Suffix}` 
        ? Replace<`${Prefix}${To}${Suffix}`,From,To>
        : Str;
type ReplaceRes = Replace<'221314','1','3'>;

type StringToUnion<Str extends string> = Str extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never;
type StringToUnionRes = StringToUnion<'zh'>;

type ReverseStr<Str extends string> = Str extends `${infer First}${infer Rest}` ? `${ReverseStr<Rest>}${First}` : Str;
type ReverseStrRes = ReverseStr<'zhang'>;

type DeepReadonly<Obj extends Record<string,any>> = Obj extends any ?  { //因为ts只有在用到的时候才会进行计算，所有需要使用Obj extends any 触发一次计算，这样每个属性前面都可以展示readonly
    readonly [Key in keyof Obj]:
        Obj[Key] extends Record<string,any> 
            ? DeepReadonly<Obj[Key]>
            : Obj[Key]
}
: never;
type DeepReadonlyRes = DeepReadonly<{
    a: {
        b: {
            c: '3'
        }
    }
}>;
type DeepReadonlyRes2 = DeepReadonlyRes['a'];