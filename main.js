function showCookieAlert() {
    // Verificar si ya se ha mostrado el mensaje de alerta
    if (!localStorage.getItem('cookieAlertShown')) {
      // Mostrar el mensaje de alerta
      alert(
        'Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies nos permiten personalizar el contenido y los anuncios. También compartimos información sobre tu uso de nuestro sitio con nuestros socios de redes sociales, publicidad y análisis, quienes pueden combinarla con otra información que les hayas proporcionado o que hayan recopilado a partir del uso de sus servicios.'
      );
  
      // Marcar que el mensaje de alerta ha sido mostrado
      localStorage.setItem('cookieAlertShown', 'true');
    }
  }
  
  // Llamar a la función cuando la página se carga completamente
  window.onload = function () {
    showCookieAlert();
  };
  
const btnSwitch = document.querySelector('.switch input[type="checkbox"]');

btnSwitch.addEventListener('click', () => {
  const navbarLinks = document.querySelectorAll('.navbar a');
  btnSwitch.classList.toggle('active'); // Toggle 'active' class on the switch itself

  navbarLinks.forEach((link) => {
    link.classList.toggle('dark'); // Toggle 'dark' class on each navbar link
  });

  document.body.classList.toggle('dark'); // Toggle 'dark' class on the body element
});

