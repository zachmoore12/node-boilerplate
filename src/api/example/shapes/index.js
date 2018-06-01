"use strict";

import Joi from 'Joi';

const create = {
	body: {
			exampleEmail: Joi.string().email().required()
    }
};

const update = {
	body: {
      email: Joi.string().email().required()
    }
};

module.exports = {
	create,
	update
};
