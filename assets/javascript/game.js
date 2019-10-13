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
$("#losses").html("Losses: " + wins);

function playAgain() {
    randomNumber = "";
    guessTotal = 0;
    $("#score, #your-total").empty();
    console.log("playing again");
    randomNumber = Math.floor(Math.random() * 102 + 19);
    randomNumber = randomNumber*1;
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


for (let i = 0; i < 4; i++) {
    let imageCrystal = $("<img>");
    let crystalNumber = Math.floor(Math.random() * 12 + 1);
    imageCrystal.addClass("crystal-image col-md-2").attr("id","crystalID" + i);
    imageCrystal.attr("src", "assets/images/crystal" + i + ".png").css('width', '200px', 'height', '200px', 'padding', '20px');
    imageCrystal.attr("data-crystalValue", crystalNumber);
    imageCrystal.attr("data-location", i);
    $("#crystals").append(imageCrystal);
}
// debugger;


$(".crystal-image").click(function() {
    let crystalValue = parseInt($(this).attr("data-crystalValue"));
    $( "#crystalID" + $(this).attr("data-location") ).animate({
        width: "250px"
      }, 400 ); 
      $( "#crystalID" + $(this).attr("data-location") ).animate({
        width: "200px"
      }, 400 );
    guessTotal += crystalValue;
    $("#your-total").html(guessTotal);


    // $( "#crystals" ).animate({
    //     height: "toggle"
    //   }, 500 );  
    //   $( "#animation" ).animate({
    //     width: "+10%"
    //   }, 500 ); 
    checkWin();
    console.log($(this).attr("data-crystalValue"));
});



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
    console.log('total', guessTotal)
    console.log('random', randomNumber)
    if (guessTotal > randomNumber) {
        // $("#score, #your-total").empty();
        losses += 1;
        $("#losses").html("Losses: " + losses);
        playAgain();
    }
    
    else if (guessTotal === randomNumber) {
        wins += 1;
        $("#wins").html("Wins: " + wins);
        // $("#score, #your-total, #crystals").empty();
        playAgain();
    }
}

// $(".clear").on("click", function() {
//     // call initialize to reset app
//     playAgain();
//   });
  
//   playAgain();
  




});

