const lazyLoad = () => {
  const lazyClass = document.querySelectorAll('.lazy_load');
  return lazyClass.forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight) {
      item.style.opacity = 1;
      item.style.transform = "translateX(0)";
    } 
  });
}
window.addEventListener('scroll', lazyLoad);

const resetFields = () => {
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#msg').value = '';
}

const sendButton = document.querySelector('#contact_button');
const sendContact = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const msg = document.querySelector('#msg').value;

  Email.send({
    SecureToken : "24e45d07-dd69-40bf-872a-392fdbd7e5e9",
    To : 'gbranco1993@gmail.com',
    From : 'gbcontatoportifolio@gmail.com',
    Subject : `Contato via portifólio`,
    Body : `
      <h1>Mensagem de ${name}</h1>
      <p>Email para retorno: ${email}</p>
      <p>Assunto: ${msg}</p>
    `,
  }).then(
    () => alert('Agradeço o Contato! Retornarei em breve.'),
  );

  resetFields();
}
sendButton.addEventListener('click', sendContact);
