

//reference to our database
var db;


function errorHandler(error){
    console.error(`Error: ${error.message}` );
}

var DB ={
    createDatabase: function(){
        let name = "DTFeedbackDB";
        let version = "1.0";
        let displayName = "DB for Feedback app";
        let size = 2 * 1024 * 1024;

        function creationCallback() {
            console.log("Success: Database created successfully");
        }

        db = openDatabase(name, version, displayName, size, creationCallback);
    },
    createTables:function(){


        let options = [];


        function txFunction(tx) {
            var review = "CREATE TABLE IF NOT EXISTS review("+
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "businessName VARCHAR(30) NOT NULL," +
                "typeId INTEGER NOT NULL," +
                "reviewerEmail VARCHAR(30)," +
                "reviewerComments TEXT," +
                "reviewDate DATE," +
                "hasRating VARCHAR(1)," +
                "rating1 INTEGER," +
                "rating2 INTEGER," +
                "rating3 INTEGER," +
                "FOREIGN KEY(typeId) REFERENCES type(id));";
            var dropType = "DROP TABLE IF EXISTS type;";
            tx.executeSql(dropType, options, success, errorHandler);
            var type  = "CREATE TABLE IF NOT EXISTS type("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";

            tx.executeSql(type, options, success, errorHandler );

            let sql2 = "INSERT INTO type(name)VALUES('Others'),('Canadian'),('Asian'),('European'),('Australian');";
            tx.executeSql(sql2, options, success, errorHandler);

            function success(){
                console.log("Success: table created successfully");
            }

            tx.executeSql(review, options, success, errorHandler);

        }
        function successTransaction() {
            console.log("Create table transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    // createTables2:function(){
    //     function txFunction(tx) {
    //        var sql = "CREATE TABLE IF NOT EXISTS type("
    //           + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
    //         + "name VARCHAR(20) NOT NULL);";
    //         let options = [];
    //         function success(){
    //             console.log("Success: table created successfully");
    //         }
    //         tx.executeSql(sql, options, success, errorHandler);
    //     }
    //     function successTransaction() {
    //         console.log("Create table transaction successful");
    //     }
    //     db.transaction(txFunction, errorHandler, successTransaction);
    // },



    dropTables:function(){
        function txFunction(tx) {
            let review = "DROP TABLE IF EXISTS review;";
            let type = "DROP TABLE IF EXISTS type;";
            let options = [];
            function successDrop() {
                console.log("Success: friend table dropped successfully");
            }
            tx.executeSql(review, options, successDrop, errorHandler);
            tx.executeSql(type, options, successDrop, errorHandler);
        }
        function successTransaction() {
            console.log("Success Drop tables transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
}