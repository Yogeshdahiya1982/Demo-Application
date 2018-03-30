var fs = require('fs');


function apiModule(app, router) {
    this.app = app;
    this.router = router;
    this._config = require('./api.testdemo.module.config');
};


apiModule.prototype.modules = function (d, controllerback, cb) {
    fs.readdir(d, function (err, files) {
       
        files.forEach(function (file) {
            fs.stat(d + '/' + file, function (err, stats) {
                if (stats.isFile()) { cb(d + '/' + file); }
                if (stats.isDirectory()) { controllerback(d + '/' + file, controllerback, cb); }
            });
        });
    });
};

apiModule.prototype.authenticateApi = function (req, res, next) {
   next();
   console.log("authenticate logic  for module ?");
};


apiModule.prototype.initialize = function () {
    
    var url = this._config.route;
    var routeControl = this._config.controll;
    var authenticate = this.authenticateApi;
    var app = this.app;
    var route = this.router;
    var service = require('../services');

    this.modules(this._config.route, this.modules, function (controller) {

        if (controller.indexOf(routeControl) >= 0) {
            controller = controller.replace(url, "");
            require("." + controller)(app, route, authenticate, service);
           
        }
    });
};

module.exports = apiModule;