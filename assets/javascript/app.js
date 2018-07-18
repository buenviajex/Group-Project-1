$(".searchButton").on("click", function(event) {
    event.preventDefault();
    var searchValue= $(".searchInput").val().trim();

    var GIapi = "AIzaSyBFF-Z0wLlFirA44q-R_Yfg5Y_d59Ks9xY"
    var GIqueryURL = "https://www.googleapis.com/customsearch/v1?key=" + GIapi + "&cx=003281430856125788303:ccpcjlqp7kq&q=" + searchValue;
    $.ajax({
        url: GIqueryURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);
    });


    var NYTqueryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    NYTqueryURL += '?' + $.param({
        'api-key': "ebfd3fb4511c45b8a0f31b81f539debc",
        'q': searchValue
    });
    $.ajax({
        url: NYTqueryURL,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });


});
 
// function(response) {
//       addNewRow(response.data);
//   });
// });
// function addNewRow (data) {
//   var img = data[0].image;
//   var newRow = $("<tr>").prepend(
//     $("<#googleImage>").text(data),
//   );
//   $("#googleImage").prepend(newRow);
// }