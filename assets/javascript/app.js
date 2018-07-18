$(".searchButton").on("click", function(event) {
    event.preventDefault();
    var searchValue= $("#searchInput").val().trim();
    var queryURL = https://cors-anywhere.herokuapp.com/https://www.google.com/search?tbm=isch&q=" + searchInput + "";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);
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