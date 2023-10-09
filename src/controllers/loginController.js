const Login = require('../models/LoginModel');

exports.indexLogin = (req, res) => {//tela de entrada
    return res.render('login');
}
//valida login para acesso
exports.login = async (req, res) => {//tela de login
    //fazendo a verificação de de login email e senha
    try {
        const login = new Login(req.body);//entrada de dados do formulário
        await login.login();
        
        //se ocorrer algum erro o POST se mantem na tela atual
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('back');
            });
            return;
        }
        req.flash('success', 'Usuário logado.');
        req.session.user = login.user;
        req.session.save(() => {
            return res.redirect('/home');//TESTE MODIFICAR CAMINHO
        });

        //se ocorrer algum erro vai para a pagina 404
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

exports.indexCadastro = (req, res) => {//tela de cadastro
    if(req.session.user) return res.render('cadastro');
    return res.render('logar');
}

exports.cadastro = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login/cadastro');
            })
            return;
        };

        req.flash('success', 'Usuario criado');
        req.session.save(() => {
            return res.redirect('/login/cadastro');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

exports.logout = (req, res)=>{
    req.session.destroy();
    res.redirect('/');
}