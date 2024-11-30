let users = []; // Array para armazenar usuários (em memória)

exports.register = (req, res) => {
    const { username, password } = req.body;

    // Verifica se o usuário já existe
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'Usuário já existe!' });
    }

    // Adiciona o usuário ao array
    users.push({ username, password });
    return res.status(201).json({ message: 'Usuário registrado com sucesso!' });
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    // Verifica se as credenciais estão corretas
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas!' });
    }

    return res.status(200).json({ message: 'Login bem-sucedido!' });
};
