

function savetolocalStorage() {

    if (doValidate_settingDefEmail()) {
        localStorage.removeItem("DefaultEmail");

        const email = $("#defReviewerEmail").val();
        localStorage.setItem("DefaultEmail", email);

        alert("Default reviewer email saved")
        localStorage.getItem("DefaultEmail");


    }
}

function gettingSavedEmail(){

$("#email").val(localStorage.getItem("DefaultEmail"));


}

    function getOverallRatingAddForm() {

        let quality=   $("#foodQualityRate").val();
        let service=   $("#servicRate").val();
        let value=  $("#valueRate").val();

        if( quality >= 0 && quality <= 5 && service >= 0 && service <= 5 && value >= 0 && value <= 5){

            let res = (((parseInt(quality) + parseInt(service) + parseInt(value)) * 100 )/ 15).toFixed() ;

            return $("#overallRating").val((res +'%').toString());
        }
        else {
            return $("#overallRating").val(" ")
        }
    }


    function getOverallRatingmodifyForm() {
        let quality=   $("#modifyfoodQualityRate").val();
        let service=   $("#modifyservicRate").val();
        let value=  $("#modifyvalueRate").val();

        if( quality >= 0 && quality <= 5 && service >= 0 && service <= 5 && value >= 0 && value <= 5){

            let res = (((parseInt(quality) + parseInt(service) + parseInt(value)) * 100 )/ 15).toFixed() ;

            return $("#modifyoverallRating").val((res +'%').toString());
        }
        else {
            return $("#modifyoverallRating").val(" ")
        }
    }


function getOverallRating(first, second , third){

    if( first >= 0 && first <= 5 && second >= 0 && second <= 5 && third >= 0 && third <= 5){

        let res = (((parseInt(first) + parseInt(second) + parseInt(third)) * 100 )/ 15).toFixed() ;

        return (res +'%').toString();
    }
    else {
        return " ";
    }

};

 const utilities= {

     ratingShowHideModifyForm:

         function() {

             if (this.checked) {

                 $('#modifyratingContent').show();
             } else {

                 $("#modifyfoodQualityRate").val(parseInt(0));
                 $("#modifyservicRate").val(parseInt(0));
                 $("#modifyvalueRate").val(parseInt(0));
                 $("#modifyoverallRating").val('');
                 $('#modifyratingContent').hide();

             }


         },


     ratingShowHideAddForm:
         function() {

             if (this.checked) {

                 $('#ratingContent').show();

             } else {

                 $("#foodQualityRate").val(parseInt(0));
                 $("#servicRate").val(parseInt(0));
                 $("#valueRate").val(parseInt(0));
                 $("#overallRating").val('');

                 $('#ratingContent').hide();


             }

         }


 };








function addFeedbackFrom(){

    // 1. Test validaiton
    if (doValidate_addFeedbackForm()) {
        let name = $("#business").val();
        let type = $("#cmbState").val();
        if(type === "Others"){
            type= 1
        }
        else if(type === "Canadian"){
            type = 2
        }
        else if(type === "Asian"){
            type = 3
        }
        else if(type === "European"){
            type = 4
        }
        else if(type === "Australian"){
            type = 5
        }
        let email = $("#email").val();
        let comment = $("#comment").val();
        let date = $("#addReviewDate").val();
        let hasReview;
        let rating1;
        let rating2;
        let rating3;



        if($("#chckRating").prop('checked')){

           hasReview = true;
           rating1 = $("#foodQualityRate").val();
           rating2 = $("#servicRate").val();
           rating3 = $("#valueRate").val();
        }else {
            hasReview = false;
            rating1= 0;
            rating2 = 0;
            rating3 = 0;
        }

        console.log("add form is valid");
        $("#defReviewerEmail").val("");
        $("#defReviewerEmail").val(email);

        let options = [name, type, email, comment,date,hasReview,rating1,rating2,rating3];
        function callback() {
            // function mysuccessCallback() {
            console.log("Record inserted successfully");
            alert("Record inserted successfully");
            // }
        }

        Feedback.insert(options, callback);
        location.reload();
    }
    else{
        console.error("add form is INVALID");
    }
    // 2. if Validation is ok
    //     Fetch individual fields values
    //     insert to db
    // 3. if validation is not ok
    //     show error message
}

