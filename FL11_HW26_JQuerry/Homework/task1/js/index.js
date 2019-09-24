$('body').css({
  'padding': '30px'
})

$('#title').css({
  'text-align': 'center',
  'margin-top': '0'
})

$('.row').css({
  'border-style': 'double',
  'padding': '20px'
})

$('h2').css({
  'color': 'dodgerblue',
  'margin-top': '0'
})

$('.list').children().css({
  'font-size': '18px'
});

$('#list-1 li').find(':hidden').not('.clonned').show();
$('#list-1 li').find(':empty').hide();

$('#list-3 li:even').css({
  'margin-left': '-20px'
});

$('#list-3 li:first').css({
  'color': 'lightgreen'
});

$('#list-3 li:gt(5)').css({
  'color': '#ccc'
});

$('ul').parent().show();

$('li').has('em').css({
  'color': 'red'
});

$("li:contains('Buratino')").css({
  'font-weight': 'bold'
});
$('p b:only-child()').css({
  'font-size': '34px'
});
$('p em:last-of-type').css({
  'color': 'green'
});

$("input[name$='age']").css("width", "80px");
$("input[name^='my']").css("width", "120px");

const checked = $("input[type='checkbox']:checked");
console.log(checked);
$("img[src*='cat']").show();


$(".mbox").eq(3).css("padding-top", "50px");
$("img").first().css({ "float": "left", "border": "1px solid red" });