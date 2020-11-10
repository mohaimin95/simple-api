const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
        enum: ['IT', 'CSE', 'EEE', 'ECE', 'MECH', 'CIVIL']
    },
    tenthMark: {
        type: Number,
        required: true,
    },
    twelthMark: {
        type: Number,
        required: true,
    }
});

module.exports = model('student', studentSchema);