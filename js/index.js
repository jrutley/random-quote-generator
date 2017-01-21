function cutTo140Characters(text) {
  if(text.length > 140){
    return text.slice(0,137) + "...";
  }
  return text;
}

function retrieveQuote(){
  $.ajax({
    method: "GET",
    url: "https://api.icndb.com/jokes/random",
    dataType: "json",
    success: function (data) {
      var twitterLink = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(cutTo140Characters(data.value.joke));
      $("#tweetlink").attr("href", twitterLink);
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