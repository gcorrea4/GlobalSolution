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
            
          
            nomeError.style.display = 'none';
            emailError.style.display = 'none';
            mensagemError.style.display = 'none';
            successMessage.style.display = 'none';

           
            if (nomeInput.value.trim() === '') {
                nomeError.textContent = 'Por favor, digite seu nome.';
                nomeError.style.display = 'block';
                isValid = false;
            }

            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Por favor, digite seu e-mail.';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Por favor, digite um e-mail válido.';
                emailError.style.display = 'block';
                isValid = false;
            }

            if (mensagemInput.value.trim() === '') {
                mensagemError.textContent = 'A mensagem não pode estar vazia.';
                mensagemError.style.display = 'block';
                isValid = false;
            }

         
            if (isValid) {
                successMessage.style.display = 'block';
                contactForm.reset();
                
               
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});