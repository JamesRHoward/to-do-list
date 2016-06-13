// Business logic
function toDoItem(item, details){
  this.itemToDo = item;
  this.itemDetails = details;

}


// UI logic
$(document).ready(function(){
  $("#new-item").submit(function(event){
    event.preventDefault();

    var inputtedItem = $("#new-to-do").val();
    var inputtedDetail = $("#new-detail").val();


    var newToDoItem = new toDoItem(inputtedItem, inputtedDetail);

    $("#list").append("<li class='li-to-do'><span class='list-item'>" + newToDoItem.itemToDo + "</span><button type='remove' class='btn btn-remove'>Done?</button></li>");

    $(".list-item").last().click(function(){
      $("#show-to-do").show();
      $("#show-to-do h2").text(newToDoItem.itemToDo);
      $(".item").text(newToDoItem.itemToDo);
      $(".detail").text(newToDoItem.itemDetails);


   });
   $(".btn-remove").click(function(){
     $(this).parent().remove();
     $("#show-to-do").hide();
   });



    $("#new-to-do").val("");
    $("#new-detail").val("");

  });
});
