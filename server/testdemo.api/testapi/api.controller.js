/// api controller contains all api exposing methods

module.exports = function (app, router, authenticate, service) {

    ///--> Get data from DB for test table
    router.get("/api/getData", authenticate, function (req, res) {
        
        var tService = service.test.testService();
        
        //res.json({'dd':'11'});
        tService.getData(function (data) {
            res.json(data);
        });

    });

    ///--> Save data to db for test table
    router.post("/api/saveData", authenticate, function (req, res) {
        
        var test=(req.body);
       
        var tService = service.test.testService();
        tService.saveData(test, function (data) {
            res.json(data);
        });

    });

    function status() {
        var data = {};
        data.Status = true;
        data.StatusCode = 100
        data.ErrorCode = 0;
        data.ErrorMessage = ''
        return data;
    }

   
    app.use('/', router);

}