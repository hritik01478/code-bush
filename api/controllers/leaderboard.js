import Leaderboard from '../models/LeaderBoard.js'


// UPDATE LEADERBOARD
export const updateLeaderboard = async (req, res, next) => {
    try {
        const user = await Leaderboard.findById(req.params.id);
        if (user.maxScore < req.body.score) {

            user.maxScore = req.body.score;

        }
        var array = user.score;
        array.push(req.body.score);
        user.score = array;
        await user.save();
        res.status(200).json(user);

    } catch (err) {
        next(err);
    }
};

//GET LEADERBOARD
export const getLeaderboard = async (req, res, next) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ maxScore: -1 });
        // console.log(leaderboard);
        res.status(200).json(leaderboard);

    } catch (err) {
        next(err);
    }
};