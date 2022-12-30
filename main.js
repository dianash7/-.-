let back = document.getElementById('main-block');
let position = 1;
let formula = ''

function minus() {
    if (position < 2) {
        position = 6
    }

    position = position - 1;
    formula = 'url(/photo-' + position + '.jpg)';
    back.style.backgroundImage = formula;
}
function plus() {
    if (position > 4) {
        position = 0
    }

    position = position + 1;
    formula = 'url(/photo-' + position + '.jpg)';
    back.style.backgroundImage = formula;
}