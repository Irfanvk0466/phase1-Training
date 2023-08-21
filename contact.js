$(document).ready(function(){
 
 //validation for first name - it allows only alphabets in input field
 $(".error-fname").hide();
 let fnameError = true;


 $("#fname").keyup(function(){
     validateFname();

     function validateFname(){
         let fnameValue = $("#fname").val();
         if (fnameValue.length === 0){
             $(".error-fname").show();
             $(".error-fname").text("First name is missing");
             fnameError = false;
             return false;
         
         } else if (!/^[a-zA-Z]+$/.test(fnameValue)) {
             $(".error-fname").show();
             $(".error-fname").text("First name is invalid");
             fnameError = false;
             return false;
         } else {
             $(".error-fname").hide();

         }
         }

     })

      //validation for last name - it allows only alphabets in input field
     $(".error-lname").hide();
     let lnameError = true;
 
     $("#lname").keyup(function() {
         validateLname();
 
         function validateLname() {
             let lnameValue = $("#lname").val();
             if (lnameValue.length === 0) {
                 $(".error-lname").show();
                 $(".error-lname").text("Last name is missing");
                 lnameError = false;
                 return false;
             } else if (!/^[a-zA-Z]+$/.test(lnameValue)) {
                 $(".error-lname").show();
                 $(".error-lname").text("Last name is invalid");
                 lnameError = false;
                 return false;
             } else {
                 $(".error-lname").hide();
             }
         }
     });


     // country and state validation

     let states = {
        india : ['kerala','chennai','punjab','karnadaka','mumbai'],
        canada : ['Alberta','British Columbia','Manitoba','New Brunswick','Newfoundland and Labrador'],
        usa : ['Alaska','Arizona','Arkansas','Arkansas','Arkansas'],
        australia : ['New South Wales','New South Wales','Queensland','Tasmania','South Australia'],
        england : ['London','Edinburgh','southampton','Belfast','manchester'],

     }

     $("#country").on("change",function(){
        var selectedCountry = $("#country").val();
        var StateList = $("#states");

        StateList.empty();

        if (selectedCountry in states){
            $.each(states [selectedCountry] , function(index , states){

                StateList.append(
                    $("<option></option>").val(states).html(states)
                    );
            })


        }else{
            StateList.append(
                $("<option></option>").val("").html("")
            );
        }

        })


     

     //submit button
     
    $("#submit").click(function(){
        if((fnameValue.length > 0 ) && (lnameValue.length > 0 ))
        {            
            window.location.pathname="/welcome.html";
        }
        else{
            return false;
        } 
           
       
    });  

    })