var mySql = require('mysql');
var config = require('./config/dbconfiguration.js');
module.exports = {
    dataService: function () {
        var configServer = config.server().Db;
        this.pool = mySql.createPool({
            connectionLimit: 20,
            host: configServer.Server_Host,
            user: configServer.Server_User,
            password: configServer.Server_Password,
            database: configServer.Server_DataBase,
            debug: false
        });
        this.connection = mySql.createConnection({
            host: configServer.Server_Host,
            user: configServer.Server_User,
            password: configServer.Server_Password,
            database: configServer.Server_DataBase
        });
        return this;
    }
};

