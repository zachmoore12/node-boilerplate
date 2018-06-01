import express from 'express';
import exampleRoutes from './example/routes/v1.js';

const router = express.Router();

router.get('/healthcheck', (req, result) => result.send('Healthy'));
router.use('/example', exampleRoutes);

module.exports = {
	v1: router
};
