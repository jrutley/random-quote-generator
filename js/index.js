function retrieveQuote(){
  $.ajax({
    method: "GET",
    url: "http://api.icndb.com/jokes/random",
    dataType: "json",
    success: function (data) {
      var twitterLink = "https://twitter.com/intent/tweet?text=" + data.value.joke;
      $("#tweetlink").href=twitterLink;
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