function NasaService(ready) {

    console.log("2")

    var sol = 1000
    var baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=`
    var key = 'BDALzrV2ji60AQxKUMaHvG6s8diwPLVS8Yy7zEKu'
    var photos = []


    //getPhotos

    //newSearch

    //filter by cam

    this.getPhotos = function getPhotos(solQuery, cb) {
        console.log('5')
        sol = solQuery
        $.get(baseUrl + key)
            .then((res) => {
                console.log("8")
                photos = res.photos
                cb(photos)
                ready()
            })

    }
    console.log('4')
}