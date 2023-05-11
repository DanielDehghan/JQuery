


function btnSave_click() {

    addFeedbackFrom();

}
function btnDelete_click() {
    deleteFeedback();
}
function btnUpdate_click() {
    modifyFeedbackFrom();
}

function btnSaveDef_Click() {
    savetolocalStorage();
}

function getOverallRating1() {

    getOverallRatingAddForm();
}

function getOverallRating2() {
    getOverallRatingmodifyForm();
}

function pageFeedbacks_show() {
    showAllFeddbacks();
    updateTypesDropdown();
}
function pageFeedbackDetail_show() {


    showOneFeedback();
    updateTypesDropdownModify();
}
function clearDB(){
    clearDatabase()
}
function savedEmailDisplay(){
    gettingSavedEmail();
    updateTypesDropdown();
}

function init() {

    // Add Form
    $("#foodQualityRate").change(getOverallRating1);
    $("#servicRate").change(getOverallRating1);
    $("#valueRate").change(getOverallRating1);




    // Modify Form
    $("#modifyfoodQualityRate").change(getOverallRating2);
    $("#modifyservicRate").change(getOverallRating2);
    $("#modifyvalueRate").change(getOverallRating2);

    $("#btnSave").click('click', btnSave_click);

    $("#btnDelete").click('click',btnDelete_click);

//page show events
    $("#DTAddFeddbackPage").on("pageshow", savedEmailDisplay)
$("#DTViewFeedbackPage").on("pageshow", pageFeedbacks_show)
    $("#DTModifyFeedbackPage").on("pageshow", pageFeedbackDetail_show)

    $("#modifychckRating").change(utilities.ratingShowHideModifyForm);
    $("#chckRating").change(utilities.ratingShowHideAddForm);
}

function initDB(){
    try {
        DB.createDatabase();
        if (db) {
            console.log('creating tables...');
            DB.createTables();
        }
        else{
            console.error("Error: Error in creating tables");
        }
    } catch (e) {
        console.error(`Error: (Fatal) error in initDB(). can't proceed`);
    }
}

$(document).ready(function () {


    $("#btnUpdate").on('click', btnUpdate_click);
    $("#btnSaveDef").on('click', btnSaveDef_Click);
    $("#btnClearDef").on('click', clearDB)
    init();
    initDB();

});