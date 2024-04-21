document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3030/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao realizar login');
            }
            return response.json();
        })
        .then(data => {
            console.log('Login bem-sucedido:', data);
            window.location.href = 'http://localhost:3030/homepage';
        })
        .catch(error => {
            console.error('Erro no login:', error);
            document.getElementById('message').textContent = 'Credenciais inválidas. Por favor, tente novamente.';
        });
});