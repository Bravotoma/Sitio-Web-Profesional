alert("Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies nos permiten personalizar el contenido y los anuncios. También compartimos información sobre tu uso de nuestro sitio con nuestros socios de redes sociales, publicidad y análisis, quienes pueden combinarla con otra información que les hayas proporcionado o que hayan recopilado a partir del uso de sus servicios.");

const btnSwitch = document.querySelector('switch');

btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('active');
    document.body.classList.toggle('dark');

});