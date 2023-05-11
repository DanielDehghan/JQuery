function btnaddNewGame_click() {
    addGameFrom();
}

function btnaddNewCompany_click() {
    addCompanyFrom();
}

function btnaddNewGenre_click() {

    addGenreFrom();
}

function btnUpdateGame_click() {
    updateGameFrom();
}

function btnUpdateCompany_click() {
    modifyCompanyFrom();
}

function btnUpdateGenre_click() {
    modifyGenreFrom();
}

function updateGenreDropdownMenu(){
    updateGenreDropdown();
}

function updateCompanyDropdownMenu(){
    updateCompanyDropdown();
}

function btnClearDef_click() {
    clearDatabase();
}

function pageModifyGenre_show(){
    showCurrentGenre();
}

function pageModifyCompany_show(){
    showCurrentCompany();
}

function pageModifyVideoGame_show(){
    showCurrentVideoGames();
}

function btnDeleteGenre_click() {
    deleteGenre()
}

function btnDeleteCompany_click(){
    deleteCompany();
}

// function checkTablesGenreAndCompany() {
//     checkTables();
// }

function btnSaveDef_click() {
    SaveDefSetting();
}
function btnShow_click() {
    showPositionAndMap();
}

function init() {

    $("#btnAddNawGame").click("click", btnaddNewGame_click);
    $("#btnAddCompanyform").click("click", btnaddNewCompany_click);
    $("#btnAddGenreform").click("click", btnaddNewGenre_click);

    $("#btnUpdateGame").click("click", btnUpdateGame_click);
    $("#btnModifyCompanyform").click("click", btnUpdateCompany_click);
    $("#btnModifyGenreform").click("click", btnUpdateGenre_click);

    $("#btnDeleteGenre").click("click", btnDeleteGenre_click)
    $("#btnDeleteCompany").click("click", btnDeleteCompany_click)

    $("#btnClearDef").click("click", btnClearDef_click);
    $("#btnSaveDef").click("click", btnSaveDef_click);

    $("#pageAddGame").on("pageshow", updateGenreDropdownMenu);
    $("#pageAddGame").on("pageshow", updateCompanyDropdownMenu);
    $("#pageModify").on("pageshow", updateGenreDropdownMenu);
    $("#pageModify").on("pageshow", updateCompanyDropdownMenu);

    $("#pageListGenre").on("pageshow", getGenres);
    $("#pageListCompany").on("pageshow", getCompanys);
    $("#pageList").on("pageshow", getVideoGames);
    $("#pageModifyGenre").on("pageshow", pageModifyGenre_show);
    $("#pageModifyCompany").on("pageshow", pageModifyCompany_show);
    $("#pageModify").on("pageshow", pageModifyVideoGame_show);
    // $("#pageAddGame").on("pageshow", checkTablesGenreAndCompany)

    $("#btnShow").on("click", btnShow_click);
}

function initDB(){
    try {
        DB.createDatabase();
        if (db) {
            console.log('creating tables...');

            DB.createTablesGenre();
            DB.createTablesCompany();
            DB.createTablesVideoGames();

        }
        else{
            console.error("Error: Error in creating tables");
        }
    } catch (e) {
        console.error(`Error: (Fatal) error in initDB(). can't proceed`);
    }
}

$(document).ready(function () {
    init();
    initDB();
});