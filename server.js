const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '.')));

// API Route for Contact Form
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Please fill in all required fields.'
        });
    }

    // Simulate email sending (Log to console)
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject || 'No Subject'}`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------------');

    // Return success response
    res.json({
        success: true,
        message: 'Thank you for contacting us. We will get back to you shortly.'
    });
});

// Redirect /privacy to /privacy-policy.html
app.get('/privacy', (req, res) => {
    res.redirect('/privacy-policy.html');
});

// Routes for specific HTML pages
const pages = ['about', 'faq', 'leadership', 'patient-guide', 'research', 'technology', 'privacy-policy'];
pages.forEach(page => {
    app.get(`/${page}(.html)?`, (req, res) => {
        res.sendFile(path.join(__dirname, `${page}.html`));
    });
});

// Fallback route to serve index.html for any other unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
