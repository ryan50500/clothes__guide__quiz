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
    
     
 
 
    //  add up the string values of each queston and put it into variable called 'res'
     let res = (question1 + question2 + question3 + question4 + question5 + question6);
     console.log(res);
 
 
 
    // first outcome
    if ((res==='121112')||(res ==='121113')||(res === '121211')||(res==='121212')||(res==='121213')||(res==='121311')||(res==='121312')||(res==='121313')||(res==='121313')||(res==='121313')||(res==='122111')||(res==='122112')||(res==='122113')||(res==='122312')||(res==='122211')||(res==='122212')||(res==='122213')||(res==='122313')||(res==='123111')||(res==='123112')||(res==='123112')||(res==='123113')||(res==='123211')||(res==='123212')||(res==='123213')||(res==='123311')||(res==='123312')||(res==='123313')||(res==='131111')||(res==='131112')||(res==='131121')||(res==='131121')||(res==='131122')||(res==='131122')||(res==='131211')||(res==='131212')||(res==='131221')||(res==='131222')||(res==='131311')||(res==='131311')||(res==='131312')||(res==='131312')||(res==='131321')||(res==='131322')||(res==='132111')||(res==='132112')||(res==='132121')||(res==='132122')||(res==='132211')||(res==='132211')||(res==='132212')||(res==='132221')||(res==='132222')||(res==='132311')||(res==='132312')||(res==='132321')||(res==='133111')||(res==='133112')||(res==='133121')||(res==='133122')||(res==='133211')||(res==='133212')||(res==='133221')||(res==='133312')||(res==='133321')||(res==='133322')||(res==='133311')||(res==='133222')) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           "", "", "", "", "", "", "", "", "", "", "",                                                                                                                                  "", "", "", "", "", "",                                         
        document.getElementById('finalresult').innerHTML = 'first outcome';
    }
     // second outcome
    else if ((res==='121123')||(res==='121223')||(res==='121323')||(res==='122123')||(res==='122223')||(res==='122323')||(res==='123123')||(res==='123223')||(res==='123323')) {
       document.getElementById('finalresult').innerHTML = 'second outcome';
       // document.getElementById('result').style.backgroundImage = "url('https://images.riverisland.com/is/image/RiverIsland/792382_main?wid=1200')";
    }
     // third outcome
    else if ((res==='121133')||(res==='121233')||(res==='121333')||(res==='122133')||(res==='122233')||(res==='122333')||(res==='123133')||(res==='123233')||(res==='123333')) {
        document.getElementById('finalresult').innerHTML = 'third outcome';
        // document.getElementById('result').style.backgroundImage = "url('https://images.riverisland.com/is/image/RiverIsland/792382_main?wid=1200')";
     }
    // fourth outcome
    else if ((res==='111111')||(res==='111112')||(res==='111113')||(res==='111211')||(res==='111212')||(res==='111213')||(res==='111311')||(res==='111312')||(res==='111313')||(res==='112111')||(res==='112112')||(res==='112113')||(res==='112211')||(res==='112212')||(res==='112213')||(res==='112311')||(res==='112312')||(res==='112313')||(res==='113111')||(res==='113112')||(res==='113113')||(res==='113211')||(res==='113212')||(res==='113213')||(res==='113311')||(res==='113312')||(res==='113313')) {
        document.getElementById('finalresult').innerHTML = 'fourth outcome';
        // document.getElementById('result').style.backgroundImage = "url('https://images.riverisland.com/is/image/RiverIsland/792382_main?wid=1200')";
     }
      // fifth outcome
    else if ((res==='111121')||(res==='111122')||(res==='111123')||(res==='111131')||(res==='111132')||(res==='111133')||(res==='111221')||(res==='111222')||(res==='111223')||(res==='111231')||(res==='111232')||(res==='111233')||(res==='111321')||(res==='111322')||(res==='111323')||(res==='111331')||(res==='111332')||(res==='111333')||(res==='112121')||(res==='112122')||(res==='112123')||(res==='112131')||(res==='112132')||(res==='112133')||(res==='112221')||(res==='112222')||(res==='112223')||(res==='112231')||(res==='112232')||(res==='112233')||(res==='112321')||(res==='112322')||(res==='112323')||(res==='112331')||(res==='112332')||(res==='112333')||(res==='113121')||(res==='113122')||(res==='113123')||(res==='113131')||(res==='113132')||(res==='113133')||(res==='113221')||(res==='11222')||(res==='113223')||(res==='113231')||(res==='113232')||(res==='113233')||(res==='113321')||(res==='113322')||(res==='113323')||(res==='113331')||(res==='113332')||(res==='113333')) {
        document.getElementById('finalresult').innerHTML = 'fifth outcome';
        // document.getElementById('result').style.backgroundImage = "url('https://images.riverisland.com/is/image/RiverIsland/792382_main?wid=1200')";
     }
      // sixth outcome
    else if ((res==='121121')||(res==='121122')||(res==='121131')||(res==='121132')||(res==='121221')||(res==='121222')||(res==='121231')||(res==='121232')||(res==='121321')||(res==='121322')||(res==='121331')||(res==='121332')||(res==='122121')||(res==='122122')||(res==='122131')||(res==='122132')||(res==='122221')||(res==='122222')||(res==='122231')||(res==='122232')||(res==='122321')||(res==='122322')||(res==='122331')||(res==='122332')||(res==='123121')||(res==='123122')||(res==='123131')||(res==='123132')||(res==='123221')||(res==='123222')||(res==='123231')||(res==='999')||(res==='123232')||(res==='123321')||(res==='123322')||(res==='123331')||(res==='123332')) {
        document.getElementById('finalresult').innerHTML = 'sixth outcome';
        // document.getElementById('result').style.backgroundImage = "url('https://images.riverisland.com/is/image/RiverIsland/792382_main?wid=1200')";
     }
        // seventh outcome
    else if ((res==='131113')||(res==='131123')||(res==='131213')||(res==='131223')||(res==='131313')||(res==='131323')||(res==='132113')||(res==='132123')||(res==='132213')||(res==='132223')||(res==='132313')||(res==='132323')||(res==='133113')||(res==='133123')||(res==='133213')||(res==='133223')||(res==='133313')||(res==='133323')) {
        document.getElementById('finalresult').innerHTML = 'seventh outcome';
        // document.getElementById('result').style.backgroundImage = "url('https://images.riverisland.com/is/image/RiverIsland/792382_main?wid=1200')";
     }
         // eight outcome
    else if ((res==='131131')||(res==='131132')||(res==='131133')||(res==='131231')||(res==='131232')||(res==='131233')||(res==='131331')||(res==='131332')||(res==='131333')||(res==='132131')||(res==='132132')||(res==='132133')||(res==='132231')||(res==='132232')||(res==='132233')||(res==='132331')||(res==='132332')||(res==='132333')||(res==='133131')||(res==='133132')||(res==='133133')||(res==='133231')||(res==='133232')||(res==='133233')||(res==='133331')||(res==='133332')||(res==='133333')) {
        document.getElementById('finalresult').innerHTML = 'eight outcome';
        // document.getElementById('result').style.backgroundImage = "url('https://images.riverisland.com/is/image/RiverIsland/792382_main?wid=1200')";
     }

        // ninth outcome
    else if ((res==='211111')||(res==='211112')||(res==='211113')||(res==='211121')||(res==='211122')||(res==='211123')||(res==='211131')||(res==='211132')||(res==='211133')||(res==='211211')||(res==='211212')||(res==='211213')||(res==='211221')||(res==='211222'||(res==='211223'))||(res==='211231')||(res==='211233')||(res==='211311')||(res==='211312')||(res==='211313')||(res==='211321')||(res==='211322')||(res==='211323')||(res==='211331')||(res==='211332')||(res==='211333')||(res==='212111')||(res==='212112')||(res==='212113')||(res==='212121')||(res==='212122')||(res==='212123')||(res==='212131')||(res==='212132')||(res==='212133')||(res==='212211')||(res==='212212')||(res==='212213')||(res==='212221')||(res==='212222')||(res==='212223')||(res==='212231')||(res==='212232')||(res==='212233')||(res==='212311')||(res==='212312')||(res==='212313')||(res==='212321')||(res==='212322')||(res==='212323')||(res==='212331')||(res==='212332')||(res==='212333')||(res==='213111')||(res==='213112')||(res==='213113')||(res==='213121')||(res==='213122')||(res==='213123')||(res==='213131')||(res==='213132')||(res==='213133')||(res==='213211')||(res==='213212')||(res==='213213')||(res==='213221')||(res==='213222')||(res==='213223')||(res==='213231')||(res==='213232')||(res==='213233')||(res==='213311')||(res==='213312')||(res==='213313')||(res==='213321')||(res==='213322')||(res==='213323')||(res==='213331')||(res==='213332')||(res==='213333')||(res==='221131')||(res==='221132')||(res==='221133')||(res==='221231')||(res==='221232')||(res==='221233')||(res==='221331')||(res==='221332')||(res==='221333')||(res==='222131')||(res==='222132')||(res==='222133')||(res==='222231')||(res==='222232')||(res==='222233')||(res==='222331')||(res==='222332')||(res==='222333')||(res==='223131')||(res==='223132')||(res==='223133')||(res==='223231')||(res==='223232')||(res==='223233')||(res==='223331')||(res==='223332')||(res==='223333')||(res==='231131')||(res==='231132')||(res==='231133')||(res==='231231')||(res==='231232')||(res==='231233')||(res==='231331')||(res==='231332')||(res==='231333')||(res==='232131')||(res==='232132')||(res==='232133')||(res==='232231')||(res==='232232')||(res==='232233')||(res==='232331')||(res==='232332')||(res==='232333')||(res==='233131')||(res==='233132')||(res==='233133')||(res==='233231')||(res==='233232')||(res==='233233')||(res==='233331')||(res==='233332')||(res==='233333')) {
         document.getElementById('finalresult').innerHTML = 'ninth outcome';
            // document.getElementById('result').style.backgroundImage = "url('https://images.riverisland.com/is/image/RiverIsland/792382_main?wid=1200')";
    }

    }