const express = require('express');
const app = express();

const search = require("../../api/requests.js");

const getFreelancerListFromMockaroo = async () => {
  const response = await search("freelancers.json", {
    method: "get",
  });

  return response.data;
};

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

app.get('/search', (req, res) => {
  const query = req.query.q;

  const results = positions.flatMap(position => 
    position.profiles.filter(profile => 
      profile.name.toLowerCase().includes(query.toLowerCase())
    ).map(profile => ({
      id: position.id,
      title: position.title,
      location: position.location,
      profile: profile
    }))
  );

  res.json(results);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
