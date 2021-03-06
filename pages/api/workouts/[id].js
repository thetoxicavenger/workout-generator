export default (req, res) => {
  if (req.query.id === "random") {
    res.json([
      "bent over row - shoulder width grip",
      "bent over row - bar grip against wall",
      "incline chest press against wall - narrow grip",
      "incline chest press against wall - alternating-handed",
      "side planks",
      "shrugs",
    ]);
  } else {
    res.status(500);
  }
};
