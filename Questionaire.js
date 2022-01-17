
/*Tempoary Database */
var Database = {

    questionFirst: ["Have you smoked cigarettes, or do you still smoke?"],

    firstValues: [1, 1, 0],
    
    questionStart: ["Have you been exposed to dust for a long time?", "Have you got any new moles or a change in an existing mole?", "Do you have trouble breathing when you exercise?",
    "Do you have trouble urinating?", "Do you cough mucus up?"],

    startValues: [[1, 1, 0], [0, 1, 1], [1, 1, 0], [0, 1, 1], [1, 1, 0]],

    questionsCopd: ["Have you ever had a respiratory illnesses in your childhood?", "Does your family have a history of respiratory diseases?", 
    "Is your conditions affecting your quality of life?", "Do you use any kind of medicine including inhalers?", "Do you experience hoarseness?"],
    
    copdValues: [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 0]],

    questionsCancer: ["Do you have a firm or lump feeling in your breast or under your arm?", "Do you have skin that is itchy, red, scaly, dimpled or puckered?",
     "Do you experience bleeding or bruising for no known reason?", "Do you experience pain after eating? (Heartburn or indigestion that does not go away)",
      "Do you experience trouble swallowing?"],

    cancerValues: [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]],

    questionsDiabetes: ["Do you often feel thirsty?", "Are you often feeling tired?", "Does your family have a history of diabetes?", 
    "Are you physically active?", "Have you ever had gestational diabetes?"],
    
    diabetesValues: [[0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1]],

    questionGeneral: ["Have you felt something unusual about your health for the last 6 months?", "Is your everyday life getting worse?", "Do you often have a fever?",
    "Do you have a healthy physical body?", "Are you healthy in general?"],

    generalValues: [[1, 0, 1], [0, 1, 0], [1, 0, 1], [0, 1, 0], [1, 0, 1]],

    totalQuestions: 21,

    totalValues:[9, 12, 7]

};

var running;

var storedQuestions = [];
var question = "";
var storedValues = [];
var usedQuestions = [];
var questionAnswers = [];

var CancerValue = [0, 0, 0];
var COPDValue = [0, 0, 0];
var DiabetesValue = [0, 0, 0];

var i = 0;
var j = 0;
var k = 0;

var go_to_comment = 0;


function firstQuestion() {

    question = Database.questionFirst;

    document.getElementById('QUESTION').innerHTML 
        = question;

}

function next() {

    var answer = document.Questionaire.Answer.value;

    var boxCheckedYes = a1.checked;
    var boxCheckedNo = a2.checked;


    if (boxCheckedYes != true && boxCheckedNo != true) {
        
            alert("You haven't checked any boxes.");
            running = undefined;

    } else if (boxCheckedYes == true || boxCheckedNo == true) {
        
            running = true;

    }

    if (storedQuestions == "" && storedValues == "") {

        storedQuestions = Database.questionStart;
        storedValues = Database.startValues;
    }

    stopProgram();

    if (running == true) {

        if (question == Database.questionFirst) {

            if (answer == "yes") {

                COPDValue[0] = COPDValue[0] + Database.firstValues[0];
                CancerValue[0] = CancerValue[0] + Database.firstValues[1];
                DiabetesValue[0] = DiabetesValue[0] + Database.firstValues[2];
        
            } else if (answer == "no") {
        
                COPDValue[1] = COPDValue[1] + Database.firstValues[0];
                CancerValue[1] = CancerValue[1] + Database.firstValues[1];
                DiabetesValue[1] = DiabetesValue[1] + Database.firstValues[2];
        
            }
            question = storedQuestions[i];
            
            document.getElementById('QUESTION').innerHTML
                = question;
             
            console.log(COPDValue, " ", CancerValue, " ", DiabetesValue);

        } else {

            changePage(answer);
            
        }
        
        // exchange();

    } else if (running == false) {

        /* Save usedQuestions, questionAnswers, and the three disease values into our database 
        Array structure in database:
        [["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        [[copd value[0], cancer value[0], diabetes value[0]], comment (stored on next page)]]
        */

        // window.location = "commentUK.html";

        go_to_comment = 1;

    }
    
}


// Use as to figure out value instead of it being in next()
function check() {

}

