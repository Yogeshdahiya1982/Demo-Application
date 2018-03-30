
process.env.NODE_ENV = 'unittest';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
var assert = chai.assert;
var expect  = require('chai').expect;


describe('demo unit test application', function() {

  //start of unit test cases
    it('dummy testing unit test start okay', function() {
      var arr = [];
      assert.equal(arr.length, 0);
    });


    //unit test case for getting data
    it(' should get all data on /api/getData',function(done){
      chai.request(server)
      .get('/api/getData')
      .end(function(err, res) {
      
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        res.body.should.have.property('num1');
        res.body.should.have.property('num2');
        res.body.should.have.property('result');
        done();
      });
    })

    //unit test case for saving data
    it(' should save data /api/saveData',function(done){
      
      chai.request(server)
      .post('/api/saveData')
      .set({ 'Content-Type': 'application/json' })
      .send({'num1': '1', 'num2': '2','result':'2'})
      .end(function(err, res){
        
        expect(res.statusCode).to.equal(200);
         res.should.be.json;
         res.body.should.be.a('object');
         res.body.should.have.property('num1');
         res.body.should.have.property('num2');
         res.body.should.have.property('result');
        
        done();
      });
     
    })


 });

