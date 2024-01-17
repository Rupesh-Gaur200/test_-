

function ImageSlider ({slides}){
    return(
        <div  className="border-4 border-red-400">
           { slides.map((t)=>{


              return (
                
                <img src={t}></img>
              )


           })



           }
        </div>
    )
}

export default ImageSlider