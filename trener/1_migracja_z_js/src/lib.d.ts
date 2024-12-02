/**
 * Best substraction ever!
 * @param {number} x First number
 * @param {number} y Second number
 * @returns {number} result
 */
export function sub(x: number, y: number): number;

/**
 * @param {number} x
 * @param {number} y
 */
export function mult(x: number, y: number): number;

export function div(x: number, y: number): number;

/**
 * show person info
 * @param {Person} person
 * @returns
 */
export function showPersonInfo(person: Person): string;

export type Person = {
    id: string;
    name: string;
};
