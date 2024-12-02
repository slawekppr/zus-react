// @ts-check

/**
 * Best substraction ever!
 * @param {number} x First number
 * @param {string} y Second number
 * @returns {number} result
 */
export function sub(x, y) {
  return x - y;
}

sub(1, 1);

// @ts-ignore
sub(1, "2");

// @ts-expect-error
sub(1, "2");
