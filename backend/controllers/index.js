exports.home = (req, res) =>{
    res.render('home', {
        nombrePagina: 'Inicio'
    });
};

exports.about = (req, res) =>{
    res.render('about', {
        nombrePagina: 'About me'
    });
};

exports.history = (req, res) =>{
    res.render('history', {
        nombrePagina: 'profile'
    });
};

exports.portfolio = (req, res) =>{
    res.render('portfolio', {
        nombrePagina: 'Portfolio'
    });
};

exports.contact = (req, res) =>{
    res.render('contact', {
        nombrePagina: 'Contact'
    });
};