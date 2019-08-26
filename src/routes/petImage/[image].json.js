// @ts-check
/** @typedef { number & {__t: 'petIndex'} } PetIndex */
/** @typedef {import('ramda')}  R*/
/** @typedef {import('./_pets').PetName}  PetName*/
import pets from "./_pets";
import {
  __,
  equals,
  findIndex,
  compose,
  mathMod,
  view,
  lensIndex,
  ifElse,
  always,
  identity
} from "ramda";

const boundToIndex = /** @type {function(number): PetIndex} */ (mathMod(
  __,
  pets.length
));
/** @type {function(PetName): PetIndex} */
const getFoundIndex = compose(
  ifElse(equals(-1), always(0), identity),
  // @ts-ignore
  findIndex(__, pets),
  equals
);
/** @type {function(PetIndex): PetName} */
const getAtIndex = compose(
  // @ts-ignore
  view(__, pets),
  lensIndex
);
/** @type {function({ params: { image: PetName}}, Object): void} */
export function get(req, res) {
  const { image } = req.params;

  const foundIndex = getFoundIndex(image);
  const current = getAtIndex(foundIndex);
  const next = getAtIndex(boundToIndex(foundIndex + 1));
  const previous = getAtIndex(boundToIndex(foundIndex - 1));
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({ next, previous, current }));
}

console.assert(boundToIndex(pets.length) === 0, "0 -> 0 for index mapping");
console.assert(
  boundToIndex(-1) === pets.length - 1,
  "should use modulo via math"
);

console.assert(getFoundIndex(pets[1]) === 1, "Should find first element");

console.assert(
  // @ts-ignore
  getFoundIndex("pets[1]") === 0,
  `getFoundIndex("pets[1]") should default to 0`
);

console.assert(
  getFoundIndex(getAtIndex(boundToIndex(1))) === 1,
  "getFoundIndex(getAtIndex(boundToIndex(1))) should be identity"
);
