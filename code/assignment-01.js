           /*
           The user will be able to  update the value of levels, 
           therefore use let
           */

            //Initializing the level variables
            let levelOne = 0;
            let levelTwo = 0;
            let levelThree = 0;
            let levelFour = 0;
            let levelFive = 0;
            let levelSix = 0;

            //The elementById is what connects these variables to the HTML
            document.getElementById("levelOne").innerHTML = levelOne;
            document.getElementById("levelTwo").innerHTML = levelTwo;
            document.getElementById("levelThree").innerHTML = levelThree;
            document.getElementById("levelFour").innerHTML = levelFour;
            document.getElementById("levelFive").innerHTML = levelFive;
            document.getElementById("levelSix").innerHTML = levelSix;

            //default view is the child pyramid
            let userType = "child";
            
            // child - children aged 1-4
            // other - adults, teenagers and children 5 and over
            document.getElementById("adultTable").style.background = "grey";
            document.getElementById("childrenTable").style.background = "white";
            
            /* Function to switch between children and adult pyramid*/
            function setUserType(choice){
              userType = choice;

                if(userType == 'child'){
                  document.getElementById("adultTable").style.background = "grey";
                  document.getElementById("childrenTable").style.background = "white";
                }
                else {
                  document.getElementById("childrenTable").style.background = "grey";
                  document.getElementById("adultTable").style.background = "white";
                }

              resetLevelSizes();
              //reset values & colour when you switch
              setEmpty();
            }

            function setEmpty(){
            document.getElementById("levelOne").innerHTML = levelOne;
            setGrey("levelOne");
            document.getElementById("levelTwo").innerHTML = levelTwo;
            setGrey("levelTwo");
            document.getElementById("levelThree").innerHTML = levelThree;
            setGrey("levelThree");
            document.getElementById("levelFour").innerHTML = levelFour;
            setGrey("levelFour");
            document.getElementById("levelFive").innerHTML = levelFive;
            setGrey("levelFive");
            document.getElementById("levelSix").innerHTML = levelSix;
            setGrey("levelSix");
            }

            function resetLevelSizes() {
              resetLevelSize("l1");
              resetLevelSize("l2");
              resetLevelSize("l3");
              resetLevelSize("l4");
              resetLevelSize("l5");
              resetLevelSize("l6");

            }

            function resetLevelSize(elementID){
              document.getElementById(elementID).style.height = "125px";
            }

            function setGrey(elementID){
              document.getElementById(elementID).style.background = "rgb(107, 107, 107)";
            }
            
            function setOrange(elementID){
              document.getElementById(elementID).style.background = "orange";
            }

            function setRed(elementID){
              document.getElementById(elementID).style.background = "red";
            }

            function setGreen(elementID){
              document.getElementById(elementID).style.background = "green";
            }

            function setLevelSize(elementID, adjustment){
              let element = document.getElementById(elementID);
              let currentHeight = element.offsetHeight;
              let newHeight = currentHeight + adjustment;

              /*Put a limit on how small it can be*/
              if(adjustment < 0){
                const minHeight = 125; // Minimum height limit
                if(newHeight < minHeight) {
                  newHeight = minHeight;
                }
              }
              
              element.style.height = newHeight + "px";
            }


          /* Function to Update the Value of LevelOne by -/+ i based on input */
           function updateLevel(nLevel,i) {
              //updates Level depending on nLevel
                if(nLevel == 1){
                let one = parseInt(document.getElementById("levelOne").innerHTML);

                setLevelSize("l1");

                  if(one + i >= 0){
                  one += i; 
                  }    
                  document.getElementById("levelOne").innerHTML = one;

                          if(userType == "child"){
                              if(one == 0){
                                setGrey("levelOne");
                              }

                              if(one == 1){
                                setOrange("levelOne");
                              }

                              if(one >= 2){
                                setRed("levelOne");
                              }
                          }
                          //if the user is not a child, i.e. Adult, Teen, or Child 5+
                          else{
                              if(one == 0){
                                setGrey("levelOne");
                              }

                              if(one == 1){
                                setOrange("levelOne");
                              }

                              if(one >= 2){
                                setRed("levelOne");
                              }
                          }

                }
                else if(nLevel == 2) {
                  let two = parseInt(document.getElementById("levelTwo").innerHTML);
                    if(two + i >= 0){
                      two += i; 
                      }        
                  document.getElementById("levelTwo").innerHTML = two;

                            if(userType == "child"){
                                if(two == 0){
                                  setGrey("levelTwo");
                                }

                                else if(two == 1){
                                  setOrange("levelTwo");
                                }

                                else if(two >= 2){
                                  setRed("levelTwo");
                                }
                            }

                            //if the user is not a child, i.e. Adult, Teen, or Child 5+
                            else{
                                if(two == 0){
                                  setGrey("levelTwo");
                                }

                                if(two == 1 || two == 2){
                                  setOrange("levelTwo");
                                }

                                if(two >= 2){
                                  setRed("levelTwo");
                                }
                            }

                }
                else if(nLevel == 3) {
                  let three = parseInt(document.getElementById("levelThree").innerHTML);
                    if(three + i >= 0){
                      three += i; 
                      }        
                  document.getElementById("levelThree").innerHTML = three;

                        if(userType == "child"){
                              if(three == 0){
                                setGrey("levelThree");
                              }

                              else if(three == 1 || three == 2 ){
                                setGreen("levelThree");
                              }

                              else if(three == 3 || three == 4){
                                setOrange("levelThree");
                              }

                              else if(three >= 5){
                                setRed("levelThree");
                              }
                        }

                        else{
                              if(three == 0){
                                setGrey("levelThree");
                              }

                              else if(three == 2 || three == 3 ){
                                setGreen("levelThree");
                              }

                              else if(three == 1 || three == 4 || three == 5){
                                setOrange("levelThree");
                              }

                              else if(three >= 6){
                                setRed("levelThree");
                              }
                          }

                }
                else if(nLevel == 4) {
                  let four = parseInt(document.getElementById("levelFour").innerHTML);
                    if(four + i >= 0){
                      four += i; 
                      }        
                  document.getElementById("levelFour").innerHTML = four;

                        if(userType == "child"){ 
                              if(four == 0){
                                setGrey("levelFour");
                              }
                              else if(four == 1 || four == 4 || four == 5){
                                setOrange("levelFour");
                              }

                              else if(four > 1 && four < 4){
                                setGreen("levelFour");
                              }

                              else if(four > 5){
                                setRed("levelFour");
                              }
                        }
                        else {
                            if(four == 0){
                              setGrey("levelFour");
                            }
                            else if(four == 1 || four == 4 || four == 5){
                              setOrange("levelFour");
                            }

                            else if(four > 1 && four < 4){
                              setGreen("levelFour");
                            }

                            else if(four > 5){
                              setRed("levelFour");
                            }
                        }
                }
                else if(nLevel == 5) {
                  let five = parseInt(document.getElementById("levelFive").innerHTML);
                    if(five + i >= 0){
                      five += i; 
                      }        
                  document.getElementById("levelFive").innerHTML = five;

                          if(userType == "child"){ 
                              if(five == 0){
                                setGrey("levelFive");
                              }

                              else if(five == 1 || five == 2){
                                setGreen("levelFive");
                              }

                              else if(five == 3 || five == 4){
                                setOrange("levelFive");
                              }

                              else if(five >= 5){
                                setRed("levelFive");
                              }
                          }
                          else {
                              if(five == 0){
                                setGrey("levelFive");
                              }

                              else if(five >= 3 && five <= 5){
                                setGreen("levelFive");
                              }

                              else if( five >=1 && five <3 || five >= 6 && five < 8){
                                setOrange("levelFive");
                              }

                              else if(five >= 8){
                                setRed("levelFive");
                              }
                          }
                }
                else if(nLevel == 6) {
                  let six = parseInt(document.getElementById("levelSix").innerHTML);
                    if(six + i >= 0){
                      six += i; 
                      }        
                  document.getElementById("levelSix").innerHTML = six;

                          if(userType == "child"){
                            if(six == 0){
                              setGrey("levelSix");
                            }

                            else if(six == 1 || six == 2){
                              setGreen("levelSix");
                            }

                            else if(six == 3 || six == 4){
                              setOrange("levelSix");
                            }

                            else if(six >= 5){
                              setRed("levelSix");
                            }
                          }
                          else {
                            if(six == 0){
                              setGrey("levelSix");
                            }

                            else if(six >= 5 && six <= 7){
                              setGreen("levelSix");
                            }

                            else if( six >=1 && six <5 || six >= 8 && six <= 9){
                              setOrange("levelSix");
                            }

                            else if(six > 9){
                              setRed("levelSix");
                            }
                        }
                }
            }   
            
            //This will give the exact time and date now
            function displayDate(){
              document.getElementById("date").innerHTML = Date();
            }

            //This is a calendar where the user can click a date to set the date
            function setDate() {
              let x = document.getElementById("inputDate").value;
              document.getElementById("demo").innerHTML = x;
            }

