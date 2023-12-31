const User = require("../models/User");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params._id }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addFriend(req, res){
    try{
      const user = await User.findOneAndUpdate(
        {_id: req.params._id},
        {$addToSet: {friends: req.params.friendID}},
        {runValidators: true, new: true},
      );

      if(!user){
        return res.status(404).json({message: 'No user with this ID'})
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async deleteFriend(req, res){
    try{
      const user = await User.findOneAndUpdate(
        {_id: req.params._id},
        {$pull: {friends: req.params.friendID}},
        {runValidators: true, new: true},
      );
      if(!user){
        return res.status(404).json({message: 'No user with this ID'})
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params._id },
        { ...req.body },
        { new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const result = await User.findOneAndDelete({ _id: req.params._id });
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
