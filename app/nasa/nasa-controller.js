function NasaController(){
    console.log('1')
    var nasaService = new NasaService(ready)

    function ready(){
        console.log('add buttons')
    }
    //PRIVATE
    function draw(photoArr){
        var galleryElem = document.getElementById('gallery')
        var template = ''
        for (var i = 0; i < photoArr.length; i++) {
            var photo = photoArr[i];
            template += `
            <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="${photo.img_src}">
                <div class="caption">
                    <h3>${photo.camera.full_name}</h3>
                    <p>${photo.earth_date}</p>
                    <p>${photo.rover.name}</p>
                </div>
            </div>
        </div>
        `
        }
        galleryElem.innerHTML = template
    }
    
    
    
    //PUBLIC
    this.newSol = function newSol(e){
        debugger

        e.preventDefault()
        var sol = e.target.sol.value
        nasaService.getPhotos(sol, draw)
    }
    

    this.camFilter = function camFilter(e){
        e.preventDefault()
        var camName = e.target.camera.value
        var filtered = nasaService.camFilter(camName)
        draw(filtered)
    }
    
    
    
    nasaService.getPhotos(100,draw)
    console.log('6')
}