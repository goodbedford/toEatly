// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){

  $('#new-food-form').on('submit', function(event){
    event.preventDefault();
    var newFood = $(this).serialize();
    // var newFood = {};
    // newFood.name = $('#name').val();
    // newFood.yumminess = $('#yumminess').val();
    console.log(newFood);
    $.ajax({
      url: '/api/foods/',
      method: 'POST',
      data: newFood,
      success: function(data){
        addFood(data);
      },
      error: function(xhr, ajaxOptions, thrownError){
        console.log(thrownError);
      }
    })
    .done(function(data){
      $('form')[0].reset();
    });
  });
  $(document).on('click', 'button.close', function(e){

  });

  function addFood( data){
              var htmlString = '<li><strong>' +data.name+'</strong>:'+data.yumminess+'</li>';
          $('#food-ul').append(htmlString);
  }
});