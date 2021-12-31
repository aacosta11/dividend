const baseURL = `https://www.dividendapparel.com/listing/`;

const preview = e => document.getElementById(`${e.id}`).src = "./img/hoodie/buy_and_hold/black/back.jpg";
const exitPreview = e => document.getElementById(`${e.id}`).src = "./img/hoodie/buy_and_hold/black/front.jpg";

const biggerPreview = e => {
    console.log(e.id);
    console.log(document.getElementById("cover"));
    document.getElementById("previewBackdrop").style = "display: block;";
    document.getElementById("cover").style = "filter: blur(10px);";
}