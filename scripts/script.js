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

  if (!title) {
    alert("Error, empty titles are not allowed. Get out of here!");
    return;
  }

  let theTask = new Task(
    isImportant,
    title,
    location,
    description,
    participants,
    dueDate,
    color
  );

  $.ajax({
    type: "POST",
    url: "https://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(theTask),
    contentType: "application/json",
    success: function (serverResponse) {
      console.log(`Server says: ${serverResponse}`);
      let savedTask = JSON.parse(serverResponse);

      displayTask(savedTask);
      console.log(JSON.stringify(theTask));
      clearForm();
    },
    error: function (errorDetails) {
      console.log(`Save Failed: ${errorDetails}`);
    },
  });
}

function deleteTask() {
  $.ajax({
    type: "DELETE",
    url: "https://fsdiapi.azurewebsites.net/api/tasks/clear/Kyle",
    success: function () {
      $(".task-container").html("");
    },
  });
}

function fetchTasks() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/api/tasks",

    success: function (serverResponse) {
      console.log(`Server says: ${serverResponse}`);
      let allTasks = JSON.parse(serverResponse);

      for (let i = 0; i < allTasks.length; i++) {
        let task = allTasks[i];
        if (task.name == "Kyle") {
          console.log(task);
          displayTask(task);
        }
      }
    },
    error: function (errorDetails) {
      console.log(`Req Failed: ${errorDetails}`);
    },
  });
}
$("#btnDeleteTask").click(deleteTask);
function init() {
  //////////// LOAD DATA/////////////

  fetchTasks();

  /////////// HOOK EVENTS////////////

  $("#btnSave").click(saveTask);
  $(".iImportant").click(toggleImportant);
  $("#btnToggleDetails").click(toggleDetails);
}

window.onload = init;
