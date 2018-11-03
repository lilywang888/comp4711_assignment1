
function displayUsers(data){
    //alert(data);
    var item = JSON.parse(data);
    //alert(item);
    var strHTML = "<table class='users_table'>" +
        "<tr><th>UserName</th><th>PASSWORD</th><th>LEVEL</th><th>FirstName</th>" +
        "<th>LastName</th><th>Email</th><th>PhoneNo</th><th>Edit/Delete</th></tr>";

    for(var i in item) {
        
        strHTML += 
            "<tr><td>" + item[i].user_name + "</td><td>" + item[i].password + "</td>" + 
            "<td>" + item[i].user_level+ "</td><td>" + item[i].first_name + "</td>" +
            "<td>" + item[i].last_name + "</td><td>" + item[i].email + "</td>" +
            "<td>" + item[i].phone_no + "</td>" +
            //"<td><span class='users_edit_delete' onclick='displayAddUserArea()'>Edit</span>/" +
            "<td><span class='users_edit_delete' onclick='displayEditUserArea(\""  +
                    item[i].user_name +"\",\"" +
                    item[i].password +"\",\"" +
                    item[i].user_level +"\",\"" +
                    item[i].first_name +"\",\"" +
                    item[i].last_name +"\",\"" +
                    item[i].email +"\",\"" +
                    item[i].phone_no +"\"" +
                    ")'>Edit</span>/" +
            "<span class='users_edit_delete' onclick='deleteUser(\"" + item[i].user_name + "\")'>Delete</span></td></tr>";
            //"<td><a href='edituser.php?id=$id'>Edit</a> <a href='deleteuser.php?id=$id'>Delete</a></td></tr>";
    }
    strHTML += "</table>";
    $(".users_area").append(strHTML);
}

function displayAddUserArea(){
    var usersHTML = "<table class='users_table'>" +
            "<tr><td><label>User Name:</label></td><td><input type='text' id='user_name' name='user_name'></td></tr>" +
            "<tr><td><label>Password:</label></td><td><input type='text' id='password' name='password'></td></tr>" +
            "<tr><td><label>User Level:</label></td><td><input type='text' id='user_level' name='user_level'></td></tr>" +
            "<tr><td><label>First Name:</label></td><td><input type='text' id='first_name' name='first_name'></td></tr>" +
            "<tr><td><label>Last Name:</label></td><td><input type='text' id='last_name' name='last_name'></td></tr>" +
            "<tr><td><label>Email:</label></td><td><input type='text' id='email' name='email'></td></tr>" +
            "<tr><td><label>Phone #:</label></td><td><input type='text' id='phone_no' name='phone_no'></td></tr>" +
            "<tr><td colspan='2'>";
    usersHTML += 
        "<div class='users_button'>" +
            "<span id='users_save_button' onclick='insertUser()' > Save User </span>" +
            "<span id='users_save_button' onclick='insertCancel()' > Cancel </span>" +
        "</div>";
    
    usersHTML +="</td></tr></table>";
    
    $(".users_add_area").append(usersHTML);
}

function displayEditUserArea(user_name, password, user_level, first_name, last_name, email, phone_no){
    //alert(user_name + password + user_level + first_name + last_name + email + phone_no);
    var usersHTML = "<table class='users_table'>" +
            "<tr><td><label>User Name:</label></td><td><input type='text' id='user_name' name='user_name' value='" + user_name + "'></td></tr>" +
            "<tr><td><label>Password:</label></td><td><input type='text' id='password' name='password' value='" + password + "'></td></tr>" +
            "<tr><td><label>User Level:</label></td><td><input type='text' id='user_level' name='user_level' value='" + user_level + "'></td></tr>" +
            "<tr><td><label>First Name:</label></td><td><input type='text' id='first_name' name='first_name' value='" + first_name + "'></td></tr>" +
            "<tr><td><label>Last Name:</label></td><td><input type='text' id='last_name' name='last_name' value='" + last_name + "'></td></tr>" +
            "<tr><td><label>Email:</label></td><td><input type='text' id='email' name='email' value='" + email + "'></td></tr>" +
            "<tr><td><label>Phone #:</label></td><td><input type='text' id='phone_no' name='phone_no' value='" + phone_no + "'></td></tr>" +
            "<tr><td colspan='2'>";
    usersHTML += 
        "<div class='users_button'>" +
            "<span id='users_save_button' onclick='updateUser(\"" + user_name + "\")' > Save User </span>" +
            "<span id='users_save_button' onclick='updateCancel()' > Cancel </span>" +
        "</div>";
    
    usersHTML += "</td></tr></table>";
    
    $(".users_add_area").append(usersHTML);
    
}

