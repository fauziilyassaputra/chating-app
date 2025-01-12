import User from "../models/user.model.js";

export const getUsersFromSidebar = async (req, res) => {
  try {
    const loggedInUSerId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUSerId },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error in get user fromsidebar", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
