function doValidate_addFeedbackForm(){
    // 1. get the reference to the form
    let form = $("#frmAdd");
    // 2. call validate() on the form ref
    form.validate({
        rules:{
            business:{
                required: true,
                minlength: 2,
                maxlength: 20
            },
            email:{
                required: true,
                myemailcheck: true

            },
            addReviewDate:{
                required: true,

            },
            foodQualityRate:{

                digits: true,
                myratecheck:[0,5]
            },
            servicRate:{

                digits: true,
                myratecheck:[0,5]
            },
            valueRate:{
                digits: true,
                myratecheck:[0,5]
            }
        },
        messages:{
            business:{
                required: "You must enter name for Business",
                minlength: "Name must be at least 2 chars long",
                maxlength: "Maximum Char is 20"
            },
            email:{
                required: "You must enter full name",
                myemailcheck: "The email must be a valid email."

            },
            addReviewDate:{
                required: "Review Date is Required",

            },
            foodQualityRate:{

               digits: "The food quality rate should be a number",
                myratecheck: "Value must be 0-5"

            },
            servicRate: {

                digits: "The Service rate should be a number",
                myratecheck: "Value must be 0-5"

            },
            valueRate: {
                digits: "The value rate should be a number",
                myratecheck: "Value must be 0-5"

            }
        }
    });
    // 3. return by calling valid() on the form ref
    return form.valid();
}

jQuery.validator.addMethod("myemailcheck",
    function(v, e){
        let myregex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
        return this.optional(e) || myregex.test(v);
    },
    "Must be a Valid email");


jQuery.validator.addMethod("myratecheck",

    function(value,e){
         if(0 <= value && value <= 5){
             return true;
         }else{
             return false;
         }

    }, "Value must be between 0 and 5");

// function doValidate_ratingAddForm() {
//     let form = $("#frmAdd");
//     form.validate({
//             rules: {
//
//
//
//             }
//         }
//     )
// }


function doValidate_modifyFeedbackForm(){
    let form = $("#frmModify");
    form.validate({
rules:{
    businessModify:{
        required: true,
        minlength: 2,
        maxlength: 20
    },
    emailModify:{
        required: true,
            myemailcheck: true

    },
    modifyReveiewDate:{
        required: true,

    },
    modifyfoodQualityRate:{

        digits: true,
        myratecheck: true
    },
    modifyservicRate:{

        digits: true,
        myratecheck: true
    },
    modifyvalueRate:{
        digits: true,
        myratecheck: true
    }
},
messages:{
    businessModify:{
        required: "You must enter name for Business",
            minlength: "Name must be at least 2 chars long",
        maxlength: "Maximum Char is 20"
    },
    emailModify:{
        required: "You must enter the email",
            myemailcheck: "The email must be a valid email."

    },
    modifyReveiewDate:{
        required: "Review Date is Required",

    },
    modifyfoodQualityRate:{

        digits: "The food quality rate should be a number",
        myratecheck: "Value must be 0-5"
    },
    modifyservicRate: {

        digits: "The Service rate should be a number",
        myratecheck: "Value must be 0-5"
    },
    modifyvalueRate: {
        digits: "The value rate should be a number",
        myratecheck: "Value must be 0-5"
    }
}
});
// 3. return by calling valid() on the form ref
return form.valid();
}

function doValidate_settingDefEmail(){
    let form = $("#frmSettings");
    form.validate({
        rules:{
            defReviewerEmail:{
                required: true,
                myemailcheck: true
           }
    },
        messages:{
            defReviewerEmail:{
                required: "You must enter the email",
                myemailcheck: "The email must be a valid email."
            }
        }
});
// 3. return by calling valid() on the form ref
return form.valid();
}


