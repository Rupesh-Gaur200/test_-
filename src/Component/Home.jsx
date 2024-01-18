import HeaderItem1 from './HeaderItem1'
import ImageSlider from './ImageSlider'
import img1 from '/img1.webp'
import img2 from '/img2.webp'
import img3 from '/img3.webp'
import img4 from '/img4.webp'
import img5 from '/img5.webp'



function Home (){

    const slides=[img1,img2,img3,img4,img5]


    return (
     

    

        // main div start here
        <div className="w-full">
            {/*  border-4 border-emerald-900 */}


            <HeaderItem1></HeaderItem1>
             

            <ImageSlider slides={slides}></ImageSlider> 
          


        
        </div>
    //    main div ends here


    )

}
export default Home 