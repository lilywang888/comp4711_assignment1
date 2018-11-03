<?php
    //require "dbconfig.php";
    $con = mysqli_connect("localhost:3306","root","","comp4711");
    if (!$con){
        die('Could not connect to Database:' . mysqli_connect_error());
    }
    mysqli_select_db($con,"comp4711");
    
    $action= $_POST['action'];
    if ($action == 'get_all_scores'){
        //echo "add";
        get_all_scores();  
    }
    
    
    function get_all_scores(){
        $sql="SELECT u.user_name, u.first_name, u.last_name, s.start_time, s.end_time, s.score FROM users_scores s, users u WHERE u.user_name=s.user_name ORDER BY s.score DESC;";

        global $con;
        $result = mysqli_query($con,$sql);
        //if (!$result) {
        //    die("false");
        //}
      
        $rows = array();
      
        while ($row = mysqli_fetch_assoc($result)){
           $rows[] = $row; 
        }
        if ($rows){
            echo json_encode($rows);
        } else {
            echo mysqli_error();
        }
    }
    
?>
