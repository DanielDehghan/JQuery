
//ALL VIDEOGAME FUNCTIONS
function addGameFrom() {

    if (doValidate_addGameForm()) {
        console.log("Add game is valid");

        let videoGameName = $("#gameName").val();
        let gameUrl = $("#gameURL").val();
        let gameGenre = $("#gameGenre").val();
        let gameCreator = $("#gameCreator").val();
        let gameReleaseDate = $("#gameYear").val();
        let gameDescription = $("#gameDescription").val();
        let gameRating = $("#gameRate").val();

        let options = [videoGameName, gameUrl, gameGenre, gameCreator, gameReleaseDate, gameDescription, gameRating];

        function callback() {

            console.log("Record inserted successfully");
            alert("Record inserted successfully");
            $(location).prop('href', "#pageList");
        }

        videoGames.insert(options, callback);
    }
    else{
        console.error("Add game form is INVALID");
    }
}

function updateGameFrom() {

    if (doValidate_updateGameForm()) {
        console.log("Update game is valid");

        let videoGameName = $("#modifyGameName").val();
        let gameUrl = $("#modifyGameURL").val();
        let gameGenre = $("#modifyGameGenre").val();
        let gameCreator = $("#modifyGameCreator").val();
        let gameReleaseDate = $("#modifyGameYear").val();
        let gameDescription = $("#modifyGameDescription").val();
        let gameRating = $("#ModifyGameRate").val();

        let id = localStorage.getItem('id');

        let options = [videoGameName, gameUrl, gameGenre, gameCreator, gameReleaseDate, gameDescription, gameRating, id];

        function callback(){
            console.log("success: Record updated successfully");
            alert("Record updated successfully");
            $(location).prop('href', "#pageList");
        }

        videoGames.update(options, callback);
    }
    else{
        console.error("Update game form is INVALID");
    }
}

function showCurrentVideoGames(){
    let id = localStorage.getItem("id");

    let option =[id];

    function callback(tx,results){
        let row = results.rows[0];

        $("#modifyGameName").val(row['videoGameName']);
        $("#modifyGameURL").val(row['videoGameImageUrl']);
        $("#modifyGameGenre").val(row['genreId']);
        $("#modifyGameGenre").val(row['genreId']).change();
        $("#modifyGameCreator").val(row['creatorId']);
        $("#modifyGameCreator").val(row['creatorId']).change();
        $("#modifyGameYear").val(row['yearReleasedDate']);
        $("#modifyGameDescription").val(row['description']);
        $("#ModifyGameRate").val(row['ignRating']);

    }
    videoGames.select(option, callback);
}


function getVideoGames(){
    let options=[];
    let htmlCode = "";

    function callback(tx,result){
        if(result.rows.length == 0){
            htmlCode += `<h1>No records</h1>`
        }else{
            for(var i=0; i < result.rows.length; i++){
                let row = result.rows[i];
                htmlCode += `<li>
                <a data-role="button" data-row-id=${row['id']} href="#">
                <img src="${row['videoGameImageUrl']}" style=" width: 200px; height: 120px; position: absolute; top: 20px; left: 12px;">
                <h2>Video game Name: ${row['videoGameName']}</h2>
                <h2>Year: ${row['yearReleasedDate']}</h2>
                <h2>IGN Rating: ${row['ignRating']}</h2>
                
</a>
</li>`;
            }
        }

        let listView = $("#listviewGames");
        listView = listView.html(htmlCode);
        listView.listview("refresh");

        function linkClickHandler() {
            localStorage.setItem("id", $(this).attr('data-row-id'));
            $(location).prop('href', "#pageModify");
        }

        $("#listviewGames a").on("click", linkClickHandler);
    }
    videoGames.selectAll(options, callback);
}

//END OF VIDEOGAME FUNCTIONS

//ALL COMPANY FUNCTIONS
function addCompanyFrom() {

    if (doValidate_addCompanyForm()) {
        console.log("Add Company is valid");

        let companyName = $("#companyName").val();
        let companyImageUrl = $("#companyCoverImg").val();
        let companyDescription = $("#companyDescription").val();
        let companyRating = $("#companyRate").val();

        let options = [companyName, companyImageUrl, companyDescription, companyRating];

        function callback() {
            console.log("Record inserted successfully");
            alert("Record inserted successfully");
            $(location).prop('href', "#pageListCompany");
        }

        creator.insert(options, callback);
    }
    else{
        console.error("Add Company form is INVALID");
    }
}

