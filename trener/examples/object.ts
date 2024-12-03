// Instance of Complex object
function showobject(params: object) {
  if ("x" in params) params.x;
}
// showobject(123) // Error
showobject({});
showobject({ x: 1 });
showobject(new Date());
// showobject(null);
// showobject(undefined);

// any object with visible constructor prototype methods
function showObject(params: Object) {
  params.hasOwnProperty("x");
}
showObject(123);
showObject({});
showObject({ x: 1 });
// showObject(null);
// showObject(undefined);

// any object without prototype (hidden)
function showObj(params: {}) {
//   params.x // error
}
showObj(123);
showObj({});
showObj({ x: 1 });
// showObj(null)
// showObj(undefined)
