const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('🎉 Intern Portal Backend is live!');
});

const dummyUser = {
  name: "Manish Patil",
  referralCode: "manish2025",
  totalDonations: 15000,
};

app.get('/api/user', (req, res) => {
  res.json(dummyUser);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
