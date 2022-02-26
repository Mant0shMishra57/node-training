let employees = []


const getAll = (req, res) => {
  res.json(employees)
}

const create = (req, res) => {
  const { name, designation, id } = req.body
  employees.push({ name, designation, id })
  res.send('Employee added successfully!')
}

const update = (req, res) => {
  const { name, designation } = req.body
  const index = employees.findIndex(e => e.id === req.params.id)
  employees[index] = {
    id: req.params.id,
    name,
    designation
  }

  res.send('Employee detail updated!')
}

const remove = (req, res) => {
  employees = employees.filter(e => e.id !== req.params.id)
  res.send('Employee deleted')
}

module.exports = {
  getAll,
  create,
  update,
  remove
}
