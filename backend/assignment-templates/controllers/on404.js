export const error404 = (req, res) => {
  res.render('404', { titlePage: '404', path: '' });
};
