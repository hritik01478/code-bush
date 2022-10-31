import mongoose from "mongoose";

const ContestsSchema = new mongoose.Schema({
  date: [{
    day: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      max: 12,
      min: 1,
      required: true      
    },
    year: {
      type: Number,
      required: true
    }
  }],
  contests: {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    platform: {
      type: String,
      required: true,
    },
    contestlist: [
      {
        start: {
          type: String,
          requried: true,
        },
        end: { 
          type: String, 
          required: true 
        },
        name: { 
          type: String, 
          required: true 
        },
        link: { 
          type: String, 
          required: true 
        },
      },
    ],
  },
});

export default mongoose.model("ContestList", ContestsSchema);
