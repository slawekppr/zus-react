export {};

type Wrapper<T> = {
  value: T;
};

function getValue<T>(param: Wrapper<Wrapper<T>>) {
  return param.value.value;
}

// function drawLine(p1: { x: number, y:number }, p2: { x: number }) {}

// Exercise: Extract  GeolocationPosition from geolocation API
// const coords: GeolocationPosition[]
// not exported GeolocationPosition

window.navigator.geolocation.getCurrentPosition((res) => {
  const mojeCors: MyCoords = res.coords;
});

type PosFn = (typeof window)["navigator"]["geolocation"]["getCurrentPosition"];

type ExtractGeoPos = PosFn extends (x: infer T) => any ? T : false;
const placki: ExtractGeoPos = {} as PositionCallback;

type Parameter<F> = F extends (p: infer P) => any ? P : never;
// type Parameters<F> = F extends (...params: infer P) => any ? P : never;

type PosFnParam = Parameter<PosFn>; // PositionCallback
type PosFnParams = Parameters<PosFn>; // [ PositionCallback, ...
type FirstParam = PosFnParams[0]; // PositionCallback

type ParamsOfCallbackParamFn = Parameters<FirstParam>[0];
type MyCoords = ParamsOfCallbackParamFn["coords"];

// Exercise: Extracting return values ( of return values )
function fetchPlacki(type: string) {
  return window
    .fetch("http://fabrykaplackow.com/", {})
    .then((r) => r.json())
    .then((d) => ({ placek: d, sos: d.sos }));
}

// type ReturnType<F> = F extends (p: any) => infer R ? R : never;

type fetchPlackiReturn = ReturnType<typeof fetchPlacki>;

type fetchPlackiThenReturn = Parameters<
  NonNullable<Parameters<fetchPlackiReturn["then"]>[0]>
>[0];

type PromiseResult<PromiseT extends Promise<any>> = Parameters<
  NonNullable<Parameters<PromiseT["then"]>[0]>
>[0];

type AsyncFunction<F extends (...p: any) => Promise<any>> = PromiseResult<
  ReturnType<F>
>;

type placki = PromiseResult<ReturnType<typeof fetchPlacki>>;
type placki2 = AsyncFunction<typeof fetchPlacki>;
type placki3 = Awaited<ReturnType<typeof fetchPlacki>>;

// Recursive inferred Types
const nesting = [1, [2, [3, [5, 6, [7]]]]];

// type Flatten<T> = T extends Array<any> ? "banana" : "placki";
// type Flatten<T> = T extends Array<infer U> ? U  : T;
type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;

type F1 = Flatten<123>; /// 123
type F2 = Flatten<[123]>; // 123

type F3 = Flatten<[[[123]]]>; /// 123
type F4 = Flatten<[[[123], "banana"]]>; /// 123 | 'banana'

// A'la "Switch"
type Cases<T> = {
  0: "banana";
  1: "costam" & T;
  2: "koklejne";
}[T extends string ? 0 : T extends number ? 2 : 1];

// Infered template strings 
type Path<T> = T extends `/playlists/${infer P}/` ? P : never;
type P = Path<'/playlists/123/'> // 123
