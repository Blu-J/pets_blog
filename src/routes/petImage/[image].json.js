import pets from "./_pets.js";
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
import assert from "assert";

// : number -> number
const boundToIndex = mathMod(__, pets.length);
// : PetName -> number
const getFoundIndex = compose(
  ifElse(equals(-1), always(0), identity),
  findIndex(__, pets),
  equals
);
assert(getFoundIndex("") === 0);
assert(getFoundIndex(pets[1]) === 1);
// : number -> PetName
const getAtIndex = compose(
  view(__, pets),
  lensIndex,
  boundToIndex
);
assert(getFoundIndex(getAtIndex(0)) === 0);
assert(getFoundIndex(getAtIndex(1)) === 1);
assert(getFoundIndex(getAtIndex(2)) === 2);
export function get(req, res) {
  const { image } = req.params;

  const foundIndex = getFoundIndex(image);
  const current = getAtIndex(foundIndex);
  const next = getAtIndex(foundIndex + 1);
  const previous = getAtIndex(foundIndex - 1);
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({ next, previous, current, foundIndex, image }));
}
