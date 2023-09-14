var testModel = require('./testModel.js');
var key ='1234567890trytrytry';
var encryptor = require('simple-encryptor')(key);

module.exports.createTestDBService = (testDetails) => 
{
    return new Promise(function myFn(resolve, reject) 
    {
        var testModeldata = new testModel();

        testModeldata.username = testDetails.username;
        testModeldata.email = testDetails.email;
        testModeldata.password = testDetails.password;
        var encrypted = encryptor.encrypt(testDetails.password);
        testModeldata.password = encrypted

        testModeldata.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}

module.exports.loginUserDBService = (testDetails) => 
{
    return new Promise(function(resolve, reject)
     {
      testModel.findOne({ email: testDetails.email }, function(errorvalue, result) 
      {
        if (errorvalue) 
        {
          reject({ status: false, msg: "Invalid Data" });
        } 
        else 
        {
          if (result != undefined && result != null) 
          {
            var decrypted = encryptor.decrypt(result.password);
  
            if (decrypted == testDetails.password) 
            {
              resolve({ status: true, msg: "Login Successfully" });
            } 
            else 
            {
              reject({ status: false, msg: "Login Failed" });
            }
          } 
          else 
          {
            reject({ status: false, msg: "Login Failed" });
          }
        }
      });
    });
  }
