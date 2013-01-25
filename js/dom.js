var cloneId = 3;

window.addEventListener('load', onLoad, false);

function onLoad() {
  insertNode();

  document.querySelector('button.insert-node').addEventListener('click', insertNode, false);
}

function insertNode() {
  var node  = document.querySelector('h2'),
      clone = node.cloneNode(true);

  clone.innerHTML = clone.innerHTML.substr(0, clone.innerHTML.length - 1) + cloneId++;

  document.body.appendChild(clone);
}
