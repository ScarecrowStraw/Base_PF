$(document).ready(function(){
    $('#menuchart button').click(function(){
      $('#menuchart button').removeClass("act");
      $(this).addClass("act");
      var name = $(this).val();
      // $('#' + name).css("display: block")
      console.log(name);
      console.log($('canvas').css("display", "none"))
      console.log($('#' + name).css("display", "block"));
    });  
  });

// var tmp = document.getEleme                                                  ntById("menuchart")
// console.log(tmp);

// document.getElementById("").addEventListener("click", displayDate);