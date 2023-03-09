const axios = require('axios');

const register = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const host = process.env.NODE_ENV === 'docker' ? 'auth' : 'localhost';
    const { data } = await axios.post(`http://${host}:8000/api/register`, { userName, email, password });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.response.data.message, success: false });

  }

};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const host = process.env.NODE_ENV === 'docker' ? 'auth' : 'localhost';
    const { data } = await axios.post(`http://${host}:8000/api/login`, { email: email, password: password });

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.response.data.message, success: false });

  }
};


const getUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const host = process.env.NODE_ENV === 'docker' ? 'auth' : 'localhost';

    const { data } = await axios.get(`http://${host}:8000/api/getUserById/${userId}`);
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }

};

module.exports = {
  register,
  login,
  getUser
};