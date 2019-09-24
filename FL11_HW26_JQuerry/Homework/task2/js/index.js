const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $delete = $("button.item-remove");
const $item = $(".item-text");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];
const delClass = () => {
  $(".item button").addClass("item-remove");
  $(".item-remove").bind("click", function () {
    $(this).parent().remove()
  });
}
const completeTask = () => {
  $(".item span").bind("click", function () {
    $(this).css({ "font-style": "italic", "text-decoration": "line-through" });
  });
}
$add.on('click', function (e) {
  const temp = $input.val();
  if (temp === '') {
    return
  }
  const newChild = `<li class="item"><span class="item-text">${temp}</span><button>Remove</button></li>`;
  $list.append(newChild);
  delClass();
  completeTask();
  e.preventDefault();
});
$delete.click(function () {
  $(this).parent().remove();
})
$item.on('click', function () {
  $(this).css({ "font-style": "italic", "text-decoration": "line-through" })
})
