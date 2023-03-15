const inputs = document.querySelectorAll('.input');
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}
function blurFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}
inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc); // 获得焦点focus
    input.addEventListener('blur', blurFunc); // 失去焦点blur
})
