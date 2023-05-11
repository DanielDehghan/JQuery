var videoGames={
    insert: function(options, callback){
        function txFunction(tx) {

            let sql = "INSERT INTO videoGames(videoGameName, videoGameImageUrl, genreId, creatorId, yearReleasedDate, description, ignRating) VALUES(?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: insert transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options, callback){
        function txFunction(tx) {

            let sql = "UPDATE videoGames SET videoGameName=?, videoGameImageUrl=?, genreId=?, creatorId=?, yearReleasedDate=?, description=?, ignRating=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: update transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function(options, callback){
        function txFunction(tx) {

            let sql = "DELETE FROM videoGames WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: delete transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){
        function txFunction(tx) {

            let sql = "SELECT * FROM videoGames WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: select transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function(options, callback){
        function txFunction(tx) {

            let sql = "SELECT * FROM videoGames;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: selectAll transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var creator={
    insert: function(options, callback){
        function txFunction(tx) {

            let sql = "INSERT INTO creator(companyName, companyImageUrl, description, rating) VALUES(?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: insert transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options, callback){
        function txFunction(tx) {

            let sql = "UPDATE creator SET companyName=?, companyImageUrl=?, description=?, rating=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: update transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function(options, callback){
        function txFunction(tx) {

            let sql = "DELETE FROM creator WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: delete transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){
        function txFunction(tx) {

            let sql = "SELECT * FROM creator WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: select transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function(options, callback){
        function txFunction(tx) {

            let sql = "SELECT * FROM creator;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: selectAll transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var genre={
    insert: function(options, callback){
        function txFunction(tx) {

            let sql = "INSERT INTO genre(genreName, genreDescription, genrePopId) VALUES(?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: insert transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options, callback){
        function txFunction(tx) {

            let sql = "UPDATE genre SET genreName=?, genreDescription=?, genrePopId=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: update transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function(options, callback){
        function txFunction(tx) {

            let sql = "DELETE FROM genre WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: delete transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){
        function txFunction(tx) {

            let sql = "SELECT * FROM genre WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: select transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function(options, callback){
        function txFunction(tx) {

            let sql = "SELECT * FROM genre;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.log("Success: selectAll transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

