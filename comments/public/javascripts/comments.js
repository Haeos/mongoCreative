$(document).ready(function(){

  $('#deleteComments').click(function() {
var url = 'comment';
$.ajax({
url:url,
type: "DELETE",
success: function(data, textStatus) {
	$('#done').html(textStatus);
}
})
})

$("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "";
      for(var comment in data) {
        com = data[comment];
        everything += "<div id='flip'> Setup: " + com.Name + "</div>";
	everything += "<div id='panel'> Punchline: " + com.Comment + "</div>";
      }
	everything += "";
      $("#comments").html(everything);
    })
  })

    $("#postComment").click(function(){
        var myobj = {Name:$("#name").val(),Comment:$("#comment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);

var url = "comment";
  $.ajax({
  url:url,
  type: "POST",
  data: jobj,
  contentType: "application/json; charset=utf-8",
  success: function(data,textStatus) {
      $("#done").html(textStatus);
  }
  })

    });
  });

