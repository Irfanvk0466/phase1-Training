$(document).ready(function () {

    let validateEmail = "";
    let passwordValue = "";
    let regExp=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    //email validation

    $("#email").keyup(function(){
         validateEmail = $('#email').val();
        
        if (regExp.test(validateEmail)){
            $(".invalid_email").html("") 
        }
        else{
            $(".invalid_email").html("Invalid Email Id")
        }
    })

    //password validation

    $('.password_required').slideUp();
    $('#password_validation').on('focus',function(){
        $('.password_required').slideDown();
    })
    $('#password_validation').on('blur',function(){
        $('.password_required').slideUp();
    })
    $('#password_validation').on('keyup',function(){
        passwordValue = $(this).val();

        if(passwordValue.match(/[a-z]/g)){
            $('.lowercase').addClass('active');
        }
        else{
            $('.lowercase').removeClass('active');
        }
        if(passwordValue.match(/[A-Z]/g)){
            $('.capital').addClass('active');
        }
        else{
            $('.capital').removeClass('active');
        }
        if(passwordValue.match(/[0-9]/g)){
            $('.number').addClass('active');
        }
        else{
            $('.number').removeClass('active');
        }
        if(passwordValue.match(/[!@#$%^&*]/g)){
            $('.special').addClass('active');
        }
        else{
            $('.special').removeClass('active');
        }
        if( passwordValue.length > 7){
            $('.charecter').addClass('active');
        }
        else{
            $('.charecter').removeClass('active');
        }
    })

    //submit button

    $("#button").click(function () {
       

        if(regExp.test(validateEmail) && (passwordValue.match(/[a-z]/g)) && (passwordValue.match(/[A-Z]/g)) && (passwordValue.match(/[0-9]/g))
        && (passwordValue.match(/[!@#$%^&*]/g)) && (passwordValue.length>7) )
        {            
            window.location.pathname="/welcome.html";
        }
        else{
            return false;
        } 

    })


    //register now button
    $("#register").click(function() {
        window.location.pathname="/register.html";
    });

    })





