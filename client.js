$(document).ready(function() {

//console.log("starting...");
  $("#getMessage").on("click", function() {
    
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=&timestamp="+new Date(), function(json){

console.log(json);
//$(".message").html(JSON.stringify(json));
  $("#messageDiv").html(json[0].content + "<p>by " + json[0].title); 
   
});

    // Only change code above this line.
  });
  
  $("#tweetButton").on("click", function() {
    var msgToTweet = $('#messageDiv').text();
    //console.log("msgToTweet: " + msgToTweet);
//alert("msgToTweet: " + msgToTweet); 
    $("#tweetButton").attr("href","https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + msgToTweet);  
  
  });
});

