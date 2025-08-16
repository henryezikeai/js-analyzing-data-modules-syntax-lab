


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


require('datejs'); 


function combineUsers(...args) {
  const combinedObject = { users: [] };
  for (const arr of args) {
    combinedObject.users.push(...arr);
  }

  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;
}