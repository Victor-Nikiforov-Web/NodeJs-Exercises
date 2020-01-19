const Joi = require("joi");

class BookModel {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    static validate(book) {
        const validationSchema = {
            id: Joi.number().min(0),
            name: Joi.string().required().min(3).max(50),
            price: Joi.number().required().min(0).max(1000)
        };

        const error = Joi.validate(book, validationSchema,{ abortEarly: false}).error;

        if (error) {
            return error.details.map(err => err.message);
        }

        return null;
    }
}

module.exports = BookModel;