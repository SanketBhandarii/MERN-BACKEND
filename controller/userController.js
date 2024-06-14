import User from "../model/userModel.js";

export const create = async (req, res) => {
  const userData = new User(req.body);
  const saveData = await userData.save();
  res.status(200).json({msg : 'Quote saved successfully'})
};

export const getAll = async (req, res) => {
  const userData = await User.find();
  res.status(200).json({userData})
};

export const getOne = async (req, res) => {
  const userData = await User.findById(req.params.id);
  res.status(200).json({userData})
};

export const update = async (req, res) => {
  const userData = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.status(200).json({msg : "Quote successfully updated"})
};

export const deleteUser = async (req, res) => {
  const userData = await User.findByIdAndDelete(req.params.id);
  res.status(200).json({msg : "Quote deleted successfully"})
};

