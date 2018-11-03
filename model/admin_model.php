<?php

$con = mysqli_connect("localhost:3306","root","","comp4711");
if (!$con){
  die('Could not connect to Database:' . mysqli_connect_error());
}
//echo "database connected    ";
mysqli_select_db($con,"comp4711"); 
  
$action= $_POST['action'];
if ($action == 'get_all_questions'){
    get_all_questions();
} elseif ($action == 'update_question') {
    update_question();
} elseif ($action == 'add_question') {
    add_question();
} elseif ($action == 'delete_question') {
    delete_question();
}
  
mysqli_close($con);  
  
function get_all_questions(){
    $sql="SELECT * FROM quiz ORDER BY id;";
      
    global $con;
    $result = mysqli_query($con,$sql);
      
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

function delete_question() {
    $id =  $_POST['id'];
    //echo $id;
    $sql = "DELETE FROM quiz WHERE id=".$id.";";
    //echo $sql;
    global $con;
    mysqli_query($con,$sql);
}

function add_question(){
        if (!isset($_POST['data'])) {
            die('no data to save!');
        }
        //echo "received data!    "; 
        $question_arr = json_decode($_POST['data'], true);  

        $question = $question_arr['question'];
        $quest_type = $question_arr['quest_type'];
        $answer1 = $question_arr['answer1'];
        $answer2 = $question_arr['answer2'];
        $answer3 = $question_arr['answer3'];
        $answer4 = $question_arr['answer4'];
        $correct_answer = $question_arr['correct_answer'];

        echo $question.$quest_type.$answer1.$answer2.$answer3.$answer4.$correct_answer ;
        $sql="INSERT INTO quiz (question, quest_type, answer1, answer2, answer3, answer4, correct_answer) " .
          "VALUES('".$question."','".$quest_type."',$answer1,'".$answer2."','".$answer3."','" .$answer4."','".$correct_answer."')";
        //echo $sql;
      
        global $con;
        mysqli_query($con,$sql);
}

function update_question(){
        if (!isset($_POST['data'])) {
            die('no data to save!');
        }
        //echo "received data!    "; 
        $question_arr = json_decode($_POST['data'], true);  

        $id = $question_arr['id'];
        $question = $question_arr['question'];
        $quest_type = $question_arr['quest_type'];
        $answer1 = $question_arr['answer1'];
        $answer2 = $question_arr['answer2'];
        $answer3 = $question_arr['answer3'];
        $answer4 = $question_arr['answer4'];
        $correct_answer = $question_arr['correct_answer'];
        
        //echo $id.$question.$quest_type.$answer1.$answer2.$answer3.$answer4.$correct_answer ;
        $sql="UPDATE quiz SET ".
                "question='{$question}', " .
                "quest_type='{$quest_type}', " .
                "answer1='{$answer1}', " .
                "answer2='{$answer2}', " .
                "answer3='{$answer3}', " .
                "answer4='{$answer4}', " .
                "correct_answer='{$correct_answer}' " .
              "WHERE id={$id};";
        
        //echo $sql;
        global $con;
        mysqli_query($con,$sql);

    }
?>