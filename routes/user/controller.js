const { User } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        const result = await User.find({});

        await res.status(200).send(result);
    },
    create: async (req, res) => {
        try {
            const values = {
                name: req.body.name,
                email: req.body.email,
                image: req.files[0].originalname.replace(/ /g, "_"),
                pathImage: req.files[0].path.replace(/ /g, "_")
            };

            const result = await User.create(values);

            res.status(200).send({ message: "New User Created", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getOne: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await User.findById(id);

            res.status(200).send({
                message: `Get data with id: ${id}`,
                data: result
            });
        } catch (error) {}
    }
};
