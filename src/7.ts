
type ParseParam<Param extends string> = Param extends `${infer Key}=${infer Value}` ? {
    [K in Key]: Value
}: {}
type ParseQueryString<Str extends string> = Str extends `${infer Before}&${infer After}` 
    ? MergeParams<ParseParam<Before> , ParseQueryString<After>>
    : ParseParam<Str>
// type ParseQueryString<Str extends string> = Str extends `${infer Before}&${infer After}` 
//     ? Before extends  `${infer Key}=${infer Value}` 
//         ? MergeParams<{
//             [K in Key]: Value
//         } , ParseQueryString<After>>
//         : ParseParam<Str>
//     : ParseParam<Str>

type MergeValue<One,Other> = One extends Other ? One : Other extends unknown[] ? [One, ...Other] : [One,Other];
type MergeParams<OneParam extends Record<string,any>,OtherParam extends Record<string,any>> = {
    [Key in keyof OneParam | keyof OtherParam]: 
        Key extends keyof OneParam 
            ? Key extends keyof OtherParam 
                ? MergeValue<OneParam[Key],OtherParam[Key]>
                : OneParam[Key]
            : Key extends keyof OtherParam
                ? OtherParam[Key]
                :never
}
type ParametersResultRes = ParseQueryString<'a=1&b=2'>