function snapMainHeight() {
    const main = document.querySelector('main');
    const vw = window.innerWidth / 100;
    const unit = 10 * vw;

    main.style.height = 'auto'; // reset to natural height
    const contentHeight = main.scrollHeight;
    const snappedHeight = Math.ceil(contentHeight / unit) * unit;

    main.style.height = `${snappedHeight}px`;
}

window.addEventListener("load", snapMainHeight)
window.addEventListener("resize", snapMainHeight)
