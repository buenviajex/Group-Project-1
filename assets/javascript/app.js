// $(".searchButton").on("click", function(event) {
//     event.preventDefault();
//     var searchValue= $("#searchInput").val().trim();
//     var queryURL = "https://cors-anywhere.herokuapp.com/https://www.google.com/search?tbm=isch&q=" + searchInput + "";

//     $.ajax({
//         url: queryURL,
//         method: "GET",
//     }).then(function(response) {
//         console.log(response);
//     });
// });
 
$(".searchButton").click(function(){
    $(".mainlogo").removeClass("center-align");
    $(".mainlogo").addClass("left s6");
    $(".logoimage").animate({
        height: '100px',
        width: '400px'
    });
    $("#searchBar").removeClass("s12");
    $("#searchBar").addClass("searchBar s6");
    $("#searchBar").animate({
        size: '50%',
    });

    // jquery helper to run event.preventDefault() for you;
    return false;
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