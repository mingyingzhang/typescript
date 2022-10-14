/** 
 * 联合分散可简化
 *  */
import { CamelCase } from './2';

type Union = 'a' | 'b' | 'c';
type UppercaseA<Str extends string> = Str extends 'a' ? Uppercase<Str> : Str;
type UppercaseARes = UppercaseA<Union>;

type CamelCaseArr<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest] ? [CamelCase<First & string>, ...CamelCaseArr<Rest>] : Arr;
type CamelCaseArrResult = CamelCaseArr<['a_a','b_b','cc_cc_dc']>;

type CamelCaseUnion<Str extends string> = Str extends `${infer Prefix}_${infer Suffix}${infer Rest}` ? `${Prefix}${Uppercase<Suffix>}${CamelCaseUnion<Rest>}` : Str;
type CamelCaseUnionRes = CamelCaseUnion<'a_a' | 'b_b' | 'c_c_d_dc'>;

// 数组通过索引转变为联合类型
type ToUnion<Arr extends unknown[]> = Arr extends unknown[] ? Arr[number] : '';
type ToUnionRes = ToUnion<['1',2,3]>;

type BEM<Block extends string, Element extends string[], Modifiers extends string[]> = `${Block}_${Element[number]}--${Modifiers[number]}`;
type BEMRes = BEM<'drawer',['form','section'],['footer','header']>;

type Combination<A extends string,B extends string> = | A | B | `${A}${B}` | `${B}${A}`;

type AllCombinations<A extends string, B extends string = A> = A extends A ? Combination<A,AllCombinations<Exclude<B,A>>> :never;
type AllCombinationsRes = AllCombinations<'A' | 'B' | 'C'>;

type IsUnion<A, B = A> = A extends A ? [B] extends [A] ? false : true : never;
type IsUnionRes = IsUnion<Union>;
type IsUnionRes1 = IsUnion<[1,2,3]>;
