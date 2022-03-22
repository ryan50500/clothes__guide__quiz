document.addEventListener("DOMContentLoaded", function() {
 

    let queryString1;
    let queryString2;
    let queryString3;
 
    // recommendation image displayed to user
    let recommendationImage = document.querySelector('#finalresult__image');
    // shop now button
    let shopNowButton = document.getElementById('shop__now');
        // randomly selected value
    let randomSelected;
 

    // add border when image is clicked
    const checkboxContainers = document.getElementsByClassName('container');
    for (let i = 0; i < checkboxContainers.length; i++) {
        checkboxContainers[i].addEventListener('click', function() {
            const currentQuestion = this.closest('.question');
            // if current question has images then continue
            // if (currentQuestion.querySelectorAll('.container .question__image')) {
            const checkboxWithImage = currentQuestion.querySelectorAll('.container .question__image img');
            // get all checkboxes with images only, and remove the border from each.
            for (let i = 0; i < checkboxWithImage.length; i++) {
                checkboxWithImage[i].style.borderColor = 'transparent';
            }
            // if the question has images , add the border color when clicked
            // if (this.querySelector('.question__image img')) {
            if (this.querySelector('input').checked === true) {
                this.querySelector('.question__image img').style.border = '4px solid black';
                this.querySelector('.question__image img').style.borderColor = 'black';
            }
            // }
            // }
        });
    }
 
    // hide error message and red border
    const options = document.querySelectorAll('.container input');
    for (let i = 0; i < options.length; i++) {
        // when an option is selected by user
        options[i].addEventListener('change', function() {
            if (this.checked) {
                // find current question
                const currentQuestion = this.closest(".question");
                // hide current error message
                currentQuestion.querySelector('.error__message').style.visibility = 'hidden';
                const currentCheckboxes = this.closest(".question").querySelectorAll('.container .checkmark');
                for (let i = 0; i < currentCheckboxes.length; i++) {
                    currentCheckboxes[i].style.border = '1px solid black';
                }
            }
        });
    }
 
    // Next question button
    // Get all Next buttons and loop through them
    const nextButtons = document.querySelectorAll('.next__button');
    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', function() {
            // Whichever Next button is clicked, go up DOM tree and find which question it is with '.closest()' method.
            const currentQuestion = this.closest(".question");
            // 'isNotChecked' will be assigned to true if no boxes are ticked.
            const nothingChecked = currentQuestion.querySelectorAll('.container input:checked').length === 0 ? true : false;
            // if no boxes are ticked, set it to True..
            if (nothingChecked) {
                console.log('nothing checked');
                // show error message
                currentQuestion.querySelector('.error__message').style.visibility = 'visible';
                // get current options in question
                const currentOptions = currentQuestion.querySelectorAll('.container .question__image img');
                //  apply red border to all images
                for (let i = 0; i < currentOptions.length; i++) {
                    currentOptions[i].style.borderColor = '#D65449';
                }
            } else {
                console.log('an option was checked');
                currentQuestion.querySelector('.error__message').style.visibility = 'hidden';
                // if there is another next question
                if (currentQuestion.nextElementSibling) {
                    // bring in the next question
                    currentQuestion.nextElementSibling.style.transform = "translate(0,0)";
                    // remove the current question
                    currentQuestion.style.transform = "translate(-100%,0)";
                }
            }
        });
    }
 

    // Prev question
    // Get all Prev buttons
    const prevButtons = document.querySelectorAll('.prev__button');
    // Go to Previous Question on click
    for (let i = 0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener('click', function() {
            // Whichever Previous button is clicked, go up DOM tree and find which question it is with '.closest()' method.
            const currentQuestion = this.closest(".question");
            // bring back the previous question
            currentQuestion.previousElementSibling.style.transform = "translateX(0)";
            // remove the current question
            currentQuestion.style.transform = "translate(100%,0)";
        });
    }
 

    // close quiz when cross is clicked
    const cross = document.getElementsByClassName('cross')[0];
    cross.addEventListener('click', function() {
        // allow body to scroll default
        document.querySelector('body').style.overflow = 'auto';
        // close quiz
        document.getElementById('quiz-app').classList.toggle('hide__quiz');
        // hide all error messages
        $('.error__message').css('visibility', 'hidden');
        ///make all checkboxes not checked
        $('input').prop('checked', false);
        // remove red borders from all options
        const allOptions = document.querySelectorAll('.container .question__image img');
        for (let i = 0; i < allOptions.length; i++) {
            allOptions[i].style.borderColor = 'transparent';
        }
        // set all question divs back to original position so they are off the screen (except the first question which we want to show)
        const allQuestions = document.querySelectorAll('#quiz-app .question');
        for (let i = 0; i < allQuestions.length; i++) {
            allQuestions[i].style.transform = "translate(100%,0)";
        }
        // remove results image image class
        recommendationImage.className = '';
        // set question one to show first
        const questionOne = document.querySelector('#quiz-app .question.one');
        questionOne.style.transform = "translate(0,0)";
        questionOne.style.left = "0";
        // hide result
        document.getElementById('finalresult').style.display = "none";
 
    });
 

    // first next button click
    document.getElementById('button__one').addEventListener('click', function() {
        if (document.getElementById('i__do').checked === true) {
            queryString1 = '/c/men/suits';
        } else if (document.getElementById('the__races').checked === true) {
            queryString1 = '/c/men/suits'
        } else if (document.getElementById('that__promotion').checked === true) {
            queryString1 = '/c/men/suits'
        } else if (document.getElementById('prom__ready').checked === true) {
            queryString1 = '/c/men/suits'
        }
        console.log(queryString1);
    });
 

    // second next button click
    document.getElementById('button__two').addEventListener('click', function() {
        if (document.getElementById('slim__style').checked === true) {
            queryString2 = '?f-fit=slim-fit'
            // load slim images
            const slimImages = document.querySelectorAll('div[class^="slim__"]');
            for (let i = 0; i < slimImages.length; i++) {
                slimImages[i].parentElement.style.display = "block";
            }
        } else if (document.getElementById('skinny__style').checked === true) {
            queryString2 = '?f-fit=skinny-fit'
            // load skinny images
            const skinnyImages = document.querySelectorAll('div[class^="skinny__"]');
            for (let i = 0; i < skinnyImages.length; i++) {
                skinnyImages[i].parentElement.style.display = "block";
            }
        } else if (document.getElementById('big__tall').checked === true) {
            queryString2 = '?f-fit=big--tall'
            // load big-tall images
            const bigTallImages = document.querySelectorAll('div[class^="big__tall"]');
            for (let i = 0; i < bigTallImages.length; i++) {
                bigTallImages[i].parentElement.style.display = "block";
            }
        }
        console.log(queryString2);
    });
    // third next button click
    document.querySelector('.show__results').addEventListener('click', function() {
        if (document.getElementById('navy').checked === true) {
            queryString3 = '&f-colour=navy';
        } else if (document.getElementById('classic__black').checked === true) {
            queryString3 = '&f-colour=black';
        } else if (document.getElementById('grey__goes').checked === true) {
            queryString3 = '&f-colour=grey';
        } else if (document.getElementById('surprise__me').checked === true) {
 
           getRandomValue();
        //    console.log('get random has been called');
 
            // get the random value from 'surprise me' option
            function getRandomValue() {
                // randomly get one of the array values
                let randomValues = ["&f-colour=beige", "&f-colour=blue", "&f-colour=brown", "&f-colour=green"];
                // set querystring3 to the random value
                    randomSelected = randomValues[Math.floor(Math.random() * randomValues.length)];
 
                    console.log('random selected is' + randomSelected);
 
                    queryString3 = randomSelected;
 
                    console.log('query string 3 is' + queryString3);
 
                if (queryString2.includes("fit=big--tall") && queryString3.includes("beige")) {
                    console.log('big tall - beige brown or green not available');
                    getRandomValue();
                } else if (queryString2.includes("fit=big--tall") && queryString3.includes("brown")) {
                    console.log('big tall - beige brown or green not available');
                    getRandomValue();
                } else if (queryString2.includes("fit=big--tall") && queryString3.includes("green")) {
                    console.log('big tall - beige brown or green not available');
                    getRandomValue();
                } else if (queryString2.includes("skinny-fit") && queryString3.includes("beige")) {
                    console.log('skinny beige not available');
                    getRandomValue();
                } else if (queryString2.includes("skinny-fit") && queryString3.includes("green")) {
                    console.log('skinny green not available');
                    getRandomValue();
                } else if (queryString2.includes("skinny-fit") && queryString3.includes("brown")) {
                    console.log('skinny brown IS AVAILABLE :)');
                }
            }
        }
 
            // console log the random value
            // console.log('this is the random....' + queryString3);
 
        // check if the final question has an option selected. If no boxes are ticked, set it to True..
        const nothingChecked = document.querySelectorAll('.question.three input:checked').length === 0 ? true : false;
        // if no boxes are ticked, exit the function.
        if (nothingChecked) {
            return;
        } else {
            console.log('clicked');
            getResult();
        }
    });
 

    function getResult() {
        // don't allow user to scroll
        document.querySelector('body').style.overflow = 'hidden';
        // add up the URL params of each queston and put it into variable called 'res'
        let finalURL = (queryString1 + queryString2 + queryString3);
        console.log(finalURL);
        // display correct link
        shopNowButton.setAttribute('href', 'https://www.riverisland.com' + finalURL);
        // if URL string contains slim navy...
        if (finalURL.includes("slim-fit") && finalURL.includes("navy")) {
            // display correct image
            recommendationImage.classList.add('slim__navy');
        }
        // if URL string contains slim black...
        else if (finalURL.includes("slim-fit") && finalURL.includes("black")) {
            // display correct image
            recommendationImage.classList.add('slim__black');
        }
        // if URL string contains slim grey...
        else if (finalURL.includes("slim-fit") && finalURL.includes("grey")) {
            // display correct image
            recommendationImage.classList.add('slim__grey');
        }
        // if URL string contains slim beige...
        else if (finalURL.includes("slim-fit") && finalURL.includes("beige")) {
            // display correct image
            recommendationImage.classList.add('slim__beige');
        }
        // if URL string contains slim blue...
        else if (finalURL.includes("slim-fit") && finalURL.includes("blue")) {
            // display correct image
            recommendationImage.classList.add('slim__blue');
        }
        // if URL string contains slim brown...
        else if (finalURL.includes("slim-fit") && finalURL.includes("brown")) {
            // display correct image
            recommendationImage.classList.add('slim__brown');
        }
        // if URL string contains slim green...
        else if (finalURL.includes("slim-fit") && finalURL.includes("green")) {
            // display correct image
            recommendationImage.classList.add('slim__green');
        }
        // if URL string contains skinny navy...
        else if (finalURL.includes("skinny-fit") && finalURL.includes("navy")) {
            // display correct image
            recommendationImage.classList.add('skinny__navy');
        }
        // if URL string contains skinny black...
        else if (finalURL.includes("skinny-fit") && finalURL.includes("black")) {
            // display correct image
            recommendationImage.classList.add('skinny__black');
        }
        // if URL string contains skinny grey...
        else if (finalURL.includes("skinny-fit") && finalURL.includes("grey")) {
            // display correct image
            recommendationImage.classList.add('skinny__grey');
        }
        // if URL string contains skinny blue...
        else if (finalURL.includes("skinny-fit") && finalURL.includes("blue")) {
            // display correct image
            recommendationImage.classList.add('skinny__blue');
        }
        // if URL string contains skinny brown...
        else if (finalURL.includes("skinny-fit") && finalURL.includes("brown")) {
            // display correct image
            recommendationImage.classList.add('skinny__brown');
        }
 
        // if URL string contains big & tall navy...
        else if (finalURL.includes("fit=big--tall") && finalURL.includes("navy")) {
            // display correct image
            recommendationImage.classList.add('big__tall__navy');
        }
        // if URL string contains big & tall black...
        else if (finalURL.includes("fit=big--tall") && finalURL.includes("black")) {
            // display correct image
            recommendationImage.classList.add('big__tall__black');
        }
        // if URL string contains big & tall grey...
        else if (finalURL.includes("fit=big--tall") && finalURL.includes("grey")) {
            // display correct image
            recommendationImage.classList.add('big__tall__grey');
        }
        // if URL string contains big & tall blue...
        else if (finalURL.includes("fit=big--tall") && finalURL.includes("blue")) {
            // display correct image
            recommendationImage.classList.add('big__tall__blue');
        }
        document.getElementById('finalresult').style.display = 'flex';
        document.getElementById('finalresult').style.visibility = 'visible';
    }
});