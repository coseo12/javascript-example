const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

const createItem = text => {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const icon = document.createElement('i');
  icon.setAttribute('class', 'fas fa-trash-alt');
  deleteBtn.appendChild(icon);

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

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