function modifyFeedbackFrom(){
    // 1. Test validaiton
    if (doValidate_modifyFeedbackForm()) {

        let name = $("#businessModify").val();
        let type = $("#modifyCmbState").val();
        if(type === "Others"){
            type= 1
        }
        else if(type === "Canadian"){
            type = 2
        }
        else if(type === "Asian"){
            type = 3
        }
        else if(type === "European"){
            type = 4
        }
        else if(type === "Australian"){
            type = 5
        }
        let emailModify= $("#emailModify").val();
        let comment = $("#commentModify").val();
        let date = $("#modifyReveiewDate").val();
        let hasReview;
        let rating1;
        let rating2;
        let rating3;

        if($("#modifychckRating").prop('checked', true)){

            hasReview = "true";
            rating1 = $("#modifyfoodQualityRate").val();
            rating2 = $("#modifyservicRate").val();
            rating3 = $("#modifyvalueRate").val();
        }
        else if($("#modifychckRating").prop('checked', false)){

            hasReview = "false";
            rating1= 0;
            rating2 = 0;
            rating3 = 0;

        }

if(rating1 == 0 && rating2 == 0 && rating3 == 0){
    hasReview = "false";
}


        console.log("Modify form is valid");
        $("#defReviewerEmail").val("");
        $("#defReviewerEmail").val(emailModify);

        let id = localStorage.getItem('id');
        let options = [name, type, emailModify, comment,date,hasReview,rating1,rating2,rating3,id];
        function callback() {
            console.log("Success: Record updated successfully");
            alert("Record updated successfully");
        }

        Feedback.update(options, callback);
        document.location.href="#DTViewFeedbackPage";
    }
    else{
        console.error("Modify form is INVALID");
    }
    // 2. if Validation is ok
    //     Fetch individual fields values
    //     insert to db
    // 3. if validation is not ok
    //     show error message
}
function updateTypesDropdown(){

// Get the "Type" dropdown element
    const typeDropdown = document.getElementById("cmbState");

    // Call the selectAll CRUD of 'type'
    Feedback.selectAllType(null, function(tx, result) {
        // Clear the current options in the dropdown
        typeDropdown.innerHTML = "";

        // Append each item to the "Type" dropdown
        for (let i = 0; i < result.rows.length; i++) {
            const row = result.rows.item(i);
            const option = document.createElement("option");
            option.value = row.id;
            option.text = row.name;
            typeDropdown.appendChild(option);

            $("#cmbState").val(row.id = '1').change();

            // if(row.id == 1){
            //     var selectedText = $("#cmbState option:selected").text();
            //     $("#cmbState").text(selectedText.toString());
            // }
        }

        // Make "Others" as selected by default


// console.log(typeDropdown.value)

    });
};

function updateTypesDropdownModify(){

// Get the "Type" dropdown element
    const typeDropdown = document.getElementById("modifyCmbState");

    // Call the selectAll CRUD of 'type'
    Feedback.selectAllType(null, function(tx, result) {
        // Clear the current options in the dropdown
        typeDropdown.innerHTML = "";

        // Append each item to the "Type" dropdown
        for (let i = 0; i < result.rows.length; i++) {
            const row = result.rows.item(i);
            const option = document.createElement("option");
            option.value = row.id;
            option.text = row.name;
            typeDropdown.appendChild(option);
        }



    });
}

