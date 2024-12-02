// // @ts-check

/**
 * Best substraction ever!
 * @param {number} x First number
 * @param {number} y Second number
 * @returns {number} result
 */
export function sub(x, y) {
  return x - y;
}

/**
 * @param {number} x
 * @param {number} y
 */
export function mult(x, y) {
  return x * y;
}

export function div(x, y) {
  return x / y;
}

sub(1, 1);

// @ts-ignore
sub(1, "2");

// @ts-expect-error
sub(1, "2");


/**
 * show person info
 * @param {Person} person 
 * @returns 
 */
export function showPersonInfo(person){
  return person.name
}

/**
 * @typedef {import("./lib.d.ts").Person} Person 
 */

// /**
//  * @typedef Person
//  * @property {string} id
//  * @property {string} name
//  */