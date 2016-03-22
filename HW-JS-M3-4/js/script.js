var ElemDiv = document.createElement('div');
ElemDiv.classList.add('BodyClass');
ElemDiv.innerHTML = 'Some Text';

var body1 = document.querySelector('body');
body1.appendChild(ElemDiv);