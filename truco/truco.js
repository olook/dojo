/**
  * Truco JS
  */
truco = {};

truco.hand = function(hand_array) {
  if (hand_array.length < 3) {
    return "array errado"
  }
  
    return "Player 1";
  
};

truco.greater = function(card_array) {
  var card_1 = card_array.shift();
  var card_2 = card_array.shift();
  var sequencia = ["4","5","6","7","Q","J","K","A","2","3"];
  var seq_nipes = ['d', 's', 'h', 'c'];

  for(var i=0, j=seq_nipes.length;i<j;i++){
    if(card_1[1] == seq_nipes[i]){
      ncard1 = seq_nipes.indexOf(card_1[1]);
    }
    if(card_2[1] == seq_nipes[i]){
      ncard2 = i;
    }
  }

  icard1 = sequencia.indexOf(card_1[0]);
  icard2 = sequencia.indexOf(card_2[0]);
  if(icard1 == icard2){
    if(ncard1 < ncard2){
      return card_2;
    } else {
      return card_1;
    }
  } else if(icard1 < icard2){
    return card_2;
  } else {
    return card_1;
  }
} 

