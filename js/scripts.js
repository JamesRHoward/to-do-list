var itemsArray = [];


// Business logic
function toDoItem(item, details){
  this.itemToDo = item;
  this.itemDetails = details;

}


// UI logic
$(document).ready(function(){
  $("#new-item").submit(function(event){
    event.preventDefault();
    var string = "";
    var inputtedItem = $("#new-to-do").val();
    var inputtedDetail = $("#new-detail").val();


    var newToDoItem = new toDoItem(inputtedItem, inputtedDetail);
    itemsArray.push(newToDoItem);

    $("#list").append("<li class='li-to-do'><span class='list-item'>" + newToDoItem.itemToDo + "</span><input type='text' class='edit'><button type='remove' class='button-remove'><img src='img/small-red-x.png'></button><button type='edit' class='button-edit'><img src='img/edit-pencil.png'></button></li>");

    $(".list-item").last().click(function(){
      $("#show-to-do").show();
      $("#show-to-do h2").text(newToDoItem.itemToDo);
      $(".item").text(newToDoItem.itemToDo);
      $(".detail").text(newToDoItem.itemDetails);


   });
   $(".button-remove").click(function(){
     $(this).parent().remove();
     $("#show-to-do").hide();
   });

   $(".button-edit").click(function(){
     string = $(this).siblings(".list-item").text();
         $(this).siblings(".list-item").hide().siblings(".edit").show().focus();

   });

   $(".edit").focusout(function(){
    $(this).hide().siblings(".list-item").show().text($(this).val());
    for (var i = 0; i < itemsArray.length; i++){
      if (itemsArray[i].itemToDo === string) {
        itemsArray[i].itemToDo = $(this).val();
      }
    }



});



    $("#new-to-do").val("");
    $("#new-detail").val("");

  });
});
