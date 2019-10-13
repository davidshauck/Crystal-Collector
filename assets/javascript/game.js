$(document).ready(function() {

// Create variables for random number, crystal values, wins, losses
let wins = 0;
let losses = 0;
let guessTotal = 0;
let yourTotal = 0;

// set intial html
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);

// auto replay
function playAgain() {
    randomNumber = "";
    guessTotal = 0;
    $("#score, #your-total").empty();
    console.log("playing again");
    randomNumber = Math.floor(Math.random() * 102 + 19);
    randomNumber = randomNumber*1;
    $( ".crystal-image" ).empty();
    $( ".crystals" ).empty();
    $('#random-number').html(randomNumber);
    $('#your-total').html(randomNumber);
 }

// Generate random number between 19 - 120, put it in the div
let randomNumber = Math.floor(Math.random() * 102 + 19);
randomNumber = randomNumber*1;
$('#random-number').html(randomNumber);
$("#your-total").html(randomNumber);

// Rules button
$("button").click(function() {
    $( "p" ).slideToggle(); 
});

// set images
function newImages() {
for (let i = 0; i < 4; i++) {
    let imageCrystal = $("<img>");
    let crystalNumber = Math.floor(Math.random() * 12 + 1);
    imageCrystal.addClass("crystal-image col-md-2 col-sm-3").attr("id","crystalID" + i);
    imageCrystal.attr("src", "assets/images/crystal" + i + ".png");
    imageCrystal.attr("data-crystalValue", crystalNumber);
    imageCrystal.attr("data-location", i);
    $("#crystals").append(imageCrystal);
}

// image click logic
    $(".crystal-image").click(function() {
        let crystalValue = parseInt($(this).attr("data-crystalValue"));
        $( "#crystalID" + $(this).attr("data-location") ).animate({
            padding: "30px"
        }, 300 ); 
        $( "#crystalID" + $(this).attr("data-location") ).animate({
            padding: "10px"
        }, 200 );
        $( "#crystalID" + $(this).attr("data-location") ).animate({
            padding: "20px"
        }, 100 );
        randomNumber -= crystalValue;
        $("#your-total").html(randomNumber);
    
        checkWin();
    });
}

// check win-loss conditions
function checkWin() {

    if (randomNumber < 0) {
        losses += 1;
        $("#losses").html("Losses: " + losses);
        playAgain();
        newImages();
    }
    
    else if (randomNumber === 0) {
        wins += 1;
        $("#wins").html("Wins: " + wins);
        playAgain();
        newImages();
    }
}
  
newImages();

});

