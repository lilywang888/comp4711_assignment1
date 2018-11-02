function login_check(){
    
    var uname = $("#uname").val();
    var upwd = $("#upassword").val();
    
    window.localStorage.setItem("verified",false);

    if(uname.trim()===""){
        alert("Please input a User Name!!!");
        return;
    }
    if(upwd.trim()===""){
        alert("Please input a Password!!!");
        return;
    }

    verifiedUser(uname,upwd);
}

function verifiedUser(user_name, password){
    $.ajax({
        type:"POST",
        url:"model/index_model.php",
        data:{user_name:user_name, password:password, action:"get_a_user"},
        error: function() { alert("Jquery Ajax request error!!!"); },
        success:function(data){
            //alert(data);
            if (data == 0) {
                showAdminPage();
            } else if (data == 1){
                showUserPage();
            }
        }
    });
}

function showAdminPage(){
    var uname = $("#uname").val();
    window.localStorage.setItem("user_name",uname);
    window.localStorage.setItem("verified",true);
    window.location.href="admin.html";
}

function showUserPage(){
    var uname = $("#uname").val();
    window.localStorage.setItem("user_name",uname);
    window.localStorage.setItem("verified",true);
    window.location.href="user_quiz.html";
}
