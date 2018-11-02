function onload(){
    //alert('get questions');
    getQuestions();
}

function getQuestions(){
    $.ajax({
        type:"POST",
        url:"model/admin_model.php",
        data:{action:"get_all_questions"},
        error: function() { alert("Jquery Ajax request error!!!"); },
        success:function(data){
           displayQuestions(data);
        }
    }); 
}

function insertCancel(){
    window.location.reload();
}

function updateCancel(){
    window.location.reload();
}

function deleteQuestion(id){
    //alert(id);
    var returnValue = window.confirm("Delete can not rollback! Are you sure?");
    if (!returnValue) {
        return;
        //alert('deleted');
    }
    $.ajax({
        type:"POST",
        url:"model/admin_model.php",
        data:{id:id, action:"delete_question"},
        error: function() { alert("Jquery Ajax request error!!!"); },
        success:function(){
            //alert(data);
            window.location.reload();
        }
    });
}

function updateQuestion(){
    var id = $("#id").val();
    var question = $("#question").val();
    var quest_type = $("#quest_type").val();
    var answer1 = $("#answer1").val();
    var answer2 = $("#answer2").val();
    var answer3 = $("#answer3").val();
    var answer4 = $("#answer4").val();
    var correct_answer = $("#correct_answer").val();
    
    if(question.trim()===""){
        alert("Please input a question!!!");
        return;
    }
    if(correct_answer.trim()===""){
        alert("Please input a correct answer!!!");
        return;
    }

    var question ='{"id":"' + id +
              '","question":"' + question +
              '","quest_type":"' + quest_type +
              '","answer1":"' + answer1 +
              '","answer2":"' + answer2 +
              '","answer3":"' + answer3 +
              '","answer4":"' + answer4 + 
              '","correct_answer":"' + correct_answer + '"}';
    //alert(question);
    
    $.ajax({
        type:"POST",
        url:"model/admin_model.php",
        data:{data:question,action:"update_question"},
        error: function() { alert("Jquery Ajax request error!!!"); },
        success:function(){
           //alert( "Data Saved: " + data );
           window.location.reload();
        }
    });
}

function insertQuestion(){
    var question = $("#question").val();
    var quest_type = $("#quest_type").val();
    var answer1 = $("#answer1").val();
    var answer2 = $("#answer2").val();
    var answer3 = $("#answer3").val();
    var answer4 = $("#answer4").val();
    var correct_answer = $("#correct_answer").val();
    
    if(question.trim()===""){
        alert("Please input a question!!!");
        return;
    }
    if(correct_answer.trim()===""){
        alert("Please input a correct answer!!!");
        return;
    }

    var question ='{' +
              '"question":"' + question +
              '","quest_type":"' + quest_type +
              '","answer1":"' + answer1 +
              '","answer2":"' + answer2 +
              '","answer3":"' + answer3 +
              '","answer4":"' + answer4 + 
              '","correct_answer":"' + correct_answer + '"}';
    alert(question);
    
    $.ajax({
        type:"POST",
        url:"model/admin_model.php",
        data:{data:question,action:"add_question"},
        error: function() { alert("Jquery Ajax request error!!!"); },
        success:function(data){
           alert( "Data Saved: " + data );
           window.location.reload();
        }
    });
}

