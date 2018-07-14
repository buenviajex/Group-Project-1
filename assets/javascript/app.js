// $("#searchBar").on("click", function(event) {
//     event.preventDefault();
//     var searchbar= $("#searchBar").val().trim();
//     var queryURL = "https://cors-anywhere.herokuapp.com/https://www.google.com/search?tbm=isch&q=" + searchBar + "";
//     $.ajax({
//       url: queryURL,
//       method: "GET",
//       headers: {
//       },
//     }).then(function(response) {
//     });
//   });
//   function(response) {
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