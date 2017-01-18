function retrieveQuote(){
    $.ajax("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(resp){
      console.log("YO");
    $("#quote").Html = "Hello"; //resp.quoteText;
  });
}

$('document').ready(function(){
  $('#newQuote').on("click", function(){
    retrieveQuote();
  });
  retrieveQuote();
});