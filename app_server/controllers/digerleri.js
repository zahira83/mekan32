const hakkinda = function(req, res, next) {
  res.render('hakkinda', 
    { 
      title: 'Hakkında',
      'footer' : 'Zahira Noori 2020'
    }
  );
}

module.exports = {
  hakkinda
}