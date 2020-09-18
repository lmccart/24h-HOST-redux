let debug = false;
let script = [];
let personalities = [];
let say;

let path = document.documentElement.lang === 'en' ? 'script-en.json' : 'script-zh.json';
$.get(path, (data) => {
  console.log(data);
  personalities = data.personalities;
  say = data.say;
  script = script.concat(data.directions);
  script = script.concat($.map(data.questions, function(i) {
    return say + ' ' + i;
  }));
  script = script.concat($.map(data.script, function(i) {
    return say + ' ' + i;
  }));
  update();
  setInterval(update, debug ? 500 : 5000);
  $('#text').text(data.init.toUpperCase()).fitText();
});

const update = () => {
  let rand = debug ? 1 : 0.75;
  if (Math.random() < rand) {
    let item = randomItem(script);
    item = item.replace('___', randomItem(personalities));
    $('#text').text(item.toUpperCase()).fitText();
  }
}


const randomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}