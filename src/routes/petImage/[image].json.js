// @ts-check

import { getFoundIndex, getAtIndex } from "./_pets";

/** @type {function({ params: { image: import("./_pets").PetName}}, Object): void} */
export function get(req, res) {
  const { image } = req.params;

  const foundIndex = getFoundIndex(image);
  const current = getAtIndex(foundIndex);
  const next = getAtIndex(foundIndex + 1);
  const previous = getAtIndex(foundIndex - 1);
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({ next, previous, current }));
}
