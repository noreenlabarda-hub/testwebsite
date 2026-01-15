const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`CollegePrep website is running at http://localhost:${PORT}`);
    console.log(`To make it public, you can use services like:`);
    console.log(`  - Vercel: https://vercel.com`);
    console.log(`  - Netlify: https://netlify.com`);
    console.log(`  - GitHub Pages: https://pages.github.com`);
    console.log(`  - Replit: https://replit.com`);
});
