"use strict";

import express from 'express';
import validate from 'express-validation';

import service from '../service';

import { create, read } from '../shapes';

const router = express.Router();

// TODO: Load Example
// router.param('exampleID', service.load);

// TODO: List and Create
// router.route('/')
// 	.get(service.list)
// 	.post(validate(create), service.create);

// TODO
// Get, Update, Delete
// router.route('/:exampleID')
// 	.get(service.read)
// 	.patch(validate(update), service.update)
// 	.delete();

// Delete
router.route('/');

module.exports = router;