function deleteCompany(){
    let id = localStorage.getItem('id');

    let options = [id];


    function callback(){
        console.log("Success: record deleted successfully");
        $(location).prop('href', '#pageListCompany');
    }
    creator.delete(options, callback);
}

function modifyCompanyFrom(){
    if (doValidate_modifyCompanyForm()) {
        console.log("modify Company is valid");

        let companyName = $("#companyModifyName").val();
        let companyImageUrl = $("#companyModifyCoverImg").val();
        let companyDescription = $("#companyModifyDescription").val();
        let companyRating = $("#companyModifyRate").val();

        let id = localStorage.getItem('id');
        let options = [companyName, companyImageUrl, companyDescription, companyRating, id];

        function callback() {
            console.log("Record inserted successfully");
            alert("Record inserted successfully");
            $(location).prop('href', "#pageListCompany");
        }

        creator.update(options, callback);
    }
    else{
        console.error("Modify company form is INVALID");
    }
}

function getCompanys(){
    let options=[];
    let htmlCode = "";

    function callback(tx,result){
        if(result.rows.length == 0){
            htmlCode += `<h1>No records</h1>`
        }else{
            for(var i=0; i < result.rows.length; i++){
                let row = result.rows[i];
                htmlCode += `<li>
                <a data-role="button" data-row-id=${row['id']} href="#">
                <img src="${row['companyImageUrl']}}" style=" width: 200px; height: 120px; position: absolute; top: 20px; left: 12px;">
                <h2>Company Name: ${row['companyName']}</h2>
                <h2>Company Descirption: ${row['description']}</h2>
                <h2>Company rating: ${row['rating']}</h2>
                
</a>
</li>`;
            }
        }

        let listView = $("#listviewCompany");
        listView = listView.html(htmlCode);
        listView.listview("refresh");

        function linkClickHandler() {
            localStorage.setItem("id", $(this).attr('data-row-id'));

            $(location).prop('href', "#pageModifyCompany");
        }

        $("#listviewCompany a").on("click", linkClickHandler);
    }
    creator.selectAll(options, callback);
}

function showCurrentCompany(){
    let id = localStorage.getItem("id");

    let option =[id];

    function callback(tx,results){
        let row = results.rows[0];

        $("#companyModifyName").val(row['companyName']);
        $("#companyModifyCoverImg").val(row['companyImageUrl']);
        $("#companyModifyDescription").val(row['description']);
        $("#companyModifyRate").val(row['rating']);
        $("#companyModifyRate").val(row['rating']).change();
    }
    creator.select(option, callback);
}



//END OF COMPANY FUNCTIONS

//ALL GENRE FUNCTIONS
function addGenreFrom() {

    if (doValidate_addGenreForm()) {
        console.log("Add Genre is valid");

        let genreName = $("#genre").val();
        let aboutGenre = $("#aboutGenre").val();
        let genrePop = $("#genrePopularity").val();

        let options = [genreName, aboutGenre, genrePop];

        function callback() {
            console.log("Record inserted successfully");
            alert("Record inserted successfully");
            $(location).prop('href', "#pageListGenre");
        }

        genre.insert(options, callback);
    }
    else{
        console.error("Add Genre form is INVALID");
    }
}

function deleteGenre(){
    let id = localStorage.getItem('id');

    let options = [id];


    function callback(){
        console.log("Success: record deleted successfully");
        $(location).prop('href', '#pageListGenre');
    }
    genre.delete(options, callback);
}

function modifyGenreFrom(){
    if (doValidate_modifyGenreForm()) {
        console.log("Modify Genre is valid");

        let genreName = $("#genreModify").val();
        let aboutGenre = $("#aboutGenreModify").val();
        let genreRating = $("#genrePopularityModify").val();

        let id = localStorage.getItem('id');

        let options = [genreName, aboutGenre, genreRating, id];

        function callback() {
            console.log("Record modified successfully");
            alert("Record modified successfully");
        }

        genre.update(options, callback);
    }
    else{
        console.error("Modify Genre form is INVALID");
    }
}

