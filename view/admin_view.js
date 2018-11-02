function displayQuestions(data){
    //alert(data);
    var item = JSON.parse(data);
    //alert(item);
    var strHTML = "<table class='questions_table'>" +
        "<tr><th>id</th><th>Question</th><th>Difficulty&nbsp;Level</th>" + 
        "<th>Option1</th><th>Option2</th><th>Option3</th><th>Option4</th>" + 
        "<th>Correct&nbsp;Answer</th><th>Edit/Delete</th></tr>";

    for(var i in item) {
        
        strHTML += 
            "<tr><td>" + item[i].id + 
            "</td><td>" + item[i].question + 
            "</td><td>" + item[i].quest_type + 
            "</td><td>" + item[i].answer1+ 
            "</td><td>" + item[i].answer2 + 
            "</td><td>" + item[i].answer3 + 
            "</td><td>" + item[i].answer4 + 
            "</td><td>" + item[i].correct_answer + "</td>" +
            "<td><span class='adminquestion_edit_delete' onclick='displayEditQuestionArea(\""  +
                    item[i].id +"\",\"" +
                    item[i].question +"\",\"" +
                    item[i].quest_type +"\",\"" +
                    item[i].answer1 +"\",\"" +
                    item[i].answer2 +"\",\"" +
                    item[i].answer3 +"\",\"" +
                    item[i].answer4 +"\",\"" +
                    item[i].correct_answer +"\"" +
                    ")'>Edit</span>/" +
            "<span class='adminquestion_edit_delete' onclick='deleteQuestion(\"" + item[i].id + "\")'>Delete</span></td></tr>";
    }
    strHTML += "</table>";
    $(".adminquestion_area").append(strHTML);
}

function displayAddQuestionArea(){
    $("#admin_addquestion_button").attr('disabled',true);
    $("#admin_addquestion_button").removeAttr("onclick");
    var usersHTML = "<table class='admin_addquestions_table'>" +
            "<tr><td><label>Question:</label></td><td><input type='text' id='question' name='question'></td></tr>" +
            "<tr><td><label>Difficulty Level:</label></td><td><input type='text' id='quest_type' name='quest_type'></td></tr>" +
            "<tr><td><label>Option1:</label></td><td><input type='text' id='answer1' name='answer1'></td></tr>" +
            "<tr><td><label>Option2:</label></td><td><input type='text' id='answer2' name='answer2'></td></tr>" +
            "<tr><td><label>Option3:</label></td><td><input type='text' id='answer3' name='answer3'></td></tr>" +
            "<tr><td><label>Option4:</label></td><td><input type='text' id='answer4' name='answer4'></td></tr>" +
            "<tr><td><label>Correct Answer:</label></td><td><input type='text' id='correct_answer' name='correct_answer'></td></tr>" +
            "<tr><td colspan='2'>";
    usersHTML += 
        "<div class='users_button'>" +
            "<span id='adminquestion_save_button' onclick='insertQuestion()' > Save Question </span>" +
            "<span id='adminquestion_save_button' onclick='insertCancel()' > Cancel </span>" +
        "</div>";
    
    usersHTML +="</td></tr></table>";
    
    $(".admin_addquestion_area").append(usersHTML);
}

function displayEditQuestionArea(id, question, quest_type, answer1, answer2, 
    answer3, answer4, correct_answer){
    //alert(id + question + quest_type + answer1 + answer2 + answer3 + answer4 + correct_answer);
    $("#adminquestion_edit_delete").attr('disabled',true);
    $(".adminquestion_edit_delete").removeAttr("onclick");
    var usersHTML = "<table class='admin_editquestions_table'>" +
            "<tr><td><label>ID:</label></td><td><input disabled='disabled' type='text' id='id' name='id' value='" + id + "'></td></tr>" +
            "<tr><td><label>Question:</label></td><td><input type='text' id='question' name='question' value='" + question + "'></td></tr>" +
            "<tr><td><label>Difficulty Level:</label></td><td><input type='text' id='quest_type' name='quest_type' value='" + quest_type + "'></td></tr>" +
            "<tr><td><label>Option1:</label></td><td><input type='text' id='answer1' name='answer1' value='" + answer1 + "'></td></tr>" +
            "<tr><td><label>Option2:</label></td><td><input type='text' id='answer2' name='answer2' value='" + answer2 + "'></td></tr>" +
            "<tr><td><label>Option3:</label></td><td><input type='text' id='answer3' name='answer3' value='" + answer3 + "'></td></tr>" +
            "<tr><td><label>Option4:</label></td><td><input type='text' id='answer4' name='answer4' value='" + answer4 + "'></td></tr>" +
            "<tr><td><label>Correct Answer:</label></td><td><input type='text' id='correct_answer' name='correct_answer' value='" + correct_answer + "'></td></tr>" +
            "<tr><td colspan='2'>";
    usersHTML += 
        "<div class='users_button'>" +
            "<span id='adminquestion_save_button' onclick='updateQuestion()' > Save User </span>" +
            "<span id='adminquestion_save_button' onclick='updateCancel()' > Cancel </span>" +
        "</div>";
    
    usersHTML += "</td></tr></table>";
    
    $(".admin_editquestion_area").append(usersHTML);
}

