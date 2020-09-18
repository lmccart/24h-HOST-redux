let script = [];
let personalities = [];

let path = document.documentElement.lang === 'en' ? 'script-en.json' : 'script-zh.json';
$.get(path, (data) => {
  console.log(data);
  personalities = data.personalities;
  script = script.concat(data.directions);
  script = script.concat(data.questions);
  script = script.concat(data.script);
  update();
  setInterval(update, 500);
  $('#text').text(data.init.toUpperCase()).fitText();
});

const update = () => {
  let item = '';
  if (Math.random() < 1.5) {
    item = randomItem(script);
    item = item.replace('___', randomItem(personalities));
  }
  $('#text').text(item.toUpperCase()).fitText();
}


const randomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}