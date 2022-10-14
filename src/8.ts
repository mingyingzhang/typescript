// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

type ParametersRes = Parameters<(name:string,age: number) => {}>;

// type ReturnType<T extends (...args:any) => any> = T extends (...args) => infer R ? R : any

type ReturnTypeRes = ReturnType<() => undefined>;

// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

interface Person {
    name: string
}
interface PersonConstructor {
    new(name: string): string
}
type ConstructorParametersRes = ConstructorParameters<PersonConstructor>


type Person2 = {
    name: 'zh'
}
function hello(this:Person2) {
    console.log(this.name);
}

type TypeHello = typeof hello

// type ThisParameterType<T extends (...args:any) => any> = T extends (this:infer P, ...args: never) => any ? P : unknown
type ThisParameterTypeRes = ThisParameterType<TypeHello>

function say(this: Person2,age:number) {
    console.log(this.name,age);
    return age
}
// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer P) => infer R ? (...args: P) => R : T;

type OmitThisParameterRes = OmitThisParameter<typeof say>

// type Pick<T,K extends keyof T> = {
//     [P in K]: T[K]
// }
type PickRes = Pick<{name:'zh',age: 25},'age'>

// type Exclude<T, U> = T extends U ? never : T;
type ExcludeRes = Exclude<'a'|'b'|'c','c'>

// type Awaited<T> = 
//     T extends null | undefined 
//         ? T 
//         : T extends object & {then(onfulfilled: infer F): any} 
//             ? F extends (value: infer V, ...args) => any 
//                 ? Awaited2<V> 
//                 : never
//         :T

type AwaitedRes = Awaited<Promise<Promise<null>>>

