import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "./image.css"
import { useCallback , useState } from 'react'
function ImageSlider ({slides}){

   const [emblaRef, emblaApi] = useEmblaCarousel({loop:true},[Autoplay(
      {
         delay:3000
      }
   )])


   const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    return(
      
          
                   <div className="embla" ref={emblaRef}>
                     <div className="embla__container">
          
           { slides.map((t ,index)=>{


              return (

               
                
              
                       <div className="embla__slide">
                        
                        <img className='img' src={t.url}></img>
                        {/* <button className="embla__prev" onClick={scrollPrev}>Prev</button>
                        <button className="embla__next" onClick={scrollNext}>Next</button> */}
                       </div>
                       
                     

                
              )


           })



           }
       </div>
       </div>
       
    )
}

export default ImageSlider