

function getResult(){
 
    let question1;
    let question2;
    let question3;
    let question4;
    let question5;
    let question6;
   
    
    
    // for each question, depending on which answer is picked,  question1 will have a value of 1,2, or 3
     function questionOne(){
       if ( document.getElementById('tighter__side').checked === true) {
         question1 = 1;
       }
       else if (document.getElementById('just__right').checked === true) {
           question1 = 2
       }
       else {
          document.getElementById('result').style.backgroundColor = 'pink';
           question1 = 3
       }
     }
     questionOne();
   
  
 
     // we do the same again for each question,  question2 will have a value of 1,2, or 3
    function questionTwo(){
       if (document.getElementById('all__for__it').checked === true) {
          question2 = 1
       }
       else if (document.getElementById('just__a__hint').checked === true) {
           question2 = 2
       }
       else {
           question2 = 3
       }
     }
    questionTwo();
   
  
 
   
    function questionThree(){
       if (document.getElementById('drink__of__water').checked === true) {
          question3 = 1
       }
       else if (document.getElementById('like__an__hourglass').checked === true) {
           question3 = 2
       }
       else {
           question3 = 3
       }
     }
     questionThree();
   
 
 
 
 
     function questionFour(){
       if (document.getElementById('i__need__more').checked === true) {
          question4 = 1
       }
       else if (document.getElementById('as__it__comes').checked === true) {
           question4 = 2
       }
       else {
           question4 = 3
       }
     }
     questionFour();
 
 
 
 
     function questionFive(){
       if (document.getElementById('bleach').checked === true) {
          question5 = 1
       }
       else if (document.getElementById('true__blue').checked === true) {
           question5 = 2
       }
       else {
           question5 = 3
       }
     }
     questionFive();
    
 
 
 
     function questionSix(){
       if (document.getElementById('serious__peach').checked === true) {
          question6 = 1
       }
       else if (document.getElementById('no__complaints').checked === true) {
           question6 = 2
       }
       else {
           question6 = 3
       }
     }
     questionSix();
    
 
 
 
    //  add up the values of each queston and put it into variable called 'let'
     let res = (question1 + question2 + question3 + question4 + question5 + question6);
     console.log(res);
  
 
   
    if ((res===1)||(res === 6)||(res === 10))  {
        document.getElementById('finalresult').innerHTML = 'its five';
    }
    else if ((res===8)||(res === 9)||(res === 12)) {
       document.getElementById('finalresult').innerHTML = 'woooo';
       // document.getElementById('result').style.backgroundImage = "url('https://images.riverisland.com/is/image/RiverIsland/792382_main?wid=1200')";
    }
    // else if (question1 + question2 + question3 === 9 ) {
    //    document.getElementById('finalresult').innerHTML = 'its nine';
    //    // document.getElementById('result').style.backgroundImage = "url('https://riverisland.scene7.com/is/image/RiverIsland/0_20220224_HS_hubupdate_ww2_DNT?ns&$retina$')";
    // }
    else {
       document.getElementById('finalresult').innerHTML = 'its four';
      }
 
 
 
 
    }