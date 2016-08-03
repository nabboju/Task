'use strict';


var json = [
    {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
    {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
    {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
    {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
    {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
    {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
    {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

// used to prepend the captured data to existing json and display back on html page
var prependTasks = function(){
    var obj = {};
    obj.name = document.getElementById("task-name").value;
    obj.date = dateFormat(document.getElementById("task-date").value);
    obj.assigned = document.getElementById("assigned-to").value;
    if(!(obj.name == "" || obj.date == undefined || obj.assigned == "")){
        json.unshift(obj);
        var clearTbody = document.getElementById('tbody');
        clearTbody.innerHTML = "";
        displayRows();
         document.getElementById("task-name").value = "";
        document.getElementById("task-date").value = "";
        document.getElementById("assigned-to").value = "";
        document.getElementById("validation").innerHTML = "";
        document.getElementById("task-date").classList.remove("error-box");
    }
else{
        if(obj.name == ""){
            document.getElementById("task-name").classList.add("error-box");
        } else document.getElementById("task-name").classList.remove("error-box");
        if(obj.date == undefined){
            document.getElementById("task-date").classList.add("error-box");
        }else document.getElementById("task-date").classList.remove("error-box");
        if(obj.assigned == ""){
            document.getElementById("assigned-to").classList.add("error-box");
        }else  document.getElementById("assigned-to").classList.remove("error-box");
        document.getElementById("validation").innerHTML = "please enter all fields";
        //document.getElementById("validation").classList.add("p-error");
    }

};

//used to format date from yyyymmdd to mmddyyyy
var dateFormat = function (inputDate) {

   var date =  new Date(inputDate);
    if (!isNaN(date.getTime())) {
        var day = date.getDate().toString();
        var month = (date.getMonth() + 1).toString();
        // Months use 0 index.

        return (month[1] ? month : '0' + month[0]) + '/' +
            (day[1] ? day : '0' + day[0]) + '/' +
            date.getFullYear();
    }
};


//used to display the json data to html
var displayRows = function (){
    var tbody = document.getElementById('tbody');
    for (var i = 0; i < json.length; i++) {
        var tr = "<tr>";
        //printing data as rows and columns with borders
        tr += "<td><b>" + json[i].name + "</b></td>"+ "<td>&ensp;" + json[i].date + "</td>" + "<td>&ensp;&ensp;&ensp;&ensp;&ensp;<b>" + json[i].assigned + "</b></td></tr>";
       //if no borders are needed in between use this
        // tr += "<td><b>" + json[i].name + "</b>"+ "&ensp;&ensp;" + json[i].date + "" + "&ensp;&ensp;&ensp;&ensp;&ensp;<b>" + json[i].assigned + "</b></td></tr>";
        tbody.innerHTML += tr;
    }
};

displayRows();
