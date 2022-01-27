var isImportant = false;
var isVisible = true;

function toggleDetails() {
  let aside = $("aside");
  if (isVisible) {
    aside.hide();
    isVisible = false;
  } else {
    aside.show();
    isVisible = true;
  }
}

function toggleImportant() {
  let icon = $(".iImportant");
  if (isImportant) {
    icon.removeClass("fas").addClass("far");
    isImportant = false;
  } else {
    icon.removeClass("far").addClass("fas");
    isImportant = true;
  }
  $(".iImportant").style.color = $("#txtColor").val();
  console.log($("#txtColor").val());
}
function displayTask(task) {
  let syntax = `<div class="task">
    <div class="task-title">
      <h5>${task.title}</h5>
      <p>${task.description}</p>
    </div>
    
    <div class="task-middle">
      <label><i class="fas fa-map-marker-alt"></i> ${task.location}</label>
      <label><i class="far fa-clock"></i> ${task.dueDate}</label>
    </div>
  </div>`;

  $(".task-container").append(syntax);
}

function clearForm() {
  $("#txtTitle").val("");
  $("#txtDueDate").val("");
  $("#txtLocation").val("");
  $("#txtDescription").val("");
  $("#txtParticipants").val("");
  $("#txtcolor").val("");
}

function saveTask() {
  let title = $("#txtTitle").val();
  let dueDate = $("#txtDueDate").val();
  let location = $("#txtLocation").val();
  let description = $("#txtDescription").val();
  let participants = $("#txtParticipants").val();
  let color = $("#txtcolor").val();
  let theTask = new Task(
    isImportant,
    title,
    location,
    description,
    participants,
    dueDate,
    color
  );
  console.log(theTask);
  displayTask(theTask);

  clearForm();
}

function init() {
  $("#btnSave").click(saveTask);
  $(".iImportant").click(toggleImportant);
  $("#btnToggleDetails").click(toggleDetails);
}

window.onload = init;
