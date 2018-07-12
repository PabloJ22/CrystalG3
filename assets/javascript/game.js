// $(document).ready(function ()======== tiz a must 
$(document).ready(function () {

    // created variable that generates a random SUPERNUMBER between 35 and 100
    var superNumber = Math.floor((Math.random() * 100) + 35);
    // prints SUPERNUMBER to screen
    $("#randomNumber").text(superNumber);


    // variables
    var wins = 0;
    var losses = 0;
    var userTotal = 0;

    //these variables generate a random number for each of the four crystal images
    var num1 = Math.floor(Math.random() * 20 + 7);
    var num2 = Math.floor(Math.random() * 20 + 7);
    var num3 = Math.floor(Math.random() * 20 + 7);
    var num4 = Math.floor(Math.random() * 20 + 7);

    // allows variables to show on screen
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    $("#finalTotal").text(userTotal);


    //reset function
    function reset() {
        superNumber = Math.floor((Math.random() * 100) + 35);

        $('#randomNumber').text(superNumber);
        num1 = Math.floor(Math.random() * 20 + 7);
        num2 = Math.floor(Math.random() * 20 + 7);
        num3 = Math.floor(Math.random() * 20 + 7);
        num4 = Math.floor(Math.random() * 20 + 7);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }


    //win & lose functions
    function victory() {
        alert("HOT DAM MAN! you win!!! ^~^");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function lose() {
        alert("TOO MUCH TOO MUCH!!! you lose.. :o");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }


    //functions X4 for each crystal image to react to the click and execute end game funtion

    $("#one").on("click", function () {
        userTotal = userTotal + num1;
        $("#finalTotal").text(userTotal);
        if (userTotal == superNumber) {
            victory();
        } else if (userTotal > superNumber) {
            lose();
        };


    });


    $("#two").on("click", function () {
        userTotal = userTotal + num2;
        $("#finalTotal").text(userTotal);
        if (userTotal == superNumber) {
            victory();
        } else if (userTotal > superNumber) {
            lose();
        };


    });



    $("#three").on("click", function () {
        userTotal = userTotal + num3;
        $("#finalTotal").text(userTotal);
        if (userTotal == superNumber) {
            victory();
        } else if (userTotal > superNumber) {
            lose();
        };


    });


    $("#four").on("click", function () {
        userTotal = userTotal + num4;
        $("#finalTotal").text(userTotal);
        if (userTotal == superNumber) {
            victory();
        } else if (userTotal > superNumber) {
            lose();
        };


    });

});