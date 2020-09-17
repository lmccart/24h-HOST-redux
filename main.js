let script;

let path = document.documentElement.lang === 'en' ? 'script-en.json' : 'script-zh.json';
$.get(path, (data) => {
  console.log(data);
  $('#text').text("我想再次见到你").fitText();
});