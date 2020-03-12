function addToDo(){
    // JS Solution var text = document.getElementById('txt-task').value;
    // JS Solution document.getElementById('txt-task').value="";
    var text = $('#txt-task').val();
    var x=0;
    if(text!=""){
        $('#txt-task').val("");
        
        console.log(text);

        //create String using HTML
        //var li = "<li>" + text + "</li>";
        var li= `<li id="${x}">${text}<button onclick="deleteToDo('${x}');">-</button></li>`;
        $('#pending-list').append(li);

        }
        $('#txt-task').focus();
}

function deleteToDo(id){
    $('#'+id).remove();

}


function init(){
    console.log("Init the todo App");
    //sensing user actions/events
    $("#btn-add").click(addToDo);
}


//when the browser finishes rendering the HTML it will execute init
window.onload=init;