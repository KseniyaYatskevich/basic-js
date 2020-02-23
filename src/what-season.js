module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if(typeof date === 'object' && !date.hasOwnProperty('getMonth')) {
    const month = date.getMonth();
    console.log(date.getMonth())
    console.log(date)
    if(month >=2 && month<5) {
      return 'spring';
    } else if(month >=5 && month<8) {
      return 'summer';
    } else if(month >=8 && month<11) {
      return 'autumn';
    } return 'winter';
  } else throw Error;  
};
