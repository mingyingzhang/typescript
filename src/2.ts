/**
 * 重新构造做变换
 */

// 数组类型的重新构造
type tuple = [1,2,3];
type Push<Arr extends unknown[],Ele> = [...Arr,Ele];
type PushResult = Push<[1,2,3],4>;

type tuple1 = [1,2];
type tuple2 = ['guang','dong'];
type Zip<One extends unknown[],Other extends unknown[]> = 
    One extends [infer OneFirst,...infer OneRest] 
        ? Other extends [infer OtherFirst,...infer OtherRest] 
            ? [[OneFirst,OtherFirst], ...Zip<OneRest,OtherRest>] 
            : [] 
        :[];
type ZipResult = Zip<tuple1,tuple2>;


// 字符串类型的重新构造
type CapitalizeStr<Str extends string> = Str extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : Str;
type CapitalizeStrRes = CapitalizeStr<'zhang'>;

type CamelCase<Str extends string> = 
    Str extends `${infer Left}_${infer Right}${infer Rest}` 
        ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}` 
        : Str; //这里的Right匹配 _ 后面的第一个字符
type CamelCaseResult = CamelCase<'zhang_zhang_zhang'>;

type DropSubStr<Str extends string,SubStr extends string> = 
    Str extends `${infer Prefix}${SubStr}${infer Suffix}` 
        ?  DropSubStr<`${Prefix}${Suffix}`,SubStr> 
        : Str;
type DropResult = DropSubStr<'33zhga3ngdf3gfgf','3'>;

// 索引类型的重新构造
type Mapping<Obj extends Record<string,any>> = {
    [Key in keyof Obj]: [Obj[Key], Obj[Key], Obj[Key]]
}
type MappingRes = Mapping<{a:1,b:2,c:3}>;

type UppercaseKey<Obj extends Record<string,any>> = {
    [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}
type UppercaseKeyRes = UppercaseKey<{aa:1,b:2}>;

type ToMutable<T extends Record<string,any>> = {
    -readonly [Key in keyof T]: T[Key]
};
type ToMutableRes = ToMutable<{
    name: string,
    readonly age: number
}>

interface Person {
    name: string;
    age: number;
    hobby: string[]
};
type FilterByValueType<Obj extends Record<string,any>,ValueType> = {
    [Key in keyof Obj as Obj[Key] extends ValueType ? Key : never] : Obj[Key];
}
type FilterRes = FilterByValueType<Person, string| number>