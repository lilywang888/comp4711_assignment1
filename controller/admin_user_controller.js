function onload(){
    //alert('get users');
    getUsers();
}

function getUsers(){
    $.ajax({
        type:"POST",
        url:"model/admin_user_model.php",
        data:{action:"get_all_users"},
        error: function() { alert("Jquery Ajax request error!!!"); },
        success:function(data){
           displayUsers(data);
        }
    }); 
}

function isIntNum(val){
    var regPos = /^[0-9]+.?[0-9]*/;     // not negative int
    //var regNeg = /^\-[1-9][0-9]*$/;   // negative int
    //if(regPos.test(val) || regNeg.test(val)){
    if(regPos.test(val)){
        return true;
    }else{
        return false;
    }
}

function updateCancel(){
    window.location.reload();
}

function updateUser(old_user_name){
    
    var user_name = $("#user_name").val();
    var password = $("#password").val();
    var user_level = $("#user_level").val();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var phone_no = $("#phone_no").val();
    
    //alert(user_name + password + user_level + first_name + last_name + email + phone_no);
    
    if(user_name.trim()===""){
        alert("Please input a User Name!!!");
        return;
    }
    if (!isIntNum(user_level)){
        alert("Please input a Number!!!");
        return;
    }
    
    var user ='{"user_name":"' + user_name +
              '","password":"' + password +
              '","user_level":"' + user_level +
              '","first_name":"' + first_name +
              '","last_name":"' + last_name +
              '","email":"' + email +
              '","phone_no":"' + phone_no + 
              '","old_user_name":"' + old_user_name + '"}';
    //alert(user);
    
    $.ajax({
        type:"POST",
        url:"model/admin_user_model.php",
        data:{data:user,action:"update_user"},
        error: function() { alert("Jquery Ajax request error!!!"); },
        success:function(){
           //alert( "Data Saved: " + data );
           window.location.reload();
        }
    });
}

function deleteUser(user_name){
    //alert(user_name);
    var returnValue = window.confirm("Delete can not rollback! Are you sure?");
    if (!returnValue) {
        return;
        //alert('deleted');
    }
    $.ajax({
        type:"POST",
        url:"model/admin_user_model.php",
        data:{user_name:user_name, action:"delete_users"},
        error: function() { alert("Jquery Ajax request error!!!"); },
        success:function(){
            //alert(data);
            window.location.reload();
        }
    });
}

function insertCancel(){
    window.location.reload();
}

function insertUser(){
    var user_name = $("#user_name").val();
    var password = $("#password").val();
    var user_level = $("#user_level").val();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var phone_no = $("#phone_no").val();
    
    if(user_name.trim()===""){
        alert("Please input a User Name!!!");
        return;
    }
    if (!isIntNum(user_level)){
        alert("Please input a Number!!!");
        return;
    }

    var user ='{"user_name":"' + user_name +
              '","password":"' + password +
              '","user_level":"' + user_level +
              '","first_name":"' + first_name +
              '","last_name":"' + last_name +
              '","email":"' + email +
              '","phone_no":"' + phone_no + '"}';
    //alert(user);
    
    $.ajax({
        type:"POST",
        url:"model/admin_user_model.php",
        data:{data:user,action:"add_user"},
        error: function() { alert("Jquery Ajax request error!!!"); },
        success:function(data){
           //alert( "Data Saved: " + data );
           window.location.reload();
        }
    });
}


