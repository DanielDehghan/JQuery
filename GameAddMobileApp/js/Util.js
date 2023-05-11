function doValidate_addGameForm(){
    // 1. get the reference to the form
    let form = $("#frmAddGame");
    // 2. call validate() on the form ref
    form.validate({
        rules:{
            gameName:{
                required: true,
                minlength: 2,
                maxlength: 20
            },
            gameURL:{
                required: true,

            },
            gameGenre:{
                required: true,

            },
            gameCreator:{
                required: true,
            },
            gameYear:{
                required: true,
            },
            gameDescription:{
                required: true,
            },
            gameRate:{
                required: true,
                number: true,
                range:[0,10]
            }
        },
        messages:{
            gameName:{
                required: "You must enter name for Game",
                minlength: "Game name must be at least 2 chars long",
                maxlength: "Maximum Char is 20"
            },
            gameURL:{
                required: "You must enter Cover Image URL",

            },
            gameGenre:{
                required: "Genre is Required",

            },
            gameCreator:{

                required: "Creator is Required",

            },
            gameYear: {
                required: "release year is Required",
            },
            gameDescription:{
                required: "Description is required for the game",
            },
            gameRate: {
                required: "IGN Rate is required",
                number: "The Rate value rate should be a number",
                range: "Rate Value must be 0-10"

            }
        }
    });
    // 3. return by calling valid() on the form ref
    return form.valid();
}




function doValidate_updateGameForm(){
    // 1. get the reference to the form
    let form = $("#frmModify");
    // 2. call validate() on the form ref
    form.validate({
        rules:{
            modifyGameName:{
                required: true,
                minlength: 2,
                maxlength: 20
            },
            modifyGameURL:{
                required: true,

            },
            modifyGameGenre:{
                required: true,

            },
            modifyGameCreator:{
                required: true,
            },
            modifyGameYear:{
                required: true,
            },
            modifyGameDescription:{
                required: true,
            },
            ModifyGameRate:{
                required: true,
                number: true,
                range:[0,10]
            }
        },
        messages:{
            modifyGameName:{
                required: "You must enter name for Game",
                minlength: "Game name must be at least 2 chars long",
                maxlength: "Maximum Char is 20"
            },
            modifyGameURL:{
                required: "You must enter Cover Image URL",

            },
            modifyGameGenre:{
                required: "Genre is Required",

            },
            modifyGameCreator:{

                required: "Creator is Required",

            },
            modifyGameYear: {
                required: "release year is Required",
            },
            modifyGameDescription:{
                required: "Description is required for the game",
            },
            ModifyGameRate: {
                required: "IGN Rate is required",
                number: "The value rate should be a number",
                range: "Rate Value must be 0-10"

            }
        }
    });
    // 3. return by calling valid() on the form ref
    return form.valid();
}

function doValidate_addCompanyForm(){
    let form = $("#frmAddCompany");
    form.validate({
        rules:{
            companyName:{
                required: true,
                minlength: 2,
                maxlength: 20
            },
            companyCoverImg:{
                required: true,

            },
            companyDescription:{
                required: true,

            },
            companyRate:{
                required: true,
                number: true,
                range:[0,10]
            }
        },
        messages:{
            companyName:{
                required: "You must enter name for Business",
                minlength: "Name must be at least 2 chars long",
                maxlength: "Maximum Char is 20"
            },
            companyCoverImg:{
                required: "Please Provide an Logo URL for Company",

            },
            companyDescription:{
                required: "Company Description is required",

            },
            companyRate:{
                required: "Company Rate is Required",
                number: "It must be digits value",
                range:"The Rate Value must be between 0 and 10"
            }

        }
    });
// 3. return by calling valid() on the form ref
    return form.valid();
}

function doValidate_modifyCompanyForm(){
    let form = $("#frmModifyCompany");
    form.validate({
        rules:{
            companyModifyName:{
                required: true,
                minlength: 2,
                maxlength: 20
            },
            companyModifyCoverImg:{
                required: true,

            },
            companyModifyDescription:{
                required: true,

            },
            companyModifyRate:{
                required: true,
                number: true,
                range:[0,10]
            }
        },
        messages:{
            companyModifyName:{
                required: "You must enter name for Business",
                minlength: "Name must be at least 2 chars long",
                maxlength: "Maximum Char is 20"
            },
            companyModifyCoverImg:{
                required: "Please Provide an Logo URL for Company",

            },
            companyModifyDescription:{
                required: "Company Description is required",

            },
            companyModifyRate:{
                required: "Company Rate is Required",
                number: "It must be digits value",
                range:"The Rate Value must be between 0 and 10"
            }

        }
    });
// 3. return by calling valid() on the form ref
    return form.valid();
}


function doValidate_addGenreForm() {
    let form = $("#frmAddGenre");
    form.validate({
        rules: {
            genre: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            aboutGenre: {
                required: true,

            },
            genrePopularity: {
                required: true,

            }
        },
        messages: {
            genre: {
                required: "You must enter name for Genre",
                minlength: "Gnere must be at least 2 chars long",
                maxlength: "Maximum Char is 20"
            },
            aboutGenre: {
                required: "explain something about this genre"


            },
            genrePopularity: {
                required: "The Popularity selection is Required"

            },

        }

    });
    return form.valid();
}

function doValidate_modifyGenreForm() {
    let form = $("#frmModifyGenre");
    form.validate({
        rules: {
            genreModify: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            aboutGenreModify: {
                required: true,

            },
            genrePopularityModify: {
                required: true,

            }
        },
        messages: {
            genreModify: {
                required: "You must enter name for Genre",
                minlength: "Gnere must be at least 2 chars long",
                maxlength: "Maximum Char is 20"
            },
            aboutGenreModify: {
                required: "explain something about this genre"


            },
            genrePopularityModify: {
                required: "The Popularity selection is Required"

            },

        }

    });
    return form.valid();
}




function doValidate_settingForm() {
    let form = $("#frmSettings");
    form.validate({
        rules: {
            userEmail: {
                required: true,

            }
        },
        messages: {
            userEmail: {
                required: "You must enter the Email",


            },

        }
    });
    return form.valid();
}



