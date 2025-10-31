form

// Minimal Express server for the client-form-validation-demo

const express = require('express');

const path = require('path');

const app express();

const PORT process.env.PORT || 3000;

// Parse J5ON bodies

app.use(express.json());

// Serve static files from the public directory

app.use(express.static(path.join(_dirname, '..', 'public')));

// Simple server-side validation helper function validateContact (body) {

const errors = [];

const { name, email, phone, message body || {};

if (Iname || String(name).trim().length < 2) {

}

}); errors.push({param: 'name', msg: "Name must be at least 2 characters.'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!email || !emailRegex.test(String(email))) {

}

errors.push({ param: 'email', msg: 'Invalid email address.' });

const phoneval phone? String(phone).trim(): ;

const phoneRegex = /^\+?[0-9\-()\s]{7,20}$/;

if (phoneVal && !phoneRegex.test(phoneVal)) {

}

errors.push({param: 'phone', msg: 'Invalid phone number.' });

if (!message || String(message).trim().length < 5) {

errors.push({ param: 'message', msg: 'Message must be at least 5

characters.' });

}
return errors;

}

//POST/api/contacts validate and echo back (placeholder for saving to DB)

app.post('/api/contacts', (req, res) => {

const errors = validateContact(req.body);

if (errors.length) {

} return res.status(422).json({ errors });

// In a real app you'd persist the contact here.

const { name, email, phone, message) = req.body;

return res.status(201).json({message: 'Contact received', data: { name, email, phone, message } }); });

// Fallback route to ensure index.html is served for unknown routes (optional)

app.get('*', (req, res, next) => { }); if (req.path.startsWith('/api/')) return next(); res.sendFile(path.join(_dirname, ... 'public', 'index.html'));

app.listen(PORT, () => {

console.log(Server running on http://localhost:${PORT}); });

push(paran
