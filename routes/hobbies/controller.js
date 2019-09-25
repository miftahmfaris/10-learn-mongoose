const { Hobbies, User } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        const result = await Hobbies.find({});

        await res.status(200).send(result);
    },

    create: async (req, res) => {
        const hobbies = await Hobbies.create({ hobby: req.body.hobby });

        const user = await User.findOneAndUpdate(
            { _id: req.body._id },
            { $push: { hobbies: hobbies._id } },
            { new: true }
        );

        res.status(200).send({
            message: "New hobbies created",
            hobbies,
            user
        });
    },
    updateOne: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await Hobbies.findByIdAndUpdate(id, {
                $set: { hobby: req.body.hobby }
            });
            res.status(200).send({
                message: `Hobby with id ${id}`,
                result
            });
        } catch (error) {
            console.log(error);
        }
    },
    getOne: async (req, res) => {
        const id = req.params.id;

        try {
            const result = await Hobbies.findById(id);
            res.status(200).send({
                message: `Hobby with id ${id}`,
                result
            });
        } catch (error) {
            console.log(error);
        }
    }
};
