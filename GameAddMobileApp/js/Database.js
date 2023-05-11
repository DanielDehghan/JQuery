var db;

function errorHandler(error){
    console.error(`Error: ${error.message}` );
}

var DB ={
    createDatabase: function(){
        let name = "BPDTFinalAssignment";
        let version = "1.0";
        let displayName = "DB for BPDTFinalAssignment";
        let size = 2 * 1024 * 1024;

        function creationCallback() {
            console.log("Success: Database created successfully");
        }

        db = openDatabase(name, version, displayName, size, creationCallback);
    },
    createTablesVideoGames:function(){
        function txFunction(tx) {
            var sql = "CREATE TABLE IF NOT EXISTS videoGames( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "videoGameName VARCHAR(30) NOT NULL," +
                "videoGameImageUrl VARCHAR(30) NOT NULL," +
                "genreId INTEGER NOT NULL," +
                "creatorId INTEGER NOT NULL," +
                "yearReleasedDate DATE," +
                "description TEXT," +
                "ignRating INTEGER," +
                "FOREIGN KEY(genreId) REFERENCES genre(id)," +
                "FOREIGN KEY(creatorId) REFERENCES creator(id));";


            let options = [];
            function success(){
                console.log("Success: tables created successfully");
            }
            tx.executeSql(sql, options, success, errorHandler);
        }

        function successTransaction() {
            console.log("Create tables transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);

    },
    createTablesCompany:function(){
        function txFunction(tx) {
            var sql = "CREATE TABLE IF NOT EXISTS creator( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "companyName VARCHAR(30) NOT NULL," +
                "companyImageUrl VARCHAR(30) NOT NULL," +
                "description TEXT," +
                "rating INTEGER);"



            let options = [];
            function success(){
                console.log("Success: tables created successfully");
            }
            tx.executeSql(sql, options, success, errorHandler);

            var sqlQuery = "INSERT INTO creator (companyName, companyImageUrl, description, rating) SELECT * FROM (SELECT 'Activision', 'https://th.bing.com/th/id/R.3de231851bb7bca90b850fe09f988886?rik=AwfQzFfdPTmUqg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VPA09yHtYoo%2fVItYQHMp-7I%2fAAAAAAAAcKk%2fZokby4msQbs%2fs1600%2factivision.jpg&ehk=Q7YpvnvnjuNX2rLgwlvJo3DFEqFnGwj%2fonbSaWYYKu8%3d&risl=&pid=ImgRaw&r=0', 'Activision Blizzard, Inc. is an American video game holding company based in Santa Monica, California. It was founded in July 2008.', '9' UNION ALL SELECT 'CD Project ', 'https://th.bing.com/th/id/OIP.QLOypWRA6nUktj3PlnFBjAHaEK?pid=ImgDet&rs=1', 'CD Projekt S.A. is a Polish video game developer, publisher and distributor based in Warsaw, founded in May 1994 by Marcin Iwiński and Michał Kiciński. ', '8') AS tmp WHERE NOT EXISTS (SELECT companyName FROM creator WHERE companyName IN ('Activision', 'CD Project '))";



            tx.executeSql(sqlQuery, options, success, errorHandler);

        }
        function successTransaction() {
            console.log("Create tables transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);


    },
    createTablesGenre:function(){
        function txFunction(tx) {
            var sql = "CREATE TABLE IF NOT EXISTS genre( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "genreName VARCHAR(20) NOT NULL," +
                "genreDescription TEXT," +
                "genrePopId INTEGER);"

            let options = [];
            function success(){
                console.log("Success: tables created successfully");
            }
            tx.executeSql(sql, options, success, errorHandler);

            var sqlQuery = "INSERT INTO genre (genreName, genreDescription, genrePopId) SELECT * FROM (SELECT 'Action', 'Enjoyable games mostly fighting and operational style', '1' UNION ALL SELECT 'Horror', 'the scary games that increase your heart beats', '2') AS tmp WHERE NOT EXISTS (SELECT genreName FROM genre WHERE genreName IN ('Action', 'Horror'))";



            tx.executeSql(sqlQuery, options, success, errorHandler);
        }
        function successTransaction() {
            console.log("Create tables transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);


    },
    dropTables:function() {
        function txFunction(tx) {
            let sql = "DROP TABLE IF EXISTS videoGames;";
            let options = [];

            function successDrop() {
                console.log("Success: videoGames table dropped successfully");
            }

            tx.executeSql(sql, options, successDrop, errorHandler);
        }

        function successTransactionType() {
            console.log("Successfully Dropped type table transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransactionType);

        function txFunction2(tx) {
            let sql = "DROP TABLE IF EXISTS creator;";
            let options = [];

            function successDrop() {
                console.log("Success: creator table dropped successfully");
            }

            tx.executeSql(sql, options, successDrop, errorHandler);
        }

        function successTransactionCompany() {
            console.log("Successfully Dropped type table transaction successful");
        }
        db.transaction(txFunction2, errorHandler, successTransactionCompany);

        function txFunction3(tx) {
            let sql = "DROP TABLE IF EXISTS genre;";
            let options = [];

            function successDrop() {
                console.log("Success: genre table dropped successfully");
            }

            tx.executeSql(sql, options, successDrop, errorHandler);
        }

        function successTransactionGenre() {
            console.log("Successfully Dropped type table transaction successful");
        }
        db.transaction(txFunction3, errorHandler, successTransactionGenre);
    }
}