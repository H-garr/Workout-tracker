const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
    excercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter your type of workout"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the specific name for your workout"
        },
        duration: {
            type: Number,
            required: "Enter an amount of time"
        },
        weight: {
            type: Number
            
        },
        reps: {
            type: Number
            
        },
        sets: {
            type: Number
            
        },
        distance: {
            type: Number
            
        },
    }],
    day: {
        type: Date,
        default: Date.now
    }
},{
    toJSON:{
        virtuals:true
    }
});

excerciseSchema.virtual("totalDuration").get(function(){
    return this.excercises.reduce((total,exercise) => {
        return total + excerciseSchema.duration
    })
})

const Excercise = mongoose.model("Excercise", excerciseSchema);

module.exports = Excercise;