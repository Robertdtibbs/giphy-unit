var animals = [
    "bear",
    "eagle",
    "dog",
    "snake",
    "cat",
    "turkey",
    "deer",
    "goose",
    "boar",
    "pig",
    "cow",
    "zebra",
    "rhino"
];

console.log(animals.length)

window.onload = function(){
    buttonSetup();
} 

function buttonSetup(){
$("#buttons").empty();
for(var i = 0; i < animals.length; i ++) {
    console.log(animals[i]);
    var button = $("<button>");
    button.attr("data-name", animals[i]);      
    button.text(animals[i]);  
    $("#buttons").append(button);
}};

$("#add-animal").on("click", function(event) {
    
    event.preventDefault();

    var inputAnimal = $("#animal-input").val().trim();
    console.log(inputAnimal);
    animals.push(inputAnimal);

    buttonSetup();
});

$("button").on("click", function() {
    var animal = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=KIOuCmP0TkLk98ljMtqMIBiE56ry5jZo";

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function(response){
        
        var gifResults = response.data;
        
        for(var j = 0; j < gifResults.length; j++){

            if(results[j].rating !== "r") {

                var gifDiv = $("<div>");
                var rating = results[j].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animalImage = $("<img>");
                animalImage.attr("src", results[j].image.fixed_height.url);

                gifDiv.append(p);
                gifDiv.append(animalImage);

                $("#gif-view").prepend(gifDiv);
            }
        }
    });

})