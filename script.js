function debounce(fx, time) {
    let id = null;
    console.log('hello');
    return function (x) {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            fx(x);
            id = null;
        }, time);
    };
}

const input = document.getElementById('text1');
const output = document.getElementById('text-output1');
input.addEventListener(
    'keyup',
    debounce(function (e) {
        output.innerText = e.target.value;
    }, 1000)
);