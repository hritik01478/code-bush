import mongoose from 'mongoose';
const Schema = mongoose.Schema
const LeaderboardSchema = new mongoose.Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    score: {
        type: Array,
        default: [],
    },
    maxScore: {
        type: Number,
        default: 0
    },

}, { timestamps: true })

export default mongoose.model("Leaderboard", LeaderboardSchema)