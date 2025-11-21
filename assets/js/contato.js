document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const mensagemInput = document.getElementById('mensagem');
        
        const nomeError = document.getElementById('nomeError');
        const emailError = document.getElementById('emailError');
        const mensagemError = document.getElementById('mensagemError');
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let isValid = true;
            
            
            nomeError.classList.add('oculto');
            emailError.classList.add('oculto');
            mensagemError.classList.add('oculto');
            successMessage.classList.add('oculto');

            
            if (nomeInput.value.trim() === '') {
                nomeError.textContent = 'Por favor, digite seu nome.';
                
                nomeError.classList.remove('oculto');
                isValid = false;
            }

     
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Por favor, digite seu e-mail.';
                emailError.classList.remove('oculto');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Por favor, digite um e-mail válido.';
                emailError.classList.remove('oculto');
                isValid = false;
            }

            
            if (mensagemInput.value.trim() === '') {
                mensagemError.textContent = 'A mensagem não pode estar vazia.';
                mensagemError.classList.remove('oculto');
                isValid = false;
            }

           
            if (isValid) {
                successMessage.classList.remove('oculto');
                contactForm.reset();
                
                setTimeout(() => {
                    successMessage.classList.add('oculto');
                }, 5000);
            }
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});