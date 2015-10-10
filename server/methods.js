var generateOption = function(){
  return Math.floor(Math.random() * 5) + 1;
}

var getOption = function(opt){
  switch(opt){
    case 1: 
      return "Rock";
      break;
    case 2: 
      return "Paper";
      break;
    case 3: 
      return "Scissors";
      break;
    case 4: 
      return "Lizard";
      break;
    case 5: 
      return "Spock";
      break;
  }
}

Meteor.methods({
    play: function(option1){
    	var option2 = generateOption();
      if(option1 == option2){
      	return {p1: getOption(option1), p2: getOption(option2), res: "Draw"};
      }else{
      	switch(option1){
      		case 1:
      			if(option2 == 3 || option2 == 4){
      				return {p1: getOption(option1), p2: getOption(option2), res: "Player1"};
      			}else{
      				return {p1: getOption(option1), p2: getOption(option2), res: "Machine"};
      			}
      			break;
      		case 2:
      			if(option2 == 1 || option2 == 5){
              return {p1: getOption(option1), p2: getOption(option2), res: "Player1"};
      			}else{
              return {p1: getOption(option1), p2: getOption(option2), res: "Machine"};
      			}
      			break;
      		case 3:
      			if(option2 == 2 || option2 == 4){
              return {p1: getOption(option1), p2: getOption(option2), res: "Player1"};
      			}else{
              return {p1: getOption(option1), p2: getOption(option2), res: "Machine"};
      			}
      			break;
      		case 4:
      			if(option2 == 2 || option2 == 5){
              return {p1: getOption(option1), p2: getOption(option2), res: "Player1"};
      			}else{
              return {p1: getOption(option1), p2: getOption(option2), res: "Machine"};
      			}
      			break;
      		case 5:
      			if(option2 == 1 || option2 == 3){
              return {p1: getOption(option1), p2: getOption(option2), res: "Player1"};
      			}else{
              return {p1: getOption(option1), p2: getOption(option2), res: "Machine"};
      			}
      			break;

      	}
      }

    }

  });