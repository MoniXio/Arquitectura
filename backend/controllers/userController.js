const getUsers = (req, res) => {
  res.json({ message: 'Lista de usuarios' });
};

module.exports = { getUsers };