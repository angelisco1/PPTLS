var generateOption = function(){
  return Math.floor(Math.random() * 5) + 1;
}

var getOption = function(opt){
  switch(opt){
    case 1: 
      return "/images/rock.png";
      break;
    case 2: 
      return "/images/paper.png";
      break;
    case 3: 
      return "/images/scissors.png";
      break;
    case 4: 
      return "/images/lizard.png";
      break;
    case 5: 
      return "/images/spock.png";
      break;
  }
}

Meteor.methods({
    play: function(option1){
    	var option2 = generateOption();
      if(option1 == option2){
      	return {p1: getOption(option1), p2: getOption(option2), res: "/images/draw.png"};
      }else{
      	switch(option1){
      		case 1:
      			if(option2 == 3 || option2 == 4){
      				return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
      			}else{
      				return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
      			}
      			break;
      		case 2:
      			if(option2 == 1 || option2 == 5){
              return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
      			}else{
              return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
      			}
      			break;
      		case 3:
      			if(option2 == 2 || option2 == 4){
              return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
      			}else{
              return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
      			}
      			break;
      		case 4:
      			if(option2 == 2 || option2 == 5){
              return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
      			}else{
              return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
      			}
      			break;
      		case 5:
      			if(option2 == 1 || option2 == 3){
              return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
      			}else{
              return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
      			}
      			break;

      	}
      }

    }

  });