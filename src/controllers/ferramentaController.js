exports.indexFerramenta = (req, res) => {//tela de entrada
    //console.log(req.session.user)
    if(req.session.user) return res.render('ferramenta');
    return res.render('logar');
}

exports.ferramenta = (req, res) => {//tela de entrada
    
}