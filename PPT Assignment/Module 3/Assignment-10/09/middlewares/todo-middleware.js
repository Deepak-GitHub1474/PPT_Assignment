const validateInput = (req, res, next) => {
  const { todo_deadline, todo_title } = req.body;
  if (!todo_deadline || !todo_title) {
    return res.status(400).json({ error: 'Validation failed. all tasks are mandatory.' })
  }
  next();
}
module.exports = validateInput

  