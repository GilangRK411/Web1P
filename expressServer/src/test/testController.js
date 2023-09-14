var testService =require ('./testService');

var createTestControllerfn = async (req, res) => {
    try 
    {
        console.log (req.body);

        var status = await testService.createTestDBService (req.body);
        console.log (status);

        if (status) {
            res.send ({"status": true, "massage": "User Created Succes"});
        } else {
            res.send ({"status": false, "massage": "Error Creating user"});
        }
    }
catch(err)
{
    console.log(err);
}
}

var loginUserControllerfn = async (req, res) => {
    var result = null;
    try {
        result = await testService.loginUserDBService(req.body);
        if (result.status) {
            res.send({"status":true, "massage": result.msg});
        } else {
            res.send({"status":false, "massage": result.msg});
        }
    } catch (error) {
        console.log(error);
        res.send({"status":false, "massage": error.msg});
    }
}

module.exports = {createTestControllerfn, loginUserControllerfn};