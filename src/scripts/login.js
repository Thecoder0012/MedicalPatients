
var counter = 0

function checker(){
    var id = document.getElementById("ID").value;
    var pw = document.getElementById("Password").value;
    var Database = [['Admin', '1234'],['Admin', '125'],['Admin', '0000'],['Admin', '2342']]

    for(let len = 0; len<Database.length; len++){
        if(id === Database[len][0] && pw === Database[len][1]){
            window.location = "Doc_info_side.html";
        }
    }

    if(counter===0){
        counter++;
        document.getElementById("Wrong").appendChild(document.createTextNode("That is not a valid input."));
    }
}