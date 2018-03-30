var dbService = require('./dataservice.js');
var mode = process.env.NODE_ENV;
module.exports = {
    testService: function () 
    {
        
        var serviceData=[{'num1': '1', 'num2': '2','result':'2'},
        {'num1': '2', 'num2': '2','result':'4'},
        {'num1': '5', 'num2': '2','result':'10'}
    ]
///--> Get data service data interaction
 this.getData = function (callback) {
     if(mode=='unittest'){
         callback({'num1': '1', 'num2': '2','result':'2'}); return;
     }

     //in case of no DB run from static data and test  here
     callback(serviceData); return;
            var conn = dbService.dataService().connection;
            conn.connect(function (err) {
                if (err) throw new Error(err);
            })

            conn.query("select num1,num2,result from calculator", function (err, rows) {

                conn.end()
                if (err) throw new Error(err);

                callback(rows);
             
            });
    };


 ///--> Save data service data interaction
 this.saveData = function (calData, callback) {
    if(mode=='unittest'){
        callback(calData);
        return;
    }

     //in case of no DB run from static data and test  here
         serviceData.push(calData); callback({'success':'200'});return;

         var conn = dbService.dataService().connection;
         conn.connect(function (err) {
             if (err) throw new Error(err);
         })
         conn.query("insert into calculator set num1=?,num2=?,result=?", [calData.num1,calData.num2,calData.result])
         conn.end()
         callback({'success':'200'});
    }

        return this;
    }
}
