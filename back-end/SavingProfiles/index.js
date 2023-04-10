const express = require('express');
const app = express();

// Define a list of example positions
const positions = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'San Francisco, CA',
      profiles: [
        { name: 'John Doe', title: 'Software Engineer', skills: ['JavaScript', 'Python'] },
        { name: 'Jane Doe', title: 'Frontend Developer', skills: ['HTML', 'CSS', 'Java'] },
      ]
    },
    {
      id: 2,
      title: 'Product Manager',
      location: 'New York, NY',
      profiles: [
        { name: 'Jack Smith', title: 'Product Manager', skills: ['Agile', 'Scrum'] },
        { name: 'Grace James', title: 'Product Owner', skills: ['Product Strategy'] },
      ]
    }
  ];

// Define your list of users
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', favorites: [] },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', favorites: [] },
];

app.post('/favorites', (req, res) => {
  try {
    const { userId, positionId } = req.body;

    const user = users.find(user => user.id === userId);
    const position = positions.find(position => position.id === positionId);

    if (user.favorites.includes(position.id)) {
      return res.status(400).json({ error: 'Position already favorited' });
    }

    user.favorites.push(position.id);

    res.json({ message: 'Position added to favorites' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
