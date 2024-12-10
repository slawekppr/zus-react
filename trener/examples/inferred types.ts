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
