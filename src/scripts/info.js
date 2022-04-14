
var Info = [["Patient 0.","Patient_0@mail.com","Trouble breathing. Coughs. Muscle weakness. Tired all the time.","Corona","Bit a bat"],
    ["Ordinary person.","Very_sick@mail.com","Headache.","Not sick","I feel sick"],
];

function next_page(){
    window.location = "startside.html";
}

function MakeForm(){
    for(let i=1;i<=Info.length;i++){
        document.getElementById("new").appendChild(document.createElement("hr"));

        var list = document.createElement("ul");
        list.setAttribute("id","screen"+i);
        document.getElementById("new").appendChild(list);

        var element = document.createElement("li");
        element.setAttribute("id","eleName"+i);
        element.appendChild(document.createTextNode("Patientens navn: "));
        document.getElementById("screen"+i).appendChild(element);

        var element = document.createElement("li");
        element.setAttribute("id","eleMail"+i);
        element.appendChild(document.createTextNode("Patientens mail: "));
        document.getElementById("screen"+i).appendChild(element);

        var element = document.createElement("li");
        element.setAttribute("id","eleSymptom"+i);
        element.appendChild(document.createTextNode("Symptomer: "));
        document.getElementById("screen"+i).appendChild(element);

        var element = document.createElement("li");
        element.setAttribute("id","eleDisease"+i);
        element.appendChild(document.createTextNode("Mulige sygdomme: "));
        document.getElementById("screen"+i).appendChild(element);

        var element = document.createElement("li");
        element.setAttribute("id","eleComment"+i);
        element.appendChild(document.createTextNode("Kommentarer: "));
        document.getElementById("screen"+i).appendChild(element);

        var delete_button = document.createElement("button");
        delete_button.setAttribute("id","del"+i);
        delete_button.setAttribute("onclick","Delete("+i+")");
        delete_button.setAttribute("style","color: red;");
        delete_button.appendChild(document.createTextNode("X Delete"));
        document.getElementById("new").appendChild(delete_button);

        Data(i);
    }
}

function Data(i){
    document.getElementById("eleName"+i).innerHTML += Info[i-1][0]
    document.getElementById("eleMail"+i).innerHTML += Info[i-1][1]
    document.getElementById("eleSymptom"+i).innerHTML += Info[i-1][2]
    document.getElementById("eleDisease"+i).innerHTML += Info[i-1][3]
    document.getElementById("eleComment"+i).innerHTML += Info[i-1][4]
}

function Delete(i){
    document.getElementById("screen"+i).remove();
    document.getElementById("del"+i).remove();
}
