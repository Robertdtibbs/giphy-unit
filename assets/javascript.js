$(document).ready(function(){
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
    
    function buttonSetup(){
        $("#buttons").empty();
        for(var i = 0; i < animals.length; i ++) {
            console.log(animals[i]);
            var button = $("<button>");
            button.addClass("animal-btn");
            button.attr("id", animals[i]);   
            button.text(animals[i]);  
            $("#buttons").append(button);
    }};

    buttonSetup();

    $("#add").on("click", function(event) {
        
        event.preventDefault();
    
        var inputAnimal = $("#input").val().trim();
        console.log(inputAnimal);
        animals.push(inputAnimal);
        $("#input").val("");
    
        buttonSetup();
    });

    $("#buttons").on("click", ".animal-btn", function() {
        $("#gif-view").empty();
        var animalName = $(this).attr("id").trim();
        console.log(animalName);
    
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          animalName + "&limit=10&api_key=KIOuCmP0TkLk98ljMtqMIBiE56ry5jZo";
        console.log(queryURL);

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response){
            
            var results = response.data;
            
            for(var j = 0; j < gifResults.length; j++){
    
                
                    console.log(results.length)
                    var gifDiv = $("<div>");
                    var rating = results[j].rating;
    
                    var p = $("<p>").text("Rating: " + rating);
    
                    var animalImage = $("<img>");
                    animalImage.attr("src", results[j].image.fixed_height.url);
                    animalImage.addClass("gifAnimal");
                    gifDiv.append(p);
                    gifDiv.append(animalImage);
    
                    $("#gif-view").append(gifDiv);
                
            }
        });
    
    })
});





