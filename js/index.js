function retrieveQuote(){
  $.ajax({
    method: "GET",
    url: "http://api.icndb.com/jokes/random",
    dataType: "json",
    success: function (data) {
    $("#quote").html(data.value.joke);
    },
    error: function(err){
      console.log(err)
    }
  });
}
  
$('document').ready(function(){
  $('#newQuote').on("click", function(){
    retrieveQuote();
  });
  retrieveQuote();
});