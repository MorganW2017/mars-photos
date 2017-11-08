function NasaController(){
    console.log('1')
    var nasaService = new NasaService(ready)

    function ready(){
        console.log('add buttons')
    }
    //PRIVATE
    function draw(photoArr){
        console.log('running?')
        console.log(photoArr)
    }
    nasaService.getPhotos(100,draw)
    console.log('6')



    //PUBLIC





}