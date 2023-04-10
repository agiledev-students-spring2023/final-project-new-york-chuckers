const express = require('express');
const app = express();

const search = require("../../api/requests.js");

const getFreelancerListFromMockaroo = async () => {
  const response = await search("freelancers.json", {
    method: "get",
  });

  return response.data;
};

app.get('/search', (req, res) => {
  const query = req.query.q;

  const results = search(query);

  res.json(results);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
