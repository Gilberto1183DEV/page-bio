// Animação de botões ao passar o mouse
const buttons = document.querySelectorAll('.botoes-links button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Função para copiar o endereço de email
document.getElementById('email-button').addEventListener('click', (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    const email = 'seuemail@gmail.com';

    // Cria um elemento temporário para copiar o texto
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Alerta que o email foi copiado
    alert(`Email ${email} copiado para a área de transferência!`);
});