function updateGenreDropdown(){
    let options=[];
    let htmlCode = "";

    function callback(tx,result){
        for(var i=0; i < result.rows.length; i++){
            let row = result.rows[i];
            if(i === 0){
                htmlCode += `<option selected="selected" value="${row.id}" >${row.genreName}</option>`
                var selectedGenre = row.id
            }else{
                htmlCode += `<option value="${row.id}">${row.genreName}</option>`
            }
        }

        if($("#pageAddGame:visible")){
            let cmbGenreAdd = $("#gameGenre");
            cmbGenreAdd = cmbGenreAdd.html(htmlCode);
            cmbGenreAdd.val(selectedGenre).change();
        }
        if($("#pageModify:visible")){
            let cmbGenreModify = $("#modifyGameGenre");
            cmbGenreModify = cmbGenreModify.html(htmlCode);
        }
    }
    genre.selectAll(options, callback);
}

function updateCompanyDropdown(){
    let options=[];
    let htmlCode = "";

    function callback(tx,result){
        for(var i=0; i < result.rows.length; i++){
            let row = result.rows[i];
            if(i === 0){
                htmlCode += `<option selected="selected" value="${row.id}">${row.companyName}</option>`
                var selectedCompany = row.id
            }else{
                htmlCode += `<option value="${row.id}">${row.companyName}</option>`
            }

        }
        if($("#pageAddGame")){
            let cmbCompanyModify = $("#gameCreator");
            cmbCompanyModify = cmbCompanyModify.html(htmlCode);
            cmbCompanyModify.val(selectedCompany).change();
        }
        if($("#pageModify")){
            let cmbCompanyModify = $("#modifyGameCreator");
            cmbCompanyModify = cmbCompanyModify.html(htmlCode);
        }
    }
    creator.selectAll(options, callback);
}

function getGenres(){
    let options=[];
    let htmlCode = "";

    function callback(tx,result){
        if(result.rows.length == 0){
            htmlCode += `<h1>No records</h1>`
        }else{
            for(var i=0; i < result.rows.length; i++){
                let row = result.rows[i];
                htmlCode += `<li>
                <a data-role="button" data-row-id=${row['id']} href="#">
                <h2>Genre Name: ${row['genreName']}</h2>
                <h2>Genre Descirption: ${row['genreDescription']}</h2>
                
</a>
</li>`;
            }
        }

        let listView = $("#listviewGenre");
        listView = listView.html(htmlCode);
        listView.listview("refresh");

        function linkClickHandler() {
            localStorage.setItem("id", $(this).attr('data-row-id'));
            $(location).prop('href', "#pageModifyGenre");
        }

        $("#listviewGenre a").on("click", linkClickHandler);
    }
    genre.selectAll(options, callback);
}

function showCurrentGenre(){
    let id = localStorage.getItem("id");

    let option =[id];

    function callback(tx,results){
        let row = results.rows[0];

        $("#genreModify").val(row['genreName']);
        $("#aboutGenreModify").val(row['genreDescription']);
        $("#genrePopularityModify").val(row['genrePopId']);
        $("#genrePopularityModify").val(row['genrePopId']).change();

    }
    genre.select(option, callback);
}

//END OF GENRE FUNCTIONS

// function checkTables(){
//     if($("#gameGenre").val(null) && $("#gameCreator").val(null)){
//         $("#gameName").prop("disabled", true);
//         $("#gameURL").prop("disabled", true);
//         $("#gameGenre").prop("disabled", true);
//         $("#gameCreator").prop("disabled", true);
//         $("#gameYear").prop("disabled", true);
//         $("#gameDescription").prop("disabled", true);
//         $("#gameRate").prop("disabled", true);
//
//         document.getElementById("noValues").innerHTML = "Please add a genre and company before trying to add a video game";
//     }else if(!$("#gameGenre").val(null) && !$("#gameCreator").val(null)){
//         $("#gameName").prop("disabled", false);
//         $("#gameURL").prop("disabled", false);
//         $("#gameGenre").prop("disabled", false);
//         $("#gameCreator").prop("disabled", false);
//         $("#gameYear").prop("disabled", false);
//         $("#gameDescription").prop("disabled", false);
//         $("#gameRate").prop("disabled", false);
//
//         document.getElementById("noValues").innerHTML = "";
//     }
// }

function clearDatabase(){
    let result = confirm("Do you really want to clear database?");
    if (result) {
        try{
            DB.dropTables();
            alert("Database cleared!");
        }catch(e){
            alert(e);
        }
    }
}

function SaveDefSetting(){
 if(doValidate_settingForm()){
     localStorage.removeItem("DefaultEmail");
     const email = $("#userEmail").val();
     localStorage.setItem("DefaultEmail", email);

     alert("User email saved "+localStorage.getItem("DefaultEmail") );
     localStorage.getItem("DefaultEmail");
 }

}