function changePage(answer) {
    if (question == storedQuestions[i]) {
        for(j = 0; j <= usedQuestions.length; j++) {
            
            if (usedQuestions[j] == question) {
                if (i >= storedQuestions.length) break;
                
                COPDValue[1] = COPDValue[1] + storedValues[i][0];
                CancerValue[1] = CancerValue[1] + storedValues[i][1];
                DiabetesValue[1] = DiabetesValue[1] + storedValues[i][2];

                i++;
                if (i >= storedQuestions.length){
                    exchange();
                }
                question = storedQuestions[i];
                j=-1;
            
            }
            
        }

        if(j > usedQuestions.length) {

            usedQuestions[k] = question;
            questionAnswers[k] = answer;
            k++;

            if (i < storedQuestions.length){
                

                if (answer == "yes") {
                
                    COPDValue[0] = COPDValue[0] + storedValues[i][0];
                    CancerValue[0] = CancerValue[0] + storedValues[i][1];
                    DiabetesValue[0] = DiabetesValue[0] + storedValues[i][2];

                } else if (answer == "no") {

                    COPDValue[1] = COPDValue[1] + storedValues[i][0];
                    CancerValue[1] = CancerValue[1] + storedValues[i][1];
                    DiabetesValue[1] = DiabetesValue[1] + storedValues[i][2];

                }

                i++;
                exchange();
            
                question = storedQuestions[i];
                console.log(COPDValue, " ", CancerValue, " ", DiabetesValue);

                document.getElementById('QUESTION').innerHTML
                    = question;
            }
        } 
    }
}

// Use to exchange the questions and values for the questions instead of it being in next()
function exchange() {
    COPDValue[2] = COPDValue[0]-COPDValue[1];
    CancerValue[2] = CancerValue[0]-CancerValue[1];
    DiabetesValue[2] = DiabetesValue[0]-DiabetesValue[1];

    if (i >= storedQuestions.length && COPDValue[2] > CancerValue[2] && COPDValue[2] > DiabetesValue[2]) {

        storedQuestions = Database.questionsCopd;
        storedValues = Database.copdValues;

        i = 0;

        question = storedQuestions[i];

    } else if (i >= storedQuestions.length && CancerValue[2] > COPDValue[2] && CancerValue[2] > DiabetesValue[2]) {

        storedQuestions = Database.questionsCancer;
        storedValues = Database.cancerValues;

        i = 0;

        question = storedQuestions[i];

    } else if (i >= storedQuestions.length && DiabetesValue[2] > CancerValue[2] && DiabetesValue[2] > COPDValue[2]) {
        
        storedQuestions = Database.questionsDiabetes;
        storedValues = Database.diabetesValues;

        i = 0;

        question = storedQuestions[i];

    } else if (i >= storedQuestions.length 
            && (DiabetesValue[2] == CancerValue[2] 
                || DiabetesValue[2] == COPDValue[2] 
                || CancerValue[2] == COPDValue[2])) {
        
        storedQuestions = Database.questionGeneral;
        storedValues = Database.generalValues;

        i = 0;

        question = storedQuestions[i];
    }
}

function stopProgram() {
    if ((COPDValue[0] > (0.9 * Database.totalValues[0])
    && CancerValue[0] < (0.4 * Database.totalValues[1]) 
    && DiabetesValue[0] < (0.4 * Database.totalValues[2])) 
    || (CancerValue[0] > (0.9 * Database.totalValues[1])
    && DiabetesValue[0] < (0.4 * Database.totalValues[2]) 
    && COPDValue[0] < (0.4 * Database.totalValues[0])) 
    || (DiabetesValue[0] > (0.9 * Database.totalValues[2]) 
    && CancerValue[0] < (0.4 * Database.totalValues[1]) 
    && COPDValue[0] < (0.4 * Database.totalValues[0]))) {

        running = false;

    } else if (COPDValue[0] >= Database.totalValues[0] || CancerValue[0] >= Database.totalValues[1] || DiabetesValue[0] >= Database.totalValues[2]) {

        running = false;

    } else if (k >= Database.totalQuestions) {

        running = false;

    }
}

/* This function handles the removal of the questionnaire elements and replaces them with the comment parts and submission button. */
function commentCreate() {
    if (go_to_comment == 1){
        document.getElementById("Questionaire").remove();

        var commentTitle = document.getElementById("commentText")
        commentTitle.appendChild(document.createTextNode("Write your comments here:"))

        var commentfield = document.createElement("textarea");
        commentfield.setAttribute("cols","35");
        commentfield.setAttribute("rows","7");
        commentfield.setAttribute("name","Comment");
        document.getElementById("commentPage").appendChild(commentfield);

        document.getElementById("commentPage").appendChild(document.createElement("br"));

        var buttonComment = document.createElement("button");
        buttonComment.setAttribute("style","position: relative; left: 300px; top: 20px;");
        buttonComment.appendChild(document.createTextNode("Submit"));
        document.getElementById("commentButton").appendChild(buttonComment);
  }
}
