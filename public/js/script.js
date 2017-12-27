//jquery validtion
var formValid ={
  title: false,
  email: false,
  password: false,
  address: false,
  mobile: false,
  city: false,
  school: false,
  bio: false

};

function checkValidation(){
  if(formValid.title && formValid.address && 
    formValid.mobile && formValid.city && 
    formValid.school && formValid.bio){
    $('#apply').removeAttr('disabled');
   
  } else {
    $('#apply').attr('disabled', true);
   
  }
};

//signup validation check
function checkValid(){
 if(formValid.email && formValid.password){
  $('#submitS').removeAttr('disabled');
 } else{
  $('#submitS').attr('disabled', true);
 }
};



//======================
//Application section 
//======================

//title

$('#title').on('input', function(){
   var title = $(this).val();

function msg(body){
  $('#title-error').text(body).show();
};

function hide(){
  $('#title-error').hide();
};

   if(title.length < 1){
    msg('this field is required');
    formValid.title = false;
    checkValidation()
   } else{
    hide();
    formValid.title= true;
    checkValidation()
    var testExp = new RegExp(/^[a-z\sA-Z0-9]+$/);
     if(!testExp.test(title)){
      msg('Must not include any special characters');
      formValid.title = false;
      checkValidation();
     } else{
      hide();
      formValid.title = true;
      checkValidation()
      if(title.length < 3 || title.length > 15){
        msg('Must be at least three characters');
        formValid.title = false;
        checkValidation()
      } else {
        hide();
        formValid.title = true;
        checkValidation()
      }
     }
   }
});


//description


$('#bio').on('input', function(){
  var bio = $(this).val();

function msg(body){
 $('#desc-error').text(body).show();
};

function hide(){
 $('#desc-error').hide();
};

  if(bio.length < 1){
   msg('this field is required');
   formValid.bio = false;
   checkValidation()
  } else{
   hide();
   formValid.bio = true;
   checkValidation()
   var testExp = new RegExp(/^[a-z\sA-Z0-9]+$/);
    if(!testExp.test(bio)){
     msg('Must not include any special characters');
     formValid.bio = false;
     checkValidation();
    } else{
     hide();
     formValid.bio = true;
     checkValidation()
     if(bio.length < 100 || bio.length > 500){
       msg('Must be at least fifty characters');
       formValid.bio = false;
       checkValidation()
     } else {
       hide();
       formValid.desc = true;
       checkValidation()
     }
    }
  }
});

//address

$('#address').on('input', function(){
  var address = $(this).val();

function msg(body){
 $('#address-error').text(body).show();
};

function hide(){
 $('#address-error').hide();
};

  if(address.length < 1){
   msg('this field is required');
   formValid.address = false;
   checkValidation()
  } else{
   hide();
   formValid.address = true;
   checkValidation()
   var testExp = new RegExp(/^[a-z\sA-Z0-9]+$/);
    if(!testExp.test(address)){
     msg('Must not include any special characters');
     formValid.address = false;
     checkValidation();
    } else{
     hide();
     formValid.address = true;
     checkValidation()
     if(address.length < 3 || address.length > 15){
       msg('Must be at least three characters');
       formValid.address = false;
       checkValidation()
     } else {
       hide();
       formValid.address = true;
       checkValidation()
     }
    }
  }
});

//phone number


$('#mobile').on('input', function(){
  var mobile = $(this).val();

function msg(body){
 $('#mobile-error').text(body).show();
};

function hide(){
 $('#mobile-error').hide();
};

  if(mobile.length < 1){
   msg('this field is required');
   formValid.mobile = false;
   checkValidation()
  } else{
   hide();
   formValid.mobile = true;
   checkValidation()
   var testExp = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
    if(!testExp.test(mobile)){
     msg('Must not include any special characters');
     formValid.mobile = false;
     checkValidation();
    } else{
     hide();
     formValid.mobile = true;
     checkValidation()
     if(address.mobile < 3 || mobile.length > 15){
       msg('Must be at least three characters');
       formValid.mobile = false;
       checkValidation()
     } else {
       hide();
       formValid.mobile = true;
       checkValidation()
     }
    }
  }
});

