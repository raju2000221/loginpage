$(document).ready(function () {
    $("#show_p").click(function () {
        showpass();
    })
    $("#email").keyup(function () {
        email_validation();
    });
    $("#password").keyup(function () {
        pass_validation();
    });



});


function email_validation() {
    var email = $("#email").val();
    console.log(email)
    var email_pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/;
    var val_email_pass1 = $(".val_email_pass1")
    var val_email_pass1_1 = $(".val_email_pass1.1")
    
     if (email_pattern.test(email) == false) {
        e_validation();
           
        val_email_pass1.find('.check').addClass("x").removeClass("check")

        val_email_pass1.addClass("invalid").removeClass("valid");


    }
     if (email_pattern.test(email)) {
        e_validation();
        val_email_pass1.find('.x').removeClass('x').addClass('check');
        val_email_pass1.removeClass("invalid").addClass("valid"); 
        var val_email_pass = $(".style_email")
        val_email_pass.delay(1000).fadeOut(100);
    }
    if(email == ''){
        var val_email_pass = $(".style_email")
        val_email_pass.delay(100).fadeOut(200);
    }

   
}
function pass_validation() {
    var password = $("#password").val();
    var pass_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])/;
    var val_email_pass3 = $(".val_email_pass3")
    var val_email_pass4 = $(".val_email_pass4")
    var val_email_pass5 = $(".val_email_pass5")
    var val_email_pass6 = $(".val_email_pass6")
    p_validation();
     if ( pass_pattern.test(password) == true) {
        p_validation();
        val_email_pass3.find('.x').removeClass('x').addClass('check');
        val_email_pass3.removeClass("invalid").addClass("valid");
      

    }
     if ( pass_pattern.test(password) == false ) {
        p_validation()
        val_email_pass3.find('.check').removeClass('check').addClass('x');
        val_email_pass3.removeClass("valid").addClass("invalid");
    }
     if (password.length >= 8 ) {
        p_validation()
         val_email_pass4.find('.x').removeClass('x').addClass('check');
        val_email_pass4.removeClass("invalid").addClass("valid");

    }
     if (password.length < 8 ) {
        p_validation()
        val_email_pass4.find('.check').removeClass('check').addClass('x');
        val_email_pass4.removeClass("valid").addClass("invalid");

    }

    if (password.length < 16) {
        p_validation()
        val_email_pass5.find('.x').removeClass('x').addClass('check');
        val_email_pass5.removeClass("invalid").addClass("valid");

    }
    if (password.length > 16) {
        p_validation()
        val_email_pass5.find('.check').removeClass('check').addClass('x');
        val_email_pass5.removeClass("valid").addClass("invalid");

    }
    if(password == '' || password.length >= 8 && password.length <= 16 && pass_pattern.test(password)){
        var val_email_pass = $(".style_pass")
        val_email_pass.delay(500).fadeOut(200);
    }
    if(password.length >= 8 && password.length <= 16 && pass_pattern.test(password)){
        btn_enable();
    }
    else{
    var btn = $("#btn");
    btn.removeClass("btn_enable").addClass("btn");
    }
    
   
}









function btn_enable(){
    var btn = $("#btn");
    btn.prop('disabled', false);
    btn.removeClass("btn").addClass("btn_enable");
    
}



function e_validation() {
    var val_email_pass = $(".style_email")
    
    val_email_pass.fadeIn(200);

}
function p_validation() {
    var val_email_pass = $(".style_pass")
    
    val_email_pass.fadeIn(200);

}



// function alart(message) {
//     var alart = $("#alart");
//     alart.text(message);
//     alart.fadeIn(200).delay(2000).fadeOut(200);
// }
// function success(message) {
//     var success = $("#success");
//     success.text(message);
//     success.fadeIn(200).delay(2000).fadeOut(200);
// }

function showpass() {
    var password = $("#password");
    var currentType = password.attr("type");
    password.attr("type", currentType === "password" ? "text" : "password");
}

