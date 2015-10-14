var generateOption = function(){
  return Math.floor(Math.random() * 5);
}

var getOption = function(opt){
  switch(opt){
    case 0: 
      return "/images/scissors.png";
      break;
    case 1: 
      return "/images/paper.png";
      break;
    case 2: 
      return "/images/rock.png";
      break;
    case 3: 
      return "/images/lizard.png";
      break;
    case 4: 
      return "/images/spock.png";
      break;
  }
}

Meteor.methods({
    play: function(opt){
      var option1 = parseInt(opt);
    	var option2 = generateOption();

      if(option1 == option2){
        return {p1: getOption(option1), p2: getOption(option2), res: "/images/draw.png"};
      }else{
        if((option1+1)%5 == option2 || (option1+3)%5 == option2){
          return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
        }else{
          return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
        }
      }




      // if(option1 == option2){
      // 	return {p1: getOption(option1), p2: getOption(option2), res: "/images/draw.png"};
      // }else{
      // 	switch(option1){
      // 		case 1:
      // 			if(option2 == 3 || option2 == 4){
      // 				return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
      // 			}else{
      // 				return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
      // 			}
      // 			break;
      // 		case 2:
      // 			if(option2 == 1 || option2 == 5){
      //         return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
      // 			}else{
      //         return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
      // 			}
      // 			break;
      // 		case 3:
      // 			if(option2 == 2 || option2 == 4){
      //         return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
      // 			}else{
      //         return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
      // 			}
      // 			break;
      // 		case 4:
      // 			if(option2 == 2 || option2 == 5){
      //         return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
      // 			}else{
      //         return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
      // 			}
      // 			break;
      // 		case 5:
      // 			if(option2 == 1 || option2 == 3){
      //         return {p1: getOption(option1), p2: getOption(option2), res: "/images/win.png"};
      // 			}else{
      //         return {p1: getOption(option1), p2: getOption(option2), res: "/images/lose.png"};
      // 			}
      // 			break;

      // 	}
      // }

    },
    updateDataVsMachine: function(ganadas, perdidas, empatadas){
      if(!Meteor.user()){
        throw new Meteor.Error('not-authorized');
      }

      Games.update(Meteor.userId(), {
        $set: {
          vsmachine: {
            ganadas: ganadas,
            perdidas: perdidas,
            empatadas: empatadas
          }
        }
      });
    }

  });