const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/thriveguide', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Define a schema for the questionnaire data
const questionnaireSchema = new mongoose.Schema({
    age: Number,
    gender: String,
    activityLevel: String,
    dietaryPreferences: String,
    goal: String,
    dateSubmitted: { type: Date, default: Date.now }
});

// Create a model for the questionnaire data
const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit-questionnaire', async (req, res) => {
    const { age, gender, activityLevel, dietaryPreferences, goal } = req.body;

    try {
        // Create a new questionnaire entry
        const newEntry = new Questionnaire({
            age,
            gender,
            activityLevel,
            dietaryPreferences,
            goal
        });

        // Save the entry to the database
        const savedEntry = await newEntry.save();
        res.status(201).json({ message: 'Questionnaire submitted successfully', entry: savedEntry });
    } catch (error) {
        console.error('Error saving questionnaire:', error);
        res.status(500).json({ message: 'Failed to submit questionnaire', error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


