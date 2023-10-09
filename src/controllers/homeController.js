exports.home = (req, res) => {//tela de entrada
    //console.log(req.session.user)
    if(req.session.user) return res.render('home');
    return res.render('logar');
}