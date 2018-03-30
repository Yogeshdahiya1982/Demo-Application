module.exports = {
    server: function () {
        this.Db = {
            Server_Host: 'testServer',
            Server_User: 'test-userName',
            Server_Password: 'password',
            Server_DataBase: 'TestDataBase'
        };
        return this;
    }
};