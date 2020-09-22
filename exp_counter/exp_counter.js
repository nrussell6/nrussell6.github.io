//Page updated whenever something is clicked
var htmlClick = document.querySelector("html");

//New Character Data
var charData = new Map();
var newCharBtn = document.querySelector(".newCharacter");
var newCharName = document.querySelector(".newCharName");
var newCharEXP = document.querySelector(".newCharEXP");

//Remove Character Data
var rmvCharBtn = document.querySelector(".removeCharacter");
var rmvData = document.querySelector(".dataToRemove");

//Reduce EXP Function
var reduceExpBtn = document.querySelector(".reduceExpBtn");
var reduceExpField = document.querySelector(".reduceExpField");

//Manually Editing Character EXP:
var adjustBtn = document.querySelector(".adjustBtn");
var adjustName = document.querySelector(".adjustName");
var adjustExp = document.querySelector(".adjustExp");

//Display Character Data
var charDataTable = document.querySelector(".characterDataDisplay");


function onLoad(){
	newCharBtn.addEventListener("click", function(){
		// console.log("click");
		var nameAdd = newCharName.value;
		var expCount = newCharEXP.value;

		newCharName.value = "";
		newCharEXP.value = "";

		charData.set(nameAdd, parseInt(expCount));

		return(charData);
	});

	rmvCharBtn.addEventListener("click", function(){
		var nameRmv = rmvData.value;
		rmvData.value = "";
		charData.delete(nameRmv);
		return(charData);
	});

	reduceExpBtn.addEventListener("click", function(){
		var deduction = parseInt(reduceExpField.value);
		console.log(deduction);

		for(var [name, exp] of charData){
			console.log(name);
			console.log(exp);
			exp -= deduction;
			if(exp <= 0){
				exp = 0;
			}

			charData.set(name, exp);
		}
		return(charData);
	});

	//Feature to edit a specific character's exp count
	adjustBtn.addEventListener("click", function(){
		if(adjustName.value != ""){
			charData.set(adjustName.value, parseInt(adjustExp.value));
		}
		adjustName.value = "";
		adjustExp.value= "";
	});


	htmlClick.addEventListener("click", function(){
		charDataTable.innerHTML = "";
		//Adds value of charData array to HTML page
		for(var [name, exp] of charData){
			charDataTable.innerHTML += 
					"<table><tr><td>" + name + "</td><td>" + exp + "</td></tr></table>"
		}
	});
}


onLoad();