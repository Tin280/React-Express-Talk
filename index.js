const express = require('express');
const app = express();

app.get("/api/scan", (req, res) => {
  const scanData = [
    { name: 'Milk', price: '4e' },
    { name: 'Egg', price: '5e' }
  ];
  res.json(scanData);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
