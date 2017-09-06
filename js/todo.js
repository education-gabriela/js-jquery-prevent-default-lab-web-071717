$(document).ready(function () {
  submitForm();
});

function submitForm () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    let list = $("#list ol");
    let item = $("#item").val();
    list.append(`<li>${item}</li>`);

    $(this).trigger("reset");
  });
}
