const baseURL = `https://www.dividendapparel.com/listing/`;

const preview = e => document.getElementsByName(`${e.name}`).src = "./img/hoodie/buy_and_hold/black/back.jpg";
const exitPreview = e => document.getElementsByName(`${e.name}`).src = "./img/hoodie/buy_and_hold/black/front.jpg";

const biggerPreview = e => {
    console.log(e.name);
    document.getElementById("previewBackdrop").style = "display: block;";
    document.getElementById("cover").style = "filter: blur(10px);";
}

const exitBigPreview = e => {
    document.getElementById("previewBackdrop").style = "display: none;";
    document.getElementById("cover").style = "filter: none;";
}

const flipflop = e => {
    if (e.id == "previewFront") {
        document.getElementById(e.id).style = "background-color: black;"
        document.getElementById(e.id).ariaChecked = "true"
        document.getElementById("previewBack").style = "background-color: transparent;"
        document.getElementById("previewBack").ariaChecked = "false"
        document.getElementById("bigPreview").children.bigPreviewImg.src = "./img/hoodie/buy_and_hold/black/front.jpg"
    }
    else {
        document.getElementById(e.id).style = "background-color: black;"
        document.getElementById(e.id).ariaChecked = "true"
        document.getElementById("previewFront").style = "background-color: transparent;"
        document.getElementById("previewFront").ariaChecked = "false"
        document.getElementById("bigPreview").children.bigPreviewImg.src = "./img/hoodie/buy_and_hold/black/back.jpg"

    }
}

const goToStore = e => {
    window.open(`${baseURL}${document.getElementById("bigPreview").children.bigPreviewImg.name}`,"_blank")
}