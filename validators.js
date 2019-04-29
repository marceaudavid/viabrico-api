// Check if id exist and return a boolean
module.exports = (model, id) => {
  return new Promise((resolve, reject) =>
    model.findByPk(id).then(item => {
      if (item === null) {
        resolve(false);
      } else {
        resolve(true);
      }
    })
  ).catch(err => reject(err));
};
