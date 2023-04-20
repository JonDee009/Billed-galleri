const gallery = (function() {
    const GALLERY = document.querySelector(".gallery__container")
    const FOCUSED_IMAGE = document.createElement("img")
    FOCUSED_IMAGE.classList.add("gallery__focusedImage")
    const THUMBNAILS = document.createElement("div")
    THUMBNAILS.classList.add("gallery__thumbnails")
    const TEXT = document.querySelector(".image__text")
    
    

    function buildThumbnail (image) {
        const BUTTON = document.createElement("button")
        BUTTON.addEventListener("mouseover", changeFocus)
        BUTTON.addEventListener("click", changeFocus)
        BUTTON.innerHTML = `<img id="${image[1]}" src="${image[0]}" alt="${image[1]}" 
        class="gallery__thumbnail">` //plinger, istedet for citationstegn kan man referer rene variabel navne
        BUTTON.classList.add("gallery__button")
        THUMBNAILS.append(BUTTON)   
    }



    function changeFocus (event){
        FOCUSED_IMAGE.src = event.target.src
        GALLERY.append(event.target.getAttribute("alt"))
      
    }

    function init(images = []){
        FOCUSED_IMAGE.src = images[0][0]
        images.forEach(buildThumbnail) //kommer thumbnails ind i div'en
        GALLERY.append(FOCUSED_IMAGE, THUMBNAILS)
        
    }

    /*const imageText = document.querySelector('.image__text');
    imageText.innerHTML = '';

    imageText.innerHTML = 'New text to be displayed';*/

    
    return {
        init
    }

})()