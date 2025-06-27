let petsImageUrls = {
    dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    parrot: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    spider: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    rabbit: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};




let petSelectEl = document.getElementById("petSelect");
let petImgEl = document.getElementById("petImg");



let updatePetImage =  () => {
    let selectedPetImage = petSelectEl.value;
    console.log(selectedPetImage);

    if (petsImageUrls[selectedPetImage]) {
        petImgEl.src = petsImageUrls[selectedPetImage]; 
    }
}



petSelectEl.addEventListener("change", updatePetImage); 

document.addEventListener("DOMContentLoaded", updatePetImage); 