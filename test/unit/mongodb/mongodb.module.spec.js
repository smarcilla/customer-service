const chai = require('chai');
const expect = chai.expect; 

const MongoDBModule = require('../../../modules/mongodb/mongodb.module');

describe('MongoDBModule', ()=>{
    describe('mongodb.module file', ()=>{
        it('should read the mongo.module file', ()=>{
            expect(MongoDBModule).to.be.a('object')
        })

        it('should confirm MongoDBUtil exist', ()=>{
            expect(MongoDBModule.MongoDBUtil).to.be.a('object');
        })
    })
})