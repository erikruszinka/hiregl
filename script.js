$(document).ready(function(){
    $("#logbtn").click(function(){
        var usern=$("#user").val();
        var password=$("#password").val();
        var error=false;
        var userNameValue=$("#user").val();
        var userPasswordValue=$("#password").val();
        if(usern.length<4)
        {
            $("#err").html("Invalid Username or Password. Please try again.");
            error=true;
        }
        else
        {
            $("#err").html("");
        }
        if(password.length<4){
            $("#err").html("Invalid Username or Password. Please try again.");
            error=true;
        }
        else
        {
            $("#err").html("");
        }
        if(error==false){
             $.ajax({
        url:'http://akademiasovy.ddns.net:8081/api/auth/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify ({
        "userName": userNameValue,
        "password": userPasswordValue,
    }),
        success: function(data){
            window.location.href='interview.html';
        },
            error: function(){
                
            }
    });
        }
    })
})