// import './button.css';
// import './colors.css';

export const createButton = ({
  mode = 'primary',
  size = '100',
  danger = false,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  const variation = danger ? 'btn--danger' : '';

  btn.className = ['btn', `btn--${size}`, `btn--${mode}`, variation].join(' ');


  
  return btn;
};
