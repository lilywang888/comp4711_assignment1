<?php
    //require "dbconfig.php";
    $con = mysqli_connect("localhost:3306","root","","comp4711");
    
    if (!$con){
        die('Could not connect to Database:' . mysqli_connect_error());
    }
    mysqli_select_db($con,"comp4711");
    
    $action= $_POST['action'];
    if ($action == 'get_a_user') { 
        get_a_user();
    }
    
    function get_a_user(){
        if (!isset($_POST['user_name'])) {
            die('no user name!');
        }
        if (!isset($_POST['password'])) {
            die('password can not be null!');
        }
        
        $user_name=$_POST['user_name'];
        $password=$_POST['password'];
        
        $sql="SELECT user_level FROM users WHERE user_name='{$user_name}' ".
            " AND password='{$password}';";
        //echo $sql;
        global $con;
        $results = mysqli_query($con,$sql);
        if (!$results) {
            echo "-1";
        } else {
            $result = mysqli_fetch_assoc($results);
            echo $result["user_level"];
        }
    }
       
?>