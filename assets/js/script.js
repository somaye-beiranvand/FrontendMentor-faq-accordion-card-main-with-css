$(document).ready(function () {
  $("details").on("click", function () {
    $(this).parent().siblings().children().removeAttr("open");
  });
});
