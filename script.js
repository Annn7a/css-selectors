
const copy = (btnId, imgId) => {
    let btn = document.getElementById(btnId);

    btn.addEventListener('click', function () {
        let imgDisplay = document.getElementById(imgId);
        if (imgDisplay.style.display === "block") {
            imgDisplay.style.display = "none";
        } else {
            imgDisplay.style.display = "block";
        }
    });
}
copy('myBtn1', 'example1');
copy('myBtn2', 'example2');
copy('myBtn3', 'example3');