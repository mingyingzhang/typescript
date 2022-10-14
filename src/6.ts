/***
 *  特殊特性要记清
 *  */

type IsEqual<A,B> = 
    (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? true : false;
type IsEqualRes = IsEqual<any,'5'>;

type NotEqual<A, B> = 
    (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? false : true;

type IsTuple<T> = T extends readonly [...infer Eles] ? NotEqual<Eles['length'],number> : false;
type IsTupleRes = IsTuple<number[]>;
type IsTupleRes2 = IsTuple<[1,2,3]>; //元组

// Pick 就是取出某个Key构造新的索引类型 
// {} extends 就可以过滤出哪些索引是可选的
type Test = {} extends Pick<{age?:12},'age'> ? true : false;
type Age = Pick<{age:12},'age'>;

type GetOptional<Obj extends Record<string,any>> = {[
    Key in keyof Obj as {} extends Pick<Obj, Key> ? Key : never
]: Obj[Key]};
type GetOptionalRes = GetOptional<{
    age?: number,
    name: string
}>;

type GetRequired<Obj extends Record<string,any>> = {
    [Key in keyof Obj as {} extends Pick<Obj,Key> ? never : Key] : Obj[Key]
};
type GetRequiredRes = GetRequired<{
    age?: number,
    name: string
}>;


type RemoveIndexSignature<Obj extends Record<string,any>> = {
    [Key in keyof Obj as Key extends `${infer K}` ? K : never] : Obj[Key]
};
type RemoveIndexSignatureRes = RemoveIndexSignature<{
    [key:string]:any,
    name: string
}>;

type test = any & never;
type test1 = ['1' | '2'] extends ['2'] ? true : false;