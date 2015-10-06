
        /*        HOT OR COLD Application     */
        /*        Done by: Pavan Kumar Kodali */

         $(document).ready(function(){

        /*--------- creating variables ---------------*/

             var secretNumber = 0;
             var userGuess = 0;
             var guessCount = 0;
             var finish = false;

        /*--------- Display information modal box --------*/
            $(".what").click(function(){
                $(".overlay").fadeIn(1000);
            });

        /*---------- Hide information modal box -----------*/

            $("a.close").click(function(){
                $(".overlay").fadeOut(1000);
               // console.log("clicking");
            });

         /*--------- Random Number creation method -----------*/
             function secretNumberGenerator(){
             secretNumber = (Math.floor(Math.random()*100));
                 console.log("Secret Number =" + secretNumber);
             }
             secretNumberGenerator();


        /*------- Start a new game--------*/

        $(".new").click(function(){
        newGame();
            console.log("checking newgame click");
        });  
             function newGame(){
             guessCount = 0;
                 finish = false;
                 $('#userGuess').val('');
             $('#count').text(guessCount);
             $("#guessList li").remove();
                 secretNumber = (Math.floor(Math.random()*100));
             setFeedback("Make your guess!!");
                 console.log("works fine !! new secret number is " + secretNumber);
             }

        /*------------Number of attempts by the user  ---------------------*/   
             function setCount(){
             $("#count").text(guessCount);
             }
         /*------------------Feedback message to the user--------------------------*/ 
             function setFeedback(feedback) {
             $("#feedback").text(feedback);
             }
          /*------------substraction method goes from here----------------*/
          /*-------------when substraction is positive-------------------------------*/  
             function positiveAmount(){
             if(userGuess / secretNumber === 1){
             setFeedback("Congrats !! You Win");
                 finish = true;
             }
                 else if((secretNumber - userGuess) > 60.5){
                 setFeedback("Its Freezing!!");
                 }
                 else if((secretNumber - userGuess) > 50.5){
                 setFeedback("Its cold out there !! Put some coat on!!");
                 }
                 else if((secretNumber - userGuess) > 40.5){
                 setFeedback("Its cold!!");
                 }
                 else if((secretNumber - userGuess) > 30.5){
                 setFeedback("Its getting warm here!!");
                 }
                 else if((secretNumber - userGuess) > 20.5){
                 setFeedback("Its Freezing!!");
                 }
                 else if((secretNumber - userGuess) > 15.5){
                 setFeedback("Its getting warm !!");
                 }
                 else if((secretNumber - userGuess) > 10.5){
                 setFeedback("Its warm!!");
                 }
                 else if((secretNumber - userGuess) > 0.5){
                 setFeedback("Its hotter now !!");
                 }
                 else {

                 }
             }

             /*-------------when substraction is negative-------------------------------*/  
             function negativeAmount(){
             if(userGuess / secretNumber === 1){
             setFeedback("Congrats !! You Win");
                 finish = true;
             }
                 else if((userGuess - secretNumber) > 60.5){
                 setFeedback("Its Freezing!!");
                 }
                 else if((userGuess - secretNumber) > 50.5){
                 setFeedback("Its cold out there !! Put some coat on!!");
                 }
                 else if((userGuess - secretNumber) > 40.5){
                 setFeedback("Its cold!!");
                 }
                 else if((userGuess - secretNumber) > 30.5){
                 setFeedback("Its getting warm here!!");
                 }
                 else if((userGuess - secretNumber) > 20.5){
                 setFeedback("Its Freezing!!");
                 }
                 else if((userGuess - secretNumber) > 15.5){
                 setFeedback("Its getting warm !!");
                 }
                 else if((userGuess - secretNumber) > 10.5){
                 setFeedback("Its warm!!");
                 }
                 else if((userGuess - secretNumber) > 0.5){
                 setFeedback("Its hotter now !!");
                 }
                 else {

                 }
             }

             /*---------------comparison if the diff is positive or negative-------------------*/

             function comparison() {
             if(userGuess - secretNumber > 0) {
             negativeAmount();
             }
             else {
                 positiveAmount();
             }
             }


        /*---------------check users input --------------------------*/
             function checkInput(){
             if(isNaN(userGuess)) {
             alert("Please enter a number from 1 to 100!");

             } else if(userGuess === "") {
             alert("Please enter Something!!");
             }
                 else if(userGuess < 0 || userGuess > 100) {
                 alert("Please enter a number from 1 to 100!");
                 }
                 else {
                 comparison();
                 console.log("User guess" + userGuess);
                     $("#userGuess").val();
                     guessCount++;
                     setCount(guessCount);
                     $('ul#guessList').append("<li>" + userGuess + "<li>");
                 }

             }



        /*--------------preventDefault after user finishes the game--------------------------*/

        $("form").submit(function(e){
        e.preventDefault();
        if(!finish) {
            userGuess = $("#userGuess").val();
            checkInput();
        }
            else {
            setFeedback("Please Restart the Game and Play again!!");
            }
        });




        });




