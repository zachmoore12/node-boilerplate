const request = require('supertest');
const sinon = require('sinon');

const app = require('../../index');
const { expect } = require('chai');
const httpStatus = require('http-status');

describe("Basic Routing",  () => {
	beforeEach(() => {});
	afterEach(() => {});

	describe('GET /v1/healthcheck', () => {
		it('Should return a 200 response with Healthy', () => {
			return request(app)
				.get('/v1/healthcheck')
				.expect(httpStatus.OK)
				.then((res) => {
					const status = res.text;
					expect(status).to.be.equal('Healthy');
				})
		})
	});
});
