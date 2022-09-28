let nav = document.getElementById('nav');

for (let i = 0; i < 6; i++) {
    let div = document.createElement('div');
    div.innerHTML = '<div class="nav-icon"></div>';
    nav.appendChild(div);
}
