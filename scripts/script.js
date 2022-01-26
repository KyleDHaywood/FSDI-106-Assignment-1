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

function clearForm() {
  let title = $("#txtTitle").val("");
  let dueDate = $("#txtDueDate").val("");
  let location = $("#txtLocation").val("");
  let description = $("#txtDescription").val("");
  let color = $("#txtcolor").val("");
}

function saveTask() {
  let title = $("#txtTitle").val();
  let dueDate = $("#txtDueDate").val();
  let location = $("#txtLocation").val();
  let description = $("#txtDescription").val();
  let color = $("#txtcolor").val();
  let theTask = title;
  description;
  location;
  dueDate;
  color;
  console.log(theTask);

  console.log($("#txtColor").val());
  clearForm();
}

function init() {
  $("#btnSave").click(saveTask);
  $(".iImportant").click(toggleImportant);
  $("#btnToggleDetails").click(toggleDetails);
}

window.onload = init;
