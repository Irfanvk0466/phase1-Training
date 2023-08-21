$(document).ready(function(){
        $("#submit").click(function(){
            var pwd = $('#password_validation').val();
            var cpwd = $('#cpwd').val();
            if(cpwd!=pwd){
                $('#showErrorcPwd').html('Passwords are not matching');
                $('#showErrorcPwd').css('color','red');
                return false;
            }
        })
    


        //validation for first name - it allows only alphabets in input field
        $(".error-fname").hide();

        let firstnameError = true;


        $("#firstName").keyup(function(){
            validateFirstname();

        function validateFirstname(){
            let firstnameValue = $("#firstName").val();
            if (firstnameValue.length === 0){
                $(".error-fname").show();
                $(".error-fname").text("First name is missing");
                firstnameError = false;
                return false;
            
            } else if (!/^[a-zA-Z]+$/.test(firstnameValue)) {
                $(".error-fname").show();
                $(".error-fname").text("First name is invalid");
                firstnameError = false;
                return false;
            } else {
                $(".error-fname").hide();
            }
            }

        })


        //validation for last name - it allows only alphabets in input field
        $(".error-lname").hide();
        let lastnameError = true;
    
        $("#lastName").keyup(function() {
            validateLastname();
    
            function validateLastname() {
                let lastnameValue = $("#lastName").val();
                if (lastnameValue.length === 0) {
                    $(".error-lname").show();
                    $(".error-lname").text("Last name is missing");
                    lastnameError = false;
                    return false;
                } else if (!/^[a-zA-Z]+$/.test(lastnameValue)) {
                    $(".error-lname").show();
                    $(".error-lname").text("Last name is invalid");
                    lastnameError = false;
                    return false;
                } else {
                    $(".error-lname").hide();
                }
            }
        });


        //validation for date of birth and age calculating 
        $("#dob").on('change', function() {
                var dateofBirth = new Date(this.value),
                    today = new Date(),
                    age = today.getFullYear() - dateofBirth.getFullYear();
                $('#age').val(age);
        });
    

        //password validation

        $('.password_required').slideUp();

        $('#password_validation').on('focus',function(){
            $('.password_required').slideDown();
        })
        $('#password_validation').on('blur',function(){
            $('.password_required').slideUp();
        })
        $('#password_validation').on('keyup',function(){

            passValue = $(this).val();
            if(passValue.match(/[a-z]/g)){
                $('.lowercase').addClass('active');
            }
            else{
                $('.lowercase').removeClass('active');
            }
            if(passValue.match(/[A-Z]/g)){
                $('.capital').addClass('active');
            }
            else{
                $('.capital').removeClass('active');
            }
            if(passValue.match(/[0-9]/g)){
                $('.number').addClass('active');
            }
            else{
                $('.number').removeClass('active');
            }
            if(passValue.match(/[!@#$%^&*]/g)){
                $('.special').addClass('active');
            }
            else{
                $('.special').removeClass('active');
            }
            if( passValue.length > 7){
                $('.charecter').addClass('active');
            }
            else{
                $('.charecter').removeClass('active');
            }
    })
    
        //email validation
        $("#email").keyup(function(){
            var email=$('#email').val();
            var reg=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (reg.test(email)){
                $(".invalid_email").html("") 
            }
            else{
                $(".invalid_email").html("Invalid Email Id")
            }
        })


        //district and state

        var districts = {
            kerala: ['palakkad','malappuram','thrissur','ernankulam','kollam'],
            punjab: ['amritsar', 'ludhiana','Bathinda','Faridkot',' Gurdaspur'],
            haryana: ['gurugram', 'faridabad','Sonipat','Rohtak','Charkhi Dadri'],
            karnataka: ['bangalore', 'mysore','Belagavi','Kolara',' Udupi'],
            delhi: ['North', 'North- East','New- Delhi',' South- West','Central'],
        };
        
        $("#state").on("change", function() {
            var selectedState = $(this).val();
            
            var districtDropdown = $("#district");

            districtDropdown.empty(); 

            if (selectedState in districts) {
                //.each used for iteration of arrays and objects etc
                $.each(districts[selectedState], function(index, district) {
                    districtDropdown.append($("<option></option>").val(district).html(district))
                })
            } else {
                districtDropdown.append(
                    $("<option></option>").val("").html("")
                )
            }
        })
        
        //username validation

        $(".error-username").hide();
        let erroruserName = true;

        $("#Username").keyup(function(){
            validateUsername();

            function validateUsername(){
                let usernameValue = $("#Username").val();
                if (usernameValue.length === 0){
                    $(".error-username").show();
                    $(".error-username").text("username is missing");
                    erroruserName =false;
                    return false;
                }else {
                    $(".error-username").hide();
                    erroruserName = true;
                }
            }
        })

        $("#submit").click(function(){
            if((firstnameValue.length > 0 ) && (lastnameValueValue.length > 0 )  (passValue.match(/[a-z]/g)) && (passValue.match(/[A-Z]/g)) && (passValue.match(/[0-9]/g))
            && (passValue.match(/[!@#$%^&*]/g)) && (passValue.length>7) && (cpwd == pwd) && (reg.test(email)) && (usernameValue.length > 0))
            {            
                window.location.pathname="/login.html";
            }
            else{
                return false;
            } 
            
        
        }); 
})

    
        


