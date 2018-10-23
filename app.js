// ToDo task object constructor
class ToDo {
    constructor (todo) {
        this.todo = todo;
    }
}

// Example item variable.
const item0 = new ToDo("Example 1");
// Add item0 variable to myToDos array to view example.
var myToDos = [item0, 'example2'];

// Chagnes the div to a form taking user's with buttons to either add the input or close the form.
function openForm () {
    var form = '<div class="form">' +
                    '<div class="formItem">' +
                        '<input type="text" id="newTask">' +
                    '</div>' +
                    '<div class="formItem">' +
                        '<button class="addButton" onclick="addTaskToList()">' +
                            '<i class="fas fa-plus-circle fa-2x"></i>' +
                        '</button>' +
                        '<button class="cancelButton" onclick="closeForm()">' +
                            '<i class="fas fa-times-circle fa-2x" ></i></button>' +
                        '</button>' +
                    '</div>'
                '</div>';
    document.getElementsByClassName("toDoForm")[0].innerHTML = form;
    document.getElementsByTagName("input")[0].focus();
}

// Changes div back to previous HTML, removing the form.
function closeForm() {
        document.getElementsByClassName("toDoForm")[0].innerHTML = '<button class="newToDo" onclick="openForm()">I want to...</button>';
}

// Creates HTML table row and data for each value in the array holding task inputs. Then displays.
function loadLibrary() {
    var toDoItems = "";
    for(var i = 0; i < myToDos.length; i++) {
        toDoItems += '<tr id="' + i + '">' +
                       '<td class="task">' + myToDos[i].todo + '' +
                       '<button class="cancelButton" onclick="remove(this)">' +
                           '<i class="far fa-times-circle"></i></button>' +
                       '</td>' +
                    '</tr>';

    }
    document.getElementById('table').innerHTML = toDoItems;

}

window.onload = function start() {
    loadLibrary();
}

// Takes entered value and creates object, adds to array, removes form, then loads the array list.
// If field is left blank and "add" button is pushed, and alert appears telling user to make input.
function addTaskToList() {
    var toDo = document.getElementById("newTask").value;
    if(toDo === '') {
        alert('Please enter a task to add to the list.')
    } else {
        const newTask = new ToDo(toDo);
        myToDos.push(newTask);
        closeForm();
        document.getElementsByClassName("toDoForm")[0].innerHTML = '<button class="newToDo" onclick="openForm()">I want to...</button>';
        loadLibrary();
    }
}

// Removes specific "task input" from array then loads the new list without the removed task.
function remove(o) {
     var p=o.parentNode.parentNode;
     currentLength = myToDos.length;
     //console.log(currentLength);
     myToDos.splice(parseInt(p.id), 1);
     loadLibrary();

}