//city

$('#city').on('input', function(){
  var city = $(this).val();

function msg(body){
 $('#city-error').text(body).show();
};

function hide(){
 $('#city-error').hide();
};

  if(city.length < 1){
   msg('this field is required');
   formValid.city = false;
   checkValidation()
  } else{
   hide();
   formValid.city = true;
   checkValidation()
   var testExp = new RegExp(/^[a-z\sA-Z0-9]+$/);
    if(!testExp.test(city)){
     msg('Must not include any special characters');
     formValid.city = false;
     checkValidation();
    } else{
     hide();
     formValid.city = true;
     checkValidation()
     if(city.length < 3 || address.length > 15){
       msg('Must be at least three characters');
       formValid.city = false;
       checkValidation()
     } else {
       hide();
       formValid.city = true;
       checkValidation()
     }
    }
  }
});

//school


$('#school').on('input', function(){
  var school = $(this).val();

function msg(body){
 $('#school-error').text(body).show();
};

function hide(){
 $('#school-error').hide();
};

  if(school.length < 1){
   msg('this field is required');
   formValid.school = false;
   checkValidation()
  } else{
   hide();
   formValid.school = true;
   checkValidation()
   var testExp = new RegExp(/^[a-z\sA-Z0-9]+$/);
    if(!testExp.test(school)){
     msg('Must not include any special characters');
     formValid.school = false;
     checkValidation();
    } else{
     hide();
     formValid.school = true;
     checkValidation()
     if(school.length < 3 || school.length > 15){
       msg('Must be at least three characters');
       formValid.school = false;
       checkValidation()
     } else {
       hide();
       formValid.school = true;
       checkValidation()
     }
    }
  }
});

//==========================
//Signup validation section
//==========================
$('#email').on('input', function(){
  var email = $(this).val();

function msg(body){
 $('#email-error').text(body).show();
};

function hide(){
 $('#email-error').hide();
};

  if(email.length < 1){
   msg('this field is required');
   formValid.email = false;
   checkValid()
  } else{
   hide();
   formValid.email = true;
   checkValid()
   var testExp = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
    if(!testExp.test(email)){
     msg('Must be a valid email');
     formValid.email = false;
     checkValid();
    } else{
     hide();
     formValid.email = true;
     checkValid()
     if(email.length < 3 || email.length > 30){
       msg('Must be at least three characters');
       formValid.email = false;
       checkValid()
     } else {
       hide();
       formValid.email = true;
       checkValid()
     }
    }
  }
});

//password


$('#password').on('input', function(){
   var password = $(this).val();

function msg(body){
 $('#password-error').text(body).show();
};

function hide(){
 $('#password-error').hide();
};

  if(password.length < 1){
   msg('this field is required');
   formValid.password = false;
   checkValid()
  } else{
   hide();
   formValid.password = true;
   checkValid()
   var testExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
    if(!testExp.test(password)){
     msg('Password should have a minimum of 8 characters, at least one letter,one number and special character');
     formValid.password = false;
     checkValid();
    } else{
     hide();
     formValid.password = true;
     checkValid()
     if(password.length < 3 || password.length > 30){
       msg('Must be at least three characters');
       formValid.email = false;
       checkValid()
     } else {
       hide();
       formValid.password = true;
       checkValid()
     }
    }
  }
});

//Confirm password
$(function () {
  $("#submitS").click(function () {
      var password = $("#password").val();
      var confirmPassword = $("#passwordRe").val();
      if (password != confirmPassword) {
         $('#passwordRe-error').show();
          return false;
      }
      $('#passwordRe-error').hide();
      return true;
  });
});






















     