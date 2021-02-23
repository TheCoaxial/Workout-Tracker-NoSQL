const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: () => new Date()
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "What type of Excersise?"
          },
          name: {
            type: String,
            trim: true,
            required: "What's the exercise name?"
          },
          duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
          },
          weight: Number,
         
          reps: Number,

          sets: Number,

          distance: Number,
        }
      ]
    },
    {
      toJSON: {
        // include any virtual properties when data is requested
        virtuals: true
      }
    }
  );
  
  // adds a property to schema then 'reduces' to total sum of duration
  workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;