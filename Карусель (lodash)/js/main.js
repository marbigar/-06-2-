var output = document.getElementById('output');
var tmpl = document.getElementById('slider_tmpl').innerHTML;

output.innerHTML = _.template(tmpl)(users);


$('.slider').slider();