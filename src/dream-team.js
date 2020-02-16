module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const newArray = members.filter(item => typeof item === 'string').map(item => item.toUpperCase().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
    const res=newArray.sort().reduce((acc, item) => (acc + item.slice(0,1)), '');
    return res;
  } return false;  
};