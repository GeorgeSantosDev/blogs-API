const { createToken } = require('../auth/JWT');
const { userService } = require('../services/index');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await userService.createUser(displayName, email, password, image);

    if (user) {
      const token = createToken(email);

      res.status(201).json({ token });
    }
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

const findAllUsers = async (_req, res) => {
  try {
    const users = await userService.findAllUsers();

    res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.findUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
};
