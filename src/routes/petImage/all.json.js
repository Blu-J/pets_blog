import pets from "./_pets.js";
export function get(_req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(pets));
}
