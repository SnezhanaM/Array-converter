'use strict';

let operation = require('./index');

it("should transform [1,2,3,4,5,6,7,8] to '1-8'", function(done) {
  let expectedResult = '1-8'
  operation.transform([1,2,3,4,5,6,7,8]).then((result) => {
    if (result !== expectedResult) {
        throw new Error(
          `Expected ${expectedResult}, but got ${result}`
        )
    }
    done();
    })
});

it("should transform [1,3,4,5,6,7,8] to '1,3-8'", function(done) {
    let expectedResult = '1,3-8'
    operation.transform([1,3,4,5,6,7,8]).then((result) => {
      if (result !== expectedResult) {
          throw new Error(
            `Expected ${expectedResult}, but got ${result}`
          )
      }
      done();
      })
  });

it("should transform [1,3,4,5,6,7,8,10,11,12] to '1,3-8,10-12'", function(done) {
    let expectedResult = '1,3-8,10-12'
    operation.transform([1,3,4,5,6,7,8,10,11,12]).then((result) => {
      if (result !== expectedResult) {
          throw new Error(
            `Expected ${expectedResult}, but got ${result}`
          )
      }
      done();
      })
  });

it("should transform [1,2,3] to '1-3'", function(done) {
    let expectedResult = '1-3'
    operation.transform([1,2,3]).then((result) => {
      if (result !== expectedResult) {
          throw new Error(
            `Expected ${expectedResult}, but got ${result}`
          )
      }
      done();
      })
  });
  
it("should transform [1,2] to '1,2'", function(done) {
    let expectedResult = '1,2'
    operation.transform([1,2]).then((result) => {
      if (result !== expectedResult) {
          throw new Error(
            `Expected ${expectedResult}, but got ${result}`
          )
      }
      done();
      })
  });
  
it("should transform [1,2,4] to '1,2,4'", function(done) {
    let expectedResult = '1,2,4'
    operation.transform([1,2,4]).then((result) => {
      if (result !== expectedResult) {
          throw new Error(
            `Expected ${expectedResult}, but got ${result}`
          )
      }
      done();
      })
  });

it("should transform [1,2,4,5,6] to '1,2,4-6'", function(done) {
    let expectedResult = '1,2,4-6'
    operation.transform([1,2,4,5,6]).then((result) => {
      if (result !== expectedResult) {
          throw new Error(
            `Expected ${expectedResult}, but got ${result}`
          )
      }
      done();
      })
  });

it("should transform [1,2,3,7,8,9,15,17,19,20,21] to '1-3,7-9,15,17,19-21'", function(done) {
    let expectedResult = '1-3,7-9,15,17,19-21'
    operation.transform([1,2,3,7,8,9,15,17,19,20,21]).then((result) => {
      if (result !== expectedResult) {
          throw new Error(
            `Expected ${expectedResult}, but got ${result}`
          )
      }
      done();
      })
  });

it("should transform [1,2,3,4,5,6,100,1091,1999,2000,2001,2002] to '1-6,100,1091,1999-2002'", function(done) {
    let expectedResult = '1-6,100,1091,1999-2002'
    operation.transform([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]).then((result) => {
      if (result !== expectedResult) {
          throw new Error(
            `Expected ${expectedResult}, but got ${result}`
          )
      }
      done();
      })
  });

it("should transform [1] to '1'", function(done) {
    let expectedResult = '1'
    operation.transform([1]).then((result) => {
      if (result !== expectedResult) {
          throw new Error(
            `Expected ${expectedResult}, but got ${result}`
          )
      }
      done();
      })
  });

it("should transform [1,3,5,7,9,11] to '1,3,5,7,9,11'", function(done) {
    let expectedResult = '1,3,5,7,9,11'
    operation.transform([1,3,5,7,9,11]).then((result) => {
      if (result !== expectedResult) {
          throw new Error(
            `Expected ${expectedResult}, but got ${result}`
          )
      }
      done();
      })
  });