function deleteFeedback() {
    // let id = $("#txtId").val();
    let id = localStorage.getItem('id');

    let options = [id];


    function callback() {
        console.log("Success: record deleted successfully");
        $(location).prop('href', '#DTViewFeedbackPage');
    }
    Feedback.delete(options, callback);
}
function showAllFeddbacks() {
    let options = [];
    function callback(tx, results) {
        // console.log(results.rows);

        let htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            let row = results.rows[i];
            console.log(`businessName: ${row['businessName']} typeId: ${row['typeId']}
         reviewerEmail: ${row['reviewerEmail']} reviewerComments: ${row['reviewerComments']} 
         reviewDate: ${row['reviewDate']} hasRating: ${row.hasRating} rating1: ${row['rating1']}
          rating2: ${row['rating2']} rating3: ${row['rating3']} typeId: ${row['typeId']}`);

            let rating1 = `${parseInt(row['rating1'])}`;
            let rating2 = `${parseInt(row['rating2'])}`;
            let rating3 = `${parseInt(row['rating3'])}`;
            let overallRating = getOverallRating(rating1,rating2,rating3);
            htmlCode += `<li>
                <a data-role="button" data-row-id=${row['id']} href="#">
                <h1>Bussiness Name: ${row['businessName']}</h1>
                <h2>Reviewer Email: ${row['reviewerEmail']}</h2>
                <h3>comment: ${row['reviewerComments']}</h3>
                <h3>Overall Rating: ${overallRating.toString()} </h3>
                </a>
</li>`;
        }
        let lv = $("#listviewFeedback");
        lv = lv.html(htmlCode);
        lv.listview("refresh"); // very important

        function linkClickHandler() {
            // saving id to local storage
            localStorage.setItem("id", $(this).attr('data-row-id'));
            // navigating to another page
            $(location).prop('href', "#DTModifyFeedbackPage");
        }

        // attach event handler to each <a> tag
        $("#listviewFeedback a").on("click", linkClickHandler);


    }
    Feedback.selectAll(options, callback);
}
function showOneFeedback(){
    // let id = $("#txtId").val();
    let id = localStorage.getItem("id");


    let option = [id];


    function callback(tx, results) {
        let row = results.rows[0];
        console.log(`businessName: ${row['businessName']} typeId: ${row['typeId']}
         reviewerEmail: ${row['reviewerEmail']} reviewerComments: ${row['reviewerComments']} 
         reviewDate: ${row['reviewDate']} hasRating: ${row['hasRating']} rating1: ${row['rating1']}
          rating2: ${row['rating2']} rating3: ${row['rating3']}`);

        let rating1 = `${parseInt(row['rating1'])}`;
        let rating2 = `${parseInt(row['rating2'])}`;
        let rating3 = `${parseInt(row['rating3'])}`;
        let overallRating = getOverallRating(rating1,rating2,rating3);
        let type;

        $("#businessModify").val(row['businessName']);


        $("#modifyCmbState").val(row['typeId']).change();

        $("#emailModify").val(row['reviewerEmail']);
        $("#commentModify").val(row['reviewerComments']);
        $("#modifyReveiewDate").val(row['reviewDate']);
        console.log(row['hasRating'])
        console.log(row['typeId'])
        if (row['hasRating'] == "true") {
            if($("#modifychckRating").prop("checked", false)){
                $("#modifychckRating").click();
            }

            $('#modifyratingContent').show();
            $("#modifyfoodQualityRate").val(row['rating1']);
            $("#modifyservicRate").val(row['rating2']);
            $("#modifyvalueRate").val(row['rating3']);
            $("#modifyoverallRating").val(overallRating);
        }
        else{
            if( $("#modifychckRating").prop("checked", true)){

                $("#modifychckRating").click();
            }

            $('#modifyratingContent').hide();
            $("#modifyfoodQualityRate").val(0);
            $("#modifyservicRate").val(0);
            $("#modifyvalueRate").val(0);
            $("#modifyoverallRating").val('');
        }


    }

    Feedback.select(option, callback);
}

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
