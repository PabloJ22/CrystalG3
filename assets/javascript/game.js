//cant seem to get my javascrript up and running..

$(document).ready(function () {
    var random = Math.floor(Math.random() * 19 + 120)

    // generates a random number to be shown at the start of the game between 19-20


    $('#randomNumber').text(random);

    // supposed to append random number to the randomNumber id in the html doc

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    // wins and losses

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    //reset function

    function reset() {
        random = Math.floor(Math.random() * 19 + 120);
        console.log(random)
        $('#randomNumber').text(random);
        num1 = Math.floor(Math.random() * 22 + 1);
        num2 = Math.floor(Math.random() * 22 + 1);
        num3 = Math.floor(Math.random() * 22 + 1);
        num4 = Math.floor(Math.random() * 22 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }

    //winning function

    function victory() {
        alert("YOU WIN!!!!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    //losing function

    function defeat() {
        alert("You lose :o ");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    //supposed to make crystals clickable... but they dont...

    $('#one').on('click', function () {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == random) {
            victory();
        } else if (userTotal > random) {
            defeat();
        }
    })

    $('#two').on('click', function () {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == random) {
            victory();
        } else if (userTotal > random) {
            defeat();
        }
    })

    $('#three').on('click', function () {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);



        if (userTotal == random) {
            victory();
        } else if (userTotal > random) {
            defeat();
        }
    })
    $('#four').on('click', function () {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == random) {
            victory();
        } else if (userTotal > random) {
            defeat();
        }
    });
});