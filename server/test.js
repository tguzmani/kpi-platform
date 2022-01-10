req = {
  body: {
    id: 2,
    name: 'Roberto Perez de Arce',
    username: 'rpdea-react-2',
    mail: 'robertoo@kpimanagers.com',
    groups: 2,
    active: 1,
    reportGroups: [2, 3],
  },
}

user = [...Object.values(req.body)]

console.log(user)
