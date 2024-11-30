const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const messageDiv = document.getElementById('message');

// Função de cadastro
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        try {
            const response = await axios.post('/api/auth/register', { username, password });
            messageDiv.textContent = response.data.message;
            messageDiv.style.color = 'green';
        } catch (error) {
            messageDiv.textContent = error.response.data.message;
            messageDiv.style.color = 'red';
        }
    });
}

// Função de login
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        try {
            const response = await axios.post('/api/auth/login', { username, password });
            messageDiv.textContent = response.data.message;
            messageDiv.style.color = 'green';
        } catch (error) {
            messageDiv.textContent = error.response.data.message;
            messageDiv.style.color = 'red';
        }
    });
}

