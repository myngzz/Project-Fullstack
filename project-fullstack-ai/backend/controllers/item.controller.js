const Item = require("../models/Item");
 
exports.getAllItems = async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.status(200).json(items);
};
 
exports.getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Data tidak ditemukan" });
  res.status(200).json(item);
};
 
exports.createItem = async (req, res) => {
  const newItem = new Item(req.body);
  const saved = await newItem.save();
  res.status(201).json(saved);
};
 
exports.updateItem = async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updated);
};
 
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Data berhasil dihapus" });
};