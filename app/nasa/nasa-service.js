function NasaService(ready) {

    console.log("2")

    var baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=`
    var key = '&api_key=BDALzrV2ji60AQxKUMaHvG6s8diwPLVS8Yy7zEKu'
    var photos = []

    

    this.camFilter = function camFilter(camName){
        //check camera.name vs camName
        return photos.filter(function(photo){
            if(photo.camera.name == camName){
              return true;
            }
          });
    }

    this.getPhotos = function getPhotos(solQuery, cb) {
        console.log('5')
        $.get(baseUrl + solQuery + key)
            .then((res) => {
                console.log("8")
                photos = res.photos
                cb(photos)
                ready()
            })

    }
    console.log('4')
}