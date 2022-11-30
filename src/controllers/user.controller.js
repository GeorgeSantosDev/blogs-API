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

module.exports = {
  createUser,
};
