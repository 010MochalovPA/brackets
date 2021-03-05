module.exports = function check(str, bracketsConfig) {
  let countMistakes;
    do {
        countMistakes = 0;
        for(let item in bracketsConfig){
            if (str.indexOf(bracketsConfig[item].join(''))!= -1){
                str = str.replace(bracketsConfig[item].join(''),'');
            }
            else { countMistakes++ }           
        }
    } while (str!='' && countMistakes < bracketsConfig.length);
    return (str!='') ? false : true ;
}