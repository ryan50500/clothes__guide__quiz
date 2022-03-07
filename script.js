document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('finalresult').style.display = 'flex';

    // load results images earlier, so results image doesn't load slowly for the user.
    setTimeout(function(){
        const allImages = document.querySelectorAll('.hidden__image');
        for (let i=0; i < allImages.length; i++) {
            allImages[i].style.display = "block";
        }
    }, 3000);


    // add border when image is clicked
    const checkboxContainers = document.getElementsByClassName('container');
    for (let i=0; i < checkboxContainers.length; i++) {
        checkboxContainers[i].addEventListener('click', function(){
            const currentQuestion = this.closest('.question');
            // if current question has images then continue
            if (currentQuestion.querySelectorAll('.container .question__image')){
                const checkboxWithImage = currentQuestion.querySelectorAll('.container .question__image');
                // get all checkboxes with images only, and remove the border from each.
                 for (let i=0; i < checkboxWithImage.length; i++) {
                    checkboxWithImage[i].style.border = 'none';
                }
                //  if the question has images , add the border when clicked
                if (this.querySelector('.question__image')) {
                    if ( this.querySelector('input').checked === true) {
                        this.querySelector('.question__image').style.border = '2px solid black';
                    }
               }
            }
        });
    }
    
        // hide error message and red border
        const options = document.querySelectorAll('.container input');
        for (let i=0; i < options.length; i++) {
            // when an option is selected by user
            options[i].addEventListener('change', function() {
            if (this.checked) {
                // find current question
                const currentQuestion = this.closest(".question");
                // hide current error message
                currentQuestion.querySelector('.error__message').style.visibility = 'hidden';
                const currentCheckboxes = this.closest(".question").querySelectorAll('.container .checkmark');
                for (let i=0; i < currentCheckboxes.length; i++) {
                    currentCheckboxes[i].style.border = '1px solid black';
                }
            } 
        });
    }
    
    
    
    // Next question 
    // Get all Next buttons 
    const nextButtons = document.querySelectorAll('.next__button');
    for (let i=0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', function(){
            // Whichever Next button is clicked, go up DOM tree and find which question it is with '.closest()' method.
            const currentQuestion = this.closest(".question");
                //  'isNotChecked' will be assigned to true if no boxes are ticked.
                const nothingChecked = currentQuestion.querySelectorAll('.container input:checked').length === 0 ? true : false;
                    // if no boxes are ticked, set it to True..
                    if (nothingChecked) {
                        console.log('nothing checked');
                        // show error message
                        currentQuestion.querySelector('.error__message').style.visibility = 'visible';
                          // show Checkboxes as red if not selected
                        const CurrentCheckboxes = currentQuestion.querySelectorAll('.container .checkmark')
                        for (let i=0; i < CurrentCheckboxes.length; i++) {
                            CurrentCheckboxes[i].style.border = '2px solid #D65449';
                        }
                        // get current options in question
                        const currentOptions = currentQuestion.querySelectorAll('.container .question__image');
                        for (let i=0; i < currentOptions.length; i++) {
                            currentOptions[i].style.border = '2px solid #D65449';
                        }
                    }
                    else {
                        console.log('an option was checked');
                        currentQuestion.querySelector('.error__message').style.visibility = 'hidden';
                        // if there is another next question
                        if(currentQuestion.nextElementSibling){
                            // bring in the next question
                            currentQuestion.nextElementSibling.style.left = "0";
                            // remove the current question
                            currentQuestion.style.left = "-100%";
                        }
                    }
        });
    }
    
    
    // Prev question 
    // Get all Prev buttons 
    const prevButtons = document.querySelectorAll('.prev__button');
    // Go to Previous Question on click
    for (let i=0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener('click', function(){
            // Whichever Previous button is clicked, go up DOM tree and find which question it is with '.closest()' method.
            const currentQuestion = this.closest(".question");
              // bring back the previous question
              currentQuestion.previousElementSibling.style.left = "0"
             // remove the current question
              currentQuestion.style.left = "100%"
    
        });
    }
    
    
    // close quiz when cross is clicked
    const cross = document.getElementsByClassName('cross')[0];
        cross.addEventListener('click', function(){
            // close quiz
            document.getElementById('quiz-app').style.display = "none";
            // hide all error messages
            $('.error__message').css('visibility', 'hidden');
            ///make all checkboxes not checked 
            $('input').prop('checked', false);
        // unselect all images
        $('.question__image').css('border', 'none');
            // remove red borders from all checkmarks
            const allCheckboxes = document.querySelectorAll('.container span.checkmark')
            for (let i=0; i < allCheckboxes.length; i++) {
                allCheckboxes[i].style.border = '1px solid black';
            }
            // set all question divs back to original position so they are off the screen (except the first question which we want to show!)
            $(".question").not(".question.one").css('left', '100%');
            $(".question.one").css('left', '0');
            // hide result
            document.getElementById('finalresult').style.display = "none";
        });
    
    
    
        let question1;
        let question2;
        let question3;
        let question4;
        let question5;
        let question6;
       
    
        // first next button click
        document.getElementById('button__one').addEventListener('click', function(){
            if ( document.getElementById('tighter__side').checked === true) {
                question1 = '1';
              }
              else if (document.getElementById('just__right').checked === true) {
                  question1 = '2'
              }
              else if (document.getElementById('keep__it__loose').checked === true) {
                 question1 = '3'
             }
             console.log(question1);
        });
        
        
      
     
         // second next button click
         document.getElementById('button__two').addEventListener('click', function(){
           if (document.getElementById('all__for__it').checked === true) {
              question2 = '1'
           }
           else if (document.getElementById('just__a__hint').checked === true) {
               question2 = '2'
           }
           else if (document.getElementById('keep__it__hidden').checked === true) {
              question2 = '3'
          }
          console.log(question2);
        });
    
       
      
       
          // third next button click
          document.getElementById('button__three').addEventListener('click', function(){
           if (document.getElementById('drink__of__water').checked === true) {
              question3 = '1'
           }
           else if (document.getElementById('like__an__hourglass').checked === true) {
               question3 = '2'
           }
           else if (document.getElementById('hips__dont__lie').checked === true) {
              question3 = '3'
          }
          console.log(question3);
        });
     
       
     
     
     
          // fourth next button click
          document.getElementById('button__four').addEventListener('click', function(){
           if (document.getElementById('i__need__more').checked === true) {
              question4 = '1'
           }
           else if (document.getElementById('as__it__comes').checked === true) {
               question4 = '2'
           }
           else if (document.getElementById('show__off').checked === true) {
              question4 = '3'
          }
          console.log(question4);
        });
    
     
     
     
           // fifth next button click
           document.getElementById('button__five').addEventListener('click', function(){
           if (document.getElementById('bleach').checked === true) {
              question5 = '1'
           }
           else if (document.getElementById('true__blue').checked === true) {
               question5 = '2'
           }
           else if (document.getElementById('dark__as').checked === true) {
              question5 = '3'
          }
          console.log(question5);
        });
         
        
     
     
           // sixth next button click
           document.getElementById('show__results').addEventListener('click', function(){
           if (document.getElementById('serious__peach').checked === true) {
              question6 = '1'
           }
           else if (document.getElementById('no__complaints').checked === true) {
               question6 = '2'
           }
           else if (document.getElementById('a__lift').checked === true) {
              question6 = '3'
          }
          console.log(question6);
        //  check if the final question has an option selected. If no boxes are ticked, set it to True..
          const nothingChecked = document.querySelectorAll('.question.six input:checked').length === 0 ? true : false;
             // if no boxes are ticked, exit the function.
            if (nothingChecked) {
                return;
            }
            else {
                // hide the last question so we can display results
                document.querySelector('.question.six').style.display = 'none';
                getResult();
            }
         });
     
    
    
         function getResult(){
    
        //  add up the string values of each queston and put it into variable called 'res'
         let res = (question1 + question2 + question3 + question4 + question5 + question6);
         console.log(res);
    
         document.getElementById('finalresult').style.display = 'flex';
         document.getElementById('finalresult').style.visibility = 'visible';
     
        // 1st outcome
        if ((res==='121111')||(res==='121112')||(res ==='121113')||(res === '121211')||(res==='121212')||(res==='121213')||(res==='121311')||(res==='121312')||(res==='121313')||(res==='121313')||(res==='121313')||(res==='122111')||(res==='122112')||(res==='122113')||(res==='122312')||(res==='122211')||(res==='122212')||(res==='122213')||(res==='122313')||(res==='123111')||(res==='123112')||(res==='123112')||(res==='123113')||(res==='123211')||(res==='123212')||(res==='123213')||(res==='123311')||(res==='123312')||(res==='123313')||(res==='131111')||(res==='131112')||(res==='131121')||(res==='131121')||(res==='131122')||(res==='131122')||(res==='131211')||(res==='131212')||(res==='131221')||(res==='131222')||(res==='131311')||(res==='131311')||(res==='131312')||(res==='131312')||(res==='131321')||(res==='131322')||(res==='132111')||(res==='132112')||(res==='132121')||(res==='132122')||(res==='132211')||(res==='132211')||(res==='132212')||(res==='132221')||(res==='132222')||(res==='132311')||(res==='132312')||(res==='132321')||(res==='133111')||(res==='133112')||(res==='133121')||(res==='133122')||(res==='133211')||(res==='133212')||(res==='133221')||(res==='133312')||(res==='133321')||(res==='133322')||(res==='133311')||(res==='133222')) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "", "", "", "", "", "", "", "", "", "", "",                                                                                                                                  "", "", "", "", "", "",                                         
              document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the <span class="new__line">MOLLY</span>';
              document.querySelector('.finalresult__image').classList.add('res__one');
              document.querySelector('#finalresult__text span').innerHTML = 'Always tight, always right, the Molly is the perfect match for those who’ve got it – and flaunt it.';
              document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Molly jeans';
              document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-fit=bum-sculpt&f-cat=jeggings&f-cat=skinny-jeans');
              document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');
             
        }
         // 2nd outcome
        else if ((res==='121123')||(res==='121223')||(res==='121323')||(res==='122123')||(res==='122223')||(res==='122323')||(res==='123123')||(res==='123223')||(res==='123323')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the MOLLY';
            document.querySelector('.finalresult__image').classList.add('res__two');
            document.querySelector('#finalresult__text span').innerHTML = 'Always tight, always right. We would recommend the Blue Molly mid rise bum sculpt jeans.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Molly jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-fit=bum-sculpt&f-cat=jeggings&f-cat=skinny-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');

        }
         // 3rd outcome
        else if ((res==='121133')||(res==='121233')||(res==='121333')||(res==='122133')||(res==='122233')||(res==='122333')||(res==='123133')||(res==='123233')||(res==='123333')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the MOLLY';
            document.querySelector('.finalresult__image').classList.add('res__three');
            document.querySelector('#finalresult__text span').innerHTML = 'Always tight, always right. We would recommend the Black Molly mid rise bum sculpt jeans.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Molly jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-fit=bum-sculpt&f-cat=jeggings&f-cat=skinny-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');         }
        // 4th outcome
        else if ((res==='111111')||(res==='111112')||(res==='111113')||(res==='111211')||(res==='111212')||(res==='111213')||(res==='111311')||(res==='111312')||(res==='111313')||(res==='112111')||(res==='112112')||(res==='112113')||(res==='112211')||(res==='112212')||(res==='112213')||(res==='112311')||(res==='112312')||(res==='112313')||(res==='113111')||(res==='113112')||(res==='113113')||(res==='113211')||(res==='113212')||(res==='113213')||(res==='113311')||(res==='113312')||(res==='113313')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the SKINNY';
            document.querySelector('.finalresult__image').classList.add('res__four');
            document.querySelector('#finalresult__text span').innerHTML = 'Always tight, always right. We would recommend the Grey low rise bum sculpt jeans.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Skinny jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-cat=skinny-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');   
         }
          // 5th outcome
        else if ((res==='111121')||(res==='111122')||(res==='111123')||(res==='111131')||(res==='111132')||(res==='111133')||(res==='111221')||(res==='111222')||(res==='111223')||(res==='111231')||(res==='111232')||(res==='111233')||(res==='111321')||(res==='111322')||(res==='111323')||(res==='111331')||(res==='111332')||(res==='111333')||(res==='112121')||(res==='112122')||(res==='112123')||(res==='112131')||(res==='112132')||(res==='112133')||(res==='112221')||(res==='112222')||(res==='112223')||(res==='112231')||(res==='112232')||(res==='112233')||(res==='112321')||(res==='112322')||(res==='112323')||(res==='112331')||(res==='112332')||(res==='112333')||(res==='113121')||(res==='113122')||(res==='113123')||(res==='113131')||(res==='113132')||(res==='113133')||(res==='113221')||(res==='11222')||(res==='113223')||(res==='113231')||(res==='113232')||(res==='113233')||(res==='113321')||(res==='113322')||(res==='113323')||(res==='113331')||(res==='113332')||(res==='113333')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the SKINNY';
            document.querySelector('.finalresult__image').classList.add('res__five');
            document.querySelector('#finalresult__text span').innerHTML = 'Always tight, always right. We would recommend the Blue ripped low rise bum sculpt skinny jeans.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Skinny jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-cat=skinny-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');
        }
          // 6th outcome
        else if ((res==='121121')||(res==='121122')||(res==='121131')||(res==='121132')||(res==='121221')||(res==='121222')||(res==='121231')||(res==='121232')||(res==='121321')||(res==='121322')||(res==='121331')||(res==='121332')||(res==='122121')||(res==='122122')||(res==='122131')||(res==='122132')||(res==='122221')||(res==='122222')||(res==='122231')||(res==='122232')||(res==='122321')||(res==='122322')||(res==='122331')||(res==='122332')||(res==='123121')||(res==='123122')||(res==='123131')||(res==='123132')||(res==='123221')||(res==='123222')||(res==='123231')||(res==='999')||(res==='123232')||(res==='123321')||(res==='123322')||(res==='123331')||(res==='123332')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the SKINNY';
            document.querySelector('.finalresult__image').classList.add('res__six');
            document.querySelector('#finalresult__text span').innerHTML = 'Always tight, always right. We would recommend the Blue mid rise skinny.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Skinny jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-cat=skinny-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');
        }
            // 7th outcome
        else if ((res==='131113')||(res==='131123')||(res==='131213')||(res==='131223')||(res==='131313')||(res==='131323')||(res==='132113')||(res==='132123')||(res==='132213')||(res==='132223')||(res==='132313')||(res==='132323')||(res==='133113')||(res==='133123')||(res==='133213')||(res==='133223')||(res==='133313')||(res==='133323')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the SKINNY';
            document.querySelector('.finalresult__image').classList.add('res__seven');
            document.querySelector('#finalresult__text span').innerHTML = 'Always tight, always right. We would recommend the Blue high waisted skinny bum sculpt jeans';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Skinny jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-fit=bum-sculpt&f-colour=blue&f-cat=skinny-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');
        }
             // 8th outcome
        else if ((res==='131131')||(res==='131132')||(res==='131133')||(res==='131231')||(res==='131232')||(res==='131233')||(res==='131331')||(res==='131332')||(res==='131333')||(res==='132131')||(res==='132132')||(res==='132133')||(res==='132231')||(res==='132232')||(res==='132233')||(res==='132331')||(res==='132332')||(res==='132333')||(res==='133131')||(res==='133132')||(res==='133133')||(res==='133231')||(res==='133232')||(res==='133233')||(res==='133331')||(res==='133332')||(res==='133333')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the SKINNY';
            document.querySelector('.finalresult__image').classList.add('res__eight');
            document.querySelector('#finalresult__text span').innerHTML = 'Always tight, always right. We would recommend the Dark blue high waisted skinny jeans.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Skinny jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-fit=bum-sculpt&f-colour=blue&f-cat=skinny-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');         }
            // 9th outcome
        else if ((res==='211111')||(res==='211112')||(res==='211113')||(res==='211121')||(res==='211122')||(res==='211123')||(res==='211131')||(res==='211132')||(res==='211133')||(res==='211211')||(res==='211212')||(res==='211213')||(res==='211221')||(res==='211222'||(res==='211223'))||(res==='211231')||(res==='211233')||(res==='211311')||(res==='211312')||(res==='211313')||(res==='211321')||(res==='211322')||(res==='211323')||(res==='211331')||(res==='211332')||(res==='211333')||(res==='212111')||(res==='212112')||(res==='212113')||(res==='212121')||(res==='212122')||(res==='212123')||(res==='212131')||(res==='212132')||(res==='212133')||(res==='212211')||(res==='212212')||(res==='212213')||(res==='212221')||(res==='212222')||(res==='212223')||(res==='212231')||(res==='212232')||(res==='212233')||(res==='212311')||(res==='212312')||(res==='212313')||(res==='212321')||(res==='212322')||(res==='212323')||(res==='212331')||(res==='212332')||(res==='212333')||(res==='213111')||(res==='213112')||(res==='213113')||(res==='213121')||(res==='213122')||(res==='213123')||(res==='213131')||(res==='213132')||(res==='213133')||(res==='213211')||(res==='213212')||(res==='213213')||(res==='213221')||(res==='213222')||(res==='213223')||(res==='213231')||(res==='213232')||(res==='213233')||(res==='213311')||(res==='213312')||(res==='213313')||(res==='213321')||(res==='213322')||(res==='213323')||(res==='213331')||(res==='213332')||(res==='213333')||(res==='221131')||(res==='221132')||(res==='221133')||(res==='221231')||(res==='221232')||(res==='221233')||(res==='221331')||(res==='221332')||(res==='221333')||(res==='222131')||(res==='222132')||(res==='222133')||(res==='222231')||(res==='222232')||(res==='222233')||(res==='222331')||(res==='222332')||(res==='222333')||(res==='223131')||(res==='223132')||(res==='223133')||(res==='223231')||(res==='223232')||(res==='223233')||(res==='223331')||(res==='223332')||(res==='223333')||(res==='231131')||(res==='231132')||(res==='231133')||(res==='231231')||(res==='231232')||(res==='231233')||(res==='231331')||(res==='231332')||(res==='231333')||(res==='232131')||(res==='232132')||(res==='232133')||(res==='232231')||(res==='232232')||(res==='232233')||(res==='232331')||(res==='232332')||(res==='232333')||(res==='233131')||(res==='233132')||(res==='233133')||(res==='233231')||(res==='233232')||(res==='233233')||(res==='233331')||(res==='233332')||(res==='233333')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the STRAIGHT';
            document.querySelector('.finalresult__image').classList.add('res__nine');
            document.querySelector('#finalresult__text span').innerHTML = 'All the cool of a Mom jean but with a hint of definition, nothing works harder than the Straight. It’s all about that 90s supermodel look.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Straight jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-cat=straight-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans'); 
        }
        // 10th outcome
        else if ((res==='221111')||(res==='221112')||(res==='221113')||(res==='221121')||(res==='221122')||(res==='221123')||(res==='221213')||(res==='221221')||(res==='221222')||(res==='221223')||(res==='221311')||(res==='221312')||(res==='221313')||(res==='221321')||(res==='221322')||(res==='221323')||(res==='222111')||(res==='222112')||(res==='222113')||(res==='222121')||(res==='222122')||(res==='222123')||(res==='222211')||(res==='222212')||(res==='222213')||(res==='222221')||(res==='222222')||(res==='222223')||(res==='222311')||(res==='222312')||(res==='222313')||(res==='222321')||(res==='222322')||(res==='222323')||(res==='223111')||(res==='223112')||(res==='223113')||(res==='223121')||(res==='223122')||(res==='223123')||(res==='223211')||(res==='223212')||(res==='223213')||(res==='223221')||(res==='223222')||(res==='223223')||(res==='223311')||(res==='223312')||(res==='223313')||(res==='223321')||(res==='223322')||(res==='223323')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the STRAIGHT';
            document.querySelector('.finalresult__image').classList.add('res__ten');
            document.querySelector('#finalresult__text span').innerHTML = 'It’s all about that 90s supermodel look. We would recommend the Blue mid rise straight leg jeans.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Straight jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-cat=straight-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');        }
        // 11th outcome
        else if ((res==='231111')||(res==='231112')||(res==='231113')||(res==='231211')||(res==='231212')||(res==='231213')||(res==='231311')||(res==='231312')||(res==='231313')||(res==='232111')||(res==='232112')||(res==='232113')||(res==='232211')||(res==='232212')||(res==='232213')||(res==='232311')||(res==='232312')||(res==='232313')||(res==='233111')||(res==='233112')||(res==='233113')||(res==='233211')||(res==='233212')||(res==='233213')||(res==='233311')||(res==='233312')||(res==='233313')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the STRAIGHT';
            document.querySelector('.finalresult__image').classList.add('res__eleven');
            document.querySelector('#finalresult__text span').innerHTML = 'It’s all about that 90s supermodel look. We would recommend the Light blue high waisted straight jeans.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Straight jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-colour=blue&f-cat=straight-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');          }
        // 12th outcome
        else if ((res==='231121')||(res==='231122')||(res==='231123')||(res==='231221')||(res==='231222')||(res==='231223')||(res==='231321')||(res==='231322')||(res==='231323')||(res==='232121')||(res==='232122')||(res==='232123')||(res==='232221')||(res==='232222')||(res==='232223')||(res==='232321')||(res==='232322')||(res==='232323')||(res==='233121')||(res==='233122')||(res==='233123')||(res==='233221')||(res==='233222')||(res==='233223')||(res==='233321')||(res==='233322')||(res==='233323')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the STRAIGHT';
            document.querySelector('.finalresult__image').classList.add('res__twelve');
            document.querySelector('#finalresult__text span').innerHTML = 'It’s all about that 90s supermodel look. We would recommend the Blue high waisted straight leg jeans.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Straight jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-colour=blue&f-cat=straight-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');          }
      // 13th outcome 
        else if ((res==='311111')||(res ==='311112')||(res === '311113')||(res==='311121')||(res ==='311122')||(res === '311123')||(res==='311131')||(res ==='311132')||(res === '311133')||(res==='311211')||(res ==='311212')||(res === '311213')||(res==='311221')||(res ==='311222')||(res === '311223')||(res==='311231')||(res ==='311232')||(res === '311233')||(res==='999')||(res ==='311311')||(res === '311312')||(res==='311313')||(res ==='311321')||(res === '311322')||(res==='311323')||(res ==='999')||(res === '311331')||(res==='311332')||(res ==='311333')||(res === '312111')||(res==='312112')||(res ==='312113')||(res === '312121')||(res==='312122')||(res ==='312123')||(res === '312131')||(res==='312132')||(res ==='312133')||(res === '312211')||(res==='312212')||(res ==='312213')||(res === '312221')||(res==='312222')||(res ==='312223')||(res === '312231')||(res==='312232')||(res ==='312233')||(res === '312311')||(res==='312312')||(res ==='312313')||(res === '312321')||(res==='312322')||(res ==='312323')||(res === '312331')||(res==='312332')||(res ==='312333')||(res === '313111')||(res==='313112')||(res ==='313113')||(res === '313121')||(res==='313122')||(res ==='313123')||(res === '313131')||(res==='313132')||(res ==='313133')||(res === '313211')||(res==='313212')||(res ==='313213')||(res === '313221')||(res==='313222')||(res ==='313223')||(res === '313231')||(res==='313232')||(res ==='313233')||(res === '313311')||(res==='313312')||(res ==='313313')||(res === '313321')||(res==='313322')||(res ==='313323')||(res === '313331')||(res==='313332')||(res ==='313333')||(res === '321111')||(res==='321112')||(res ==='321113')||(res === '321121')||(res==='321122')||(res ==='321123')||(res === '321131')||(res==='321132')||(res ==='321133')||(res === '321211')||(res==='321212')||(res ==='321213')||(res === '321221')||(res==='321222')||(res ==='321223')||(res === '321231')||(res==='321232')||(res ==='321233')||(res === '321311')||(res==='321312')||(res ==='321313')||(res === '321321')||(res==='321322')||(res ==='321323')||(res === '321331')||(res==='321332')||(res ==='321333')||(res === '322111')||(res==='322112')||(res ==='322113')||(res === '322121')||(res==='322122')||(res ==='322123')||(res === '322131')||(res==='322132')||(res ==='322133')||(res === '322211')||(res==='322212')||(res ==='322213')||(res === '322221')||(res==='322222')||(res ==='322223')||(res === '322231')||(res==='322232')||(res ==='322233')||(res === '322311')||(res==='322312')||(res ==='322313')||(res === '322321')||(res==='322322')||(res ==='322323')||(res === '322331')||(res==='322332')||(res ==='322333')||(res === '323111')||(res==='323112')||(res ==='323113')||(res === '323121')||(res==='323122')||(res ==='323123')||(res === '323131')||(res==='323132')||(res ==='323133')||(res === '323211')||(res==='323212')||(res ==='323213')||(res === '323221')||(res==='323222')||(res ==='323223')||(res === '323231')||(res==='323232')||(res ==='323233')||(res === '323311')||(res==='323312')||(res ==='323313')||(res === '323321')||(res==='323322')||(res ==='323323')||(res === '323331')||(res==='323332')||(res ==='323333')) {  
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the MOM';
            document.querySelector('.finalresult__image').classList.add('res__thirteen');
            document.querySelector('#finalresult__text span').innerHTML = 'Oh, the Mom was made for you. It’s the rebel’s choice: a little bit sexy, a little bit reckless. ';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Mom jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-cat=mom-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');         }
      // 14th outcome 
        else if ((res==='331111')||(res ==='331112')||(res==='331113')||(res ==='331121')||(res==='331122')||(res ==='331123')||(res==='331211')||(res ==='331212')||(res==='331213')||(res ==='331221')||(res==='331222')||(res ==='331223')||(res==='331311')||(res ==='331312')||(res==='331313')||(res ==='331321')||(res==='331322')||(res ==='331323')||(res==='332111')||(res ==='332112')||(res==='332113')||(res ==='332121')||(res==='332122')||(res ==='332123')||(res==='332211')||(res ==='332212')||(res==='332213')||(res ==='332221')||(res==='332222')||(res ==='332223')||(res==='332311')||(res ==='332312')||(res==='332313')||(res ==='332321')||(res==='332322')||(res ==='332323')||(res==='333111')||(res ==='333112')||(res==='333113')||(res ==='333121')||(res==='333122')||(res ==='333123')||(res==='333211')||(res ==='333212')||(res==='333213')||(res ==='333221')||(res==='333222')||(res ==='333223')||(res==='333311')||(res ==='333312')||(res==='333313')||(res ==='333321')||(res==='333322')||(res ==='333323')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the MOM';
            document.querySelector('.finalresult__image').classList.add('res__fourteen');
            document.querySelector('#finalresult__text span').innerHTML = ' A little bit sexy, a little bit reckless. We would recommend the Blue comfort mom jeans.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Mom jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-colour=blue&f-colour=cream&f-colour=white&f-cat=mom-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');            }
         // 15th outcome 
        else if ((res==='331131')||(res==='331132')||(res==='331133')||(res==='331231')||(res==='331232')||(res==='331233')||(res==='331331')||(res==='331332')||(res==='331333')||(res==='332131')||(res==='332132')||(res==='332133')||(res==='332231')||(res==='332232')||(res==='332233')||(res==='332331')||(res==='332332')||(res==='332333')||(res==='333131')||(res==='333132')||(res==='333133')||(res==='333231')||(res==='333232')||(res==='333233')||(res==='333331')||(res==='333332')||(res==='333333')) {
            document.querySelector('#finalresult__title span').innerHTML = 'Looks like you\'re the MOM';
            document.querySelector('.finalresult__image').classList.add('res__fifteen');
            document.querySelector('#finalresult__text span').innerHTML = 'A little bit sexy, a little bit reckless. We would recommend the Black washed high waisted Mom jeans.';
            document.querySelector('#finalresult__cat button span').innerHTML = 'Shop Mom jeans';
            document.getElementById('finalresult__rec').setAttribute('href', '/c/women/jeans?f-colour=black&f-colour=blue&f-cat=mom-jeans');
            document.querySelector('#finalresult__cat').setAttribute('href', '/c/women/jeans');           }
        else {
            return;
        }
    }
    
    
    
    
    
    
    });