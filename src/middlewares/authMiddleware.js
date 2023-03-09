const axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    const host = process.env.NODE_ENV === 'docker' ? 'auth' : 'localhost';
    const { data: decoded } = await axios.post(`http://${host}:8000/api/validateToken`, {}, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    if (!decoded.userId) {
      return res.status(401).json({ message: 'Authorization failed', success: false });
    }
    else {
      req.body.userId = decoded.userId;
      next();
    }

  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Authorization failed', success: false });
  }
};