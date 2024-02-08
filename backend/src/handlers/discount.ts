export const displayDiscount = (req, res) => {
  const name = req.params.name;
  res.status(200).json({ name: name, discount: "LOVEYOU" });
};
