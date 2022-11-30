const { createToken } = require('../auth/JWT');

module.exports = (req, res) => {
  try {
    const { email } = req.body;
    const token = createToken(email);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};
