const transporter  = require('../config/mail');

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

/* exports.contactNodeMailer = (req, res) => {
  let mailOptions = {
    from: "Williams Hernández <hernandw@gmail.com>",
    to: "hernandw@gmail.com",
    subject: "Formulario de Contacto",
    text:
      "Se ha enviado un mensaje desde el formulario de contacto Nombre: " +
      req.body.name +
      "Email: " +
      req.body.email +
      "Mensaje: " +
      req.body.message,
    html:
      "<p>Se ha enviado un mensaje desde el formulario de contacto</p><ul><li>Nombre: " +
      req.body.name +
      "</li><li>Email: " +
      req.body.email +
      "</li><li>Mensaje: " +
      req.body.message +
      "</li></ul>",
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      console.log("Mensaje Enviado " + info.response);
      res.redirect("/");
    }
  });
}; */