const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

const createItem = text => {
  const id = Date.now();
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item_delete">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
  `;
  return itemRow;
};

const onAdd = () => {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ behavior: 'smooth' });
  input.value = '';
  input.focus();
};

addBtn.addEventListener('click', onAdd);
input.addEventListener('keypress', event => {
  if (event.code === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
