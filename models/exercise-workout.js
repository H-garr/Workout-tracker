const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exercises: [{
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

});
// },{
//     toJSON:{
//         virtuals:true
//     }}


// exerciseSchema.virtual("totalDuration").get(function(){
//     return this.exercises.reduce((total,exercise) => {
//         return total + exercise.duration
//     })
// })

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;