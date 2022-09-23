type BasicStateAction<S> = S;
type Dispatch<A> = A;

type res = Dispatch<BasicStateAction<string>>;

let r :BasicStateAction<string> = 5