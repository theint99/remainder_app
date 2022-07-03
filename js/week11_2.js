console.log("hey");
var addbtn = document.getElementById("addbtn");
var task = document.getElementById("task");
var date = document.getElementById("date");
var upcoming = document.getElementById("upcoming");
var duedate = document.getElementById("duedate");
var priorities = document.getElementById("priorities");

addbtn.addEventListener('click', addtask);



function addtask() {
    console.log("click");

    var newtask = task.value;
    var newdate = date.value;
    if (newtask.length > 0 && newdate.length>0) {
        console.log(newtask);
        
        console.log(newdate);
        var setdate = new Date(newdate);

        var settime = setdate.getTime();

        // console.log(settime);
        // var newmili = newdate.getMilliseconds();
        // console.log(newmili);

        var today = new Date();
        var todaymili = today.getTime();
        var diff = todaymili - settime;
        console.log(diff);
        var changeday = diff / (24 * 60 * 60 * 1000);
        var setday = Math.floor(changeday);

        var li = document.createElement("li");
        var tasklabel = document.createElement("label");
        var timelabel = document.createElement("label");
        var remaindday = document.createElement("label");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        console.log(checkbox);

        var deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete";
        deletebtn.classList.add("btn");
        deletebtn.classList.add("btn-danger");
        console.log(deletebtn);

        deletebtn.onclick = deleteTask;

        //console.log(today.getTime());

        if (todaymili < settime) {
            console.log("upcoming");
            tasklabel.innerHTML = newtask;

            //li.innerHTML = newtask;
            timelabel.innerHTML = newdate;
            remaindday.innerText = Math.abs(setday) + "day coming";
            checkbox.onchange = change;
            li.appendChild(checkbox);
            li.appendChild(tasklabel);
            li.appendChild(timelabel);
            li.appendChild(remaindday);
            li.appendChild(deletebtn);
            upcoming.appendChild(li);
            task.value=" ";
            date.value=" ";
        }
        else {
            console.log("dudate");
            tasklabel.innerHTML = newtask;
            //li.innerHTML = newtask;
            timelabel.innerHTML = newdate;
            remaindday.innerText = Math.abs(setday) + "day finished";
            li.appendChild(checkbox);
            li.appendChild(tasklabel);
            li.appendChild(timelabel);
            li.appendChild(remaindday);
            li.appendChild(deletebtn);
            duedate.appendChild(li);
            task.value=" ";
            date.value=" ";
        }

    }


}
function change() {
    console.log("onchange");
    var ul = this.parentNode.parentNode;
    var li = this.parentNode;
    priorities.appendChild(li);

}
function deleteTask() {
    var ul = this.parentNode.parentNode;
    var li = this.parentNode;
    ul.removeChild(li);


}
