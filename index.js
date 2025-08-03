const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const dummyUser = {
  name: "Manish Patil",
  referralCode: "manish2025",
  totalDonations: 15000,
};

app.get('/api/user', (req, res) => {
  res.json(dummyUser);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
