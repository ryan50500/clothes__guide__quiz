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
         question1 = '1';
       }
       else if (document.getElementById('just__right').checked === true) {
           question1 = '2'
       }
       else if (document.getElementById('keep__it__loose').checked === true) {
          question1 = '3'
      }
     }
     questionOne();
   
  
 
     // we do the same again for each question,  question2 will have a value of 1,2, or 3
    function questionTwo(){
       if (document.getElementById('all__for__it').checked === true) {
          question2 = '1'
       }
       else if (document.getElementById('just__a__hint').checked === true) {
           question2 = '2'
       }
       else if (document.getElementById('keep__it__hidden').checked === true) {
          question2 = '3'
      }
     }
    questionTwo();
   
  
 
   
    function questionThree(){
       if (document.getElementById('drink__of__water').checked === true) {
          question3 = '1'
       }
       else if (document.getElementById('like__an__hourglass').checked === true) {
           question3 = '2'
       }
       else if (document.getElementById('hips__dont__lie').checked === true) {
          question3 = '3'
      }
     }
     questionThree();
   
 
 
 
 
     function questionFour(){
       if (document.getElementById('i__need__more').checked === true) {
          question4 = '1'
       }
       else if (document.getElementById('as__it__comes').checked === true) {
           question4 = '2'
       }
       else if (document.getElementById('show__off').checked === true) {
          question4 = '3'
      }
     }
     questionFour();
 
 
 
 
     function questionFive(){
       if (document.getElementById('bleach').checked === true) {
          question5 = '1'
       }
       else if (document.getElementById('true__blue').checked === true) {
           question5 = '2'
       }
       else if (document.getElementById('dark__as').checked === true) {
          question5 = '3'
      }
     }
     questionFive();
    
 
 
 
     function questionSix(){
       if (document.getElementById('serious__peach').checked === true) {
          question6 = '1'
       }
       else if (document.getElementById('no__complaints').checked === true) {
           question6 = '2'
       }
       else if (document.getElementById('a__lift').checked === true) {
          question6 = '3'
      }
     }
     questionSix();
    
     
 
 
 
    //  add up the string values of each queston and put it into variable called 'let'
     let res = (question1 + question2 + question3 + question4 + question5 + question6);
     console.log(res);
 
 
 
    // first outcome
    if (   (res==='121112')||(res ==='121113')||(res === '121211')||(res==='121212')||(res==='121213')||(res==='121311')||(res==='121312')||(res==='121313')||(res==='121313')||(res==='121313')||(res==='122111')||(res==='122112')||(res==='122113')||(res==='122312')||(res==='122211')||(res==='122212')||(res==='122213')||(res==='122313')||(res==='123111')||(res==='123112')||(res==='123112')||(res==='123113')||(res==='123211')||(res==='123212')||(res==='123213')||(res==='123311')||(res==='123312')||(res==='123313')||(res==='131111')||(res==='131112')||(res==='131121')||(res==='131121')||(res==='131122')||(res==='131122')||(res==='131211')||(res==='131212')||(res==='131221')||(res==='131222')||(res==='131311')||(res==='131311')||(res==='131312')||(res==='131312')||(res==='131321')||(res==='131322')||(res==='132111')||(res==='132112')||(res==='132121')||(res==='132122')||(res==='132211')||(res==='132211')||(res==='132212')||(res==='132221')||(res==='132222')||(res==='132311')||(res==='132312')||(res==='132321')||(res==='133111')||(res==='133112')||(res==='133121')||(res==='133122')||(res==='133211')||(res==='133212')||(res==='133221')||(res==='133312')||(res==='133321')||(res==='133322')||(res==='133311')||(res==='133222')) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           "", "", "", "", "", "", "", "", "", "", "",                                                                                                                                  "", "", "", "", "", "",                                         
        document.getElementById('finalresult').innerHTML = 'its five';
    }
  
    else if ((res==='211111')||(res === 9)||(res === 12)) {
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