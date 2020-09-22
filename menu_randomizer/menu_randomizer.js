var recipeCard1 = document.querySelector(".recipeCard1");
var recipeCard2 = document.querySelector(".recipeCard2");
var recipeCard3 = document.querySelector(".recipeCard3");
var recipeCard4 = document.querySelector(".recipeCard4");
var recipeCard5 = document.querySelector(".recipeCard5");
var recipeCard6 = document.querySelector(".recipeCard6");
var recipeCard7 = document.querySelector(".recipeCard7");
var generateButton = document.querySelector(".generateButton");

function jsonDataLoad(){
    //JSON Parser
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var nameOfDish, dishType, dishDescription, ingredientList, toolList;
        var cookingDirections = new Array();
        var num = 0;
        var usedNum = new Array();

        for( var i = 0; i < 7; i++){
            //Generate a random number
            num = randomNumber(0, myObj.dish.length-1);

            while(usedNum.includes(num)){
                num = randomNumber(0, myObj.dish.length-1);
            }
            usedNum += num;

            //Takes num's value, uses that to choose a specific dish, and
            //adds the specific details of said dish to their respective variables.
            nameOfDish = myObj.dish[num][0];
            dishType = myObj.dish[num][1];
            dishDescription = myObj.dish[num][2];
            ingredientList = myObj.dish[num][3];
            toolList = myObj.dish[num][4];
            cookingDirections = [
                myObj.dish[num][5], myObj.dish[num][6], myObj.dish[num][7], 
                myObj.dish[num][8], myObj.dish[num][9], myObj.dish[num][10]
                ]; 
            
            //Creates recipe cards for all 7 days.
            switch(i){
                case 0:
                    recipeCard1.innerHTML = 
                        cardGenerator(nameOfDish, dishType, dishDescription, 
                            ingredientList, toolList, cookingDirections);
                    break;
                case 1:
                    recipeCard2.innerHTML = 
                        cardGenerator(nameOfDish, dishType, dishDescription, 
                            ingredientList, toolList, cookingDirections);
                    break;
                case 2:
                    recipeCard3.innerHTML = 
                        cardGenerator(nameOfDish, dishType, dishDescription, 
                            ingredientList, toolList, cookingDirections);
                    break;
                case 3:
                    recipeCard4.innerHTML = 
                        cardGenerator(nameOfDish, dishType, dishDescription, 
                            ingredientList, toolList, cookingDirections);
                    break;
                case 4:
                    recipeCard5.innerHTML = 
                        cardGenerator(nameOfDish, dishType, dishDescription, 
                            ingredientList, toolList, cookingDirections);
                    break;
                case 5:
                    recipeCard6.innerHTML = 
                        cardGenerator(nameOfDish, dishType, dishDescription, 
                            ingredientList, toolList, cookingDirections);
                    break;
                case 6:
                    recipeCard7.innerHTML = 
                        cardGenerator(nameOfDish, dishType, dishDescription, 
                            ingredientList, toolList, cookingDirections);
                    break;
                }
            }
        }
    };
    xmlhttp.open("GET", "menu_database.json", true);
    xmlhttp.send();
}

function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return num;
}

function cardGenerator(nameOfDish, dishType, dishDescription, ingredientList, 
    toolList, cookingDirections){
    //Generate an HTML card with its details.
    var text = 
        "<div><label>NAME:</label> " + nameOfDish + "</div><hr />" +
        "<div><label>DISH TYPE:</label> " + dishType + "</div><hr />" +
        "<div><label>DESCRIPTION:</label> " + dishDescription + "</div><hr />" + 
        "<div><label>INGREDIENTS LIST:</label> " + ingredientList + "</div><hr />" +
        "<div><label>TOOLS LIST:</label> " + toolList + "</div><hr />" +
        "<div><strong>COOKING DIRECTIONS:</strong><hr /><br />";
    //Evaluates each element of the cookingDirections array and adds those details to HTML card.
    for(var x = 0; x < cookingDirections.length; x++){
        if(cookingDirections[x] === null){
            break;
        }
        text += cookingDirections[x] + "<br /><hr />";
        }
    text += "</div>";
    return text;
}

generateButton.addEventListener("click", function(){
    jsonDataLoad();
});
