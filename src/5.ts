/** 
 * 联合分散可简化
 *  */

type Union = 'a' | 'b' | 'c';
type UppercaseA<Str extends string> = Str extends 'a' ? Uppercase<Str> : Str;
type UppercaseARes = UppercaseA<Union>;