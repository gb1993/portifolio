const labels = [
  'HTML',
  'JS',
  'React',
  'CSS',
  'Node',
  'Redux',
  'TS',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Skills',
    backgroundColor: [
      'rgb(173, 255, 47)',
    ],
    data: [100, 100, 90, 100, 50, 80, 30],
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    responsive: true,
  },
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

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

const sendButton = document.querySelector('#contact_button');
const name = document.querySelector('#name').value;
const email = document.querySelector('#email').value;
const msg = document.querySelector('#msg').value;

const sendContact = (e) => {
  e.preventDefault();
  Email.send({
    SecureToken : "27ca80ee-46da-4494-adb9-fcb9d7bb28b0",
    To : 'gbcontatoportifolio@gmail.com',
    From : email,
    Subject : `Contato de ${name} via portifólio`,
    Body : msg
  }).then(
    message => alert(message)
  );
}
