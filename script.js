const baseURL = `https://www.dividendapparel.com/listing/`;

const preview = e => document.getElementById(`${e.id}`).src = `./img/${e.name}/${e.ariaLabel}/back.jpg`;
const exitPreview = e => document.getElementById(`${e.id}`).src = `./img/${e.name}/${e.ariaLabel}/front.jpg`;

const biggerPreview = e => {
    console.log(e.name);
    document.getElementById("bigPreviewImg").src = `./img/${e.name}/${e.ariaLabel}/front.jpg`;
    document.getElementById("bigPreviewImg").name = `${e.name}`;
    document.getElementById("bigPreviewImg").ariaLabel = `${e.ariaLabel}`;
    document.getElementById("bigPreviewImg").ariaDetails = `${e.id}`;
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
        document.getElementById("bigPreviewImg").src = `./img/${document.getElementById("bigPreviewImg").name}/${document.getElementById("bigPreviewImg").ariaLabel}/front.jpg`;
    }
    else {
        document.getElementById(e.id).style = "background-color: black;"
        document.getElementById(e.id).ariaChecked = "true"
        document.getElementById("previewFront").style = "background-color: transparent;"
        document.getElementById("previewFront").ariaChecked = "false"
        document.getElementById("bigPreviewImg").src = `./img/${document.getElementById("bigPreviewImg").name}/${document.getElementById("bigPreviewImg").ariaLabel}/back.jpg`;
    }
}

const goToStore = e => {
    window.open(`${baseURL}${document.getElementById("bigPreview").children.bigPreviewImg.ariaDetails}`,"_blank")
}