//variables for the New York Times API- these variables are specific to the NYT api key (please don't change!)
var authKey = "ebfd3fb4511c45b8a0f31b81f539debc";
var searchTerm = "";
var numResults = 0;
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";
var articleCounter = 0;

//searchbar function to obtain articles from user input into the search bar.
$("#searchBar").on("click", function (event) {
  event.preventDefault();
  articleCounter = 0;
  $("#theNews").empty();
  searchTerm = $("#searchBar").val().trim();
  var queryURL = queryURLBase + searchTerm;
  runQuery(numResults, queryURL);
});
