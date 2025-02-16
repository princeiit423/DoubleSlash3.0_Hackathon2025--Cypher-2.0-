const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
    farmer: {
        name: String,
        contact: String,
        location: {
            city: String,
            state: String,
            country: String,
        }
    },
    cropDetails: {
        name: String,
        variety: String,
        sowingDate: Date,
        harvestingDate: Date,
    },
    soilAndWeather: {
        soilType: String,
        pHLevel: Number,
        moistureLevel: Number,
        temperature: Number,
        rainfall: Number,
    },
    fertilizerUsage: {
        fertilizerType: String,
        applicationDate: Date,
    },
    pesticideUsage: {
        pesticideType: String,
        applicationDate: Date,
    },
    plantHealth: {
        hasDiseaseSymptoms: Boolean,
        symptomsDescription: String,
    }
});

module.exports = mongoose.model("Crop", cropSchema);
