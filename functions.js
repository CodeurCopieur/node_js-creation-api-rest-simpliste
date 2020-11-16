//fonction pour un succes
exports.success = function(result) {
  return {
    status: 'success',
    result: result
  }
}

//fonction pour une erreur
exports.error = function (message) {
  return {
    status: 'error',
    message: message
  }
}