const { User } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        const result = await User.find({});

        await res.status(200).send(result);
    },
    create: (req, res) => {}
};
