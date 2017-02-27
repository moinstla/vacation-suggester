$(document).ready(function() {
  $("select").children("option:first-child").hide();

   $("form").submit(function(event) {
   var question1 = parseInt($("#question1").val());
   var question2 = parseInt($("#question2").val());
   var question3 = parseInt($("#question3").val());
   var userScore = (question1 + question2 + question3);

    $("#result").show();

    if (userScore <= 4) {
      $("#result").text("Washington DC");
      $("#washingtondc").show();
      $("#florida").hide();
      $("#italy").hide();
      $("#newzealand").hide();
    } else if (userScore <= 6) {
      $("#result").text("Florida");
      $("#florida").show();
      $("#italy").hide();
      $("#washingtondc").hide();
      $("#newzealand").hide();
    } else if (userScore <= 9) {
      $("#result").text("Italy");
      $("#italy").show();
      $("#florida").hide();
      $("#washingtondc").hide();
      $("#newzealand").hide();
    } else {
      $("#result").text("New Zealand");
      $("#newzealand").show();
      $("#florida").hide();
      $("#washingtondc").hide();
      $("#italy").hide();

    }
    event.preventDefault();
  });
});
