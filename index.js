const $box = document.querySelectorAll('.box');
const $modal = document.getElementById('rating-id')
const $vector = document.getElementById('img-id')

function rating () {
    $box.classList.toggle('.box-color')
}

console.log($box)

function modalClick() {
   $modal.classList.toggle('rating-view')
   return vectorReverse ()
}
function vectorReverse() {
    const imageChange = $vector.value 
    img.setAttribute('src', imageChange)
}