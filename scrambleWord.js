function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function scrambleWord(word)
{
  if (word.length <= 2)
  {
    return word;
  }
  var newWord = [word[0]];
  var characters = word.split(""); 
  characters.splice(word.length - 1, 1); 
  characters.splice(0, 1);
  while(characters.length > 0)
  {
  	var randIndex = getRandomInt(0, characters.length); 
  	newWord.push(characters.splice(randIndex,1)[0]); 
  }
  newWord.push(word[word.length - 1]);
  return newWord.join("");
}