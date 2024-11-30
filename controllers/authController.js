
const login = (req, res) => {
    const {email, senha} = req.body

    if (email === 'admin@exemplo.com' && senha === '12345678') {
        return res.status(200).json({message: 'Sucess', token: 'token'})
    }
    return res.status(401).json({message: 'Credenciais Inválidas'})
}
const register = (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }

    const userExists = users.some((u) => u.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'Usuário já cadastrado.' });
    }

    users.push({ email, senha });
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
};

module.exports = { login, register };