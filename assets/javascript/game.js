$(document).ready(function() {

// Create variables for random number, crystal values, wins, losses
// let randomNumber = 0;
// let crystal1 = 0;
// let crystal2 = 0;
// let crystal3 = 0;
// let crystal4 = 0;
let wins = 0;
let losses = 0;
let guessTotal = 0;
let yourTotal = 0;

$("#your-total").html(yourTotal);
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);

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
    $('#your-total').html(yourTotal);
 }

// Generate random number between 19 - 120, put it in the div
let randomNumber = Math.floor(Math.random() * 102 + 19);
randomNumber = randomNumber*1;
$('#random-number').html(randomNumber);

// Generate random number for each crystal between 1 - 12

// for (let i = 0; i < 4; i++) {
//     let b = $("<button>")
//     let crystalNumber = Math.floor(Math.random() * 12 + 1);
//     b.attr("data-random", crystalNumber);
//     b.addClass("btn number")
//     b.text(crystalNumber);
//     $('#crystals').append(b);
//     console.log(b);
// }

$("button").click(function(){
    $("p").toggle(500);
  });



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

// debugger;


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
    guessTotal += crystalValue;
    $("#your-total").html(guessTotal);
 
    checkWin();
});
}


// for (let i = 0; i < 4; i++) {
//     let b = $("<button>")
//     let crystalNumber = Math.floor(Math.random() * 12 + 1);
//     b.attr("data-random", crystalNumber);
//     b.addClass("btn number")
//     b.text(crystalNumber);
//     $('#crystals').append(b);
//     console.log(b);
// }

// $(".number").click(function() {
//     const val = parseInt($(this).attr("data-random"));
//     score += val;
//     checkWin();
//     console.log($(this).attr("data-random"));
// });


function checkWin() {

    if (guessTotal > randomNumber) {
        // $("#score, #your-total").empty();
        losses += 1;
        $("#losses").html("Losses: " + losses);
        playAgain();
        newImages();
    }
    
    else if (guessTotal === randomNumber) {
        wins += 1;
        $("#wins").html("Wins: " + wins);
        // $("#score, #your-total, #crystals").empty();
        playAgain();
        newImages();
    }
}

// $(".clear").on("click", function() {
//     // call initialize to reset app
//     playAgain();
//   });
  
//   playAgain();
  
newImages();



});

