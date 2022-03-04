
$(document).ready(function(){
  $("button").click(function(){
    $(this).parent().siblings(".card-img-overlay").addClass("active");
  });
  $(".exit").click(function(){
    $(".card-img-overlay").removeClass("active");
  });
});


