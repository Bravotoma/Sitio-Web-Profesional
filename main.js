document.addEventListener('DOMContentLoaded', () => {
  showCookieAlert();
  keepDarkMode();
  highlightActiveLink();

});

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

const btnSwitch = document.querySelector('.switch input[type="checkbox"]');

btnSwitch.addEventListener('click', () => {
  const navbarLinks = document.querySelectorAll('.navbar a');
  const isDarkMode = document.body.classList.toggle('dark'); // Toggle 'dark' class on the body element

  navbarLinks.forEach((link) => {
    link.classList.toggle('dark'); // Toggle 'dark' class on each navbar link
  });

  btnSwitch.classList.toggle('active'); // Toggle 'active' class on the switch itself

  // Save the dark mode state to localStorage
  if (isDarkMode) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});

function keepDarkMode() {
  // Check if dark mode was enabled previously
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach((link) => {
      link.classList.add('dark');
    });
    btnSwitch.classList.add('active');
    btnSwitch.checked = true; // Ensure the checkbox is checked
  }
}


function highlightActiveLink() {
  const path = window.location.pathname.split('/').pop();
  const linkMap = {
    'cortes.html': 'cortes-link',
    'retoques.html': 'retoques-link',
    'baños.html': 'banos-link',
    'tienda.html': 'tienda-link'
  };

  for (const key in linkMap) {
    if (path === key) {
      document.getElementById(linkMap[key]).classList.add('active');
    } else {
      document.getElementById(linkMap[key]).classList.remove('active');
    }
  }
}