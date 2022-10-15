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
      'rgb(255, 136, 0)',
      'rgb(255, 255, 0)',
      'rgb(0, 253, 55)',
      'rgb(165, 42, 42)',
      'rgb(128, 128, 128)',
      'rgb(127, 255, 212)',
      'rgb(104, 57, 93)',
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