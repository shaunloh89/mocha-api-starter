const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')

describe('GET static pages', function () {
  describe('/', function () {
    it('should response 200', function (done) {
      request(app) // runs server again
      .get('/') // testing operation
      .expect(200, done) // test expectation
    })
  })

  describe('/about', function () {
    it('should respond 404', function (done) {
      request(app) // runs server again
      .get('/about') // testing operation
      .expect(404, done) // test expectation
    })
  })

  describe('CRUD taco test', function () {
    describe('GET /tacos', function () {
      it('should return all tacos', function (done) {
        request(app) // runs server again
        .get('/tacos') // testing operation
        .end(function (err, response) {
          expect(response.status).to.equal(200)
          expect(response.body).to.be.an('array')
          // assert.strictEqual(200, response.status)

          if (response.body.length) {
            expect(response.body[0]).to.have.property('amount')
          }
          done()
        })
      })
    })
    describe('POST /tacos', function () {
      it('should create new taco', function (done) {
        request(app)
        .post('/tacos')
        .send({
          name: 'Parmesan Fiesta',
          amount: 1000
        })
        .end(function (err, response) {
          done()
        })
      })
    })
  })
})
