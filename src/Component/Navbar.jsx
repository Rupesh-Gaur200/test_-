import logo from '/logo.png'
function Navbar(){
    return(
    //    main div start here
         <div className=' w-full h-24 flex items-center justify-between gap-14'>
          {/*  border-red-400 border-4 */}

            {/* logo div */}
            <div className='shrink-0 w-48  ml-14'>
                <img className="shrink-0 "src={logo}></img>
            </div>

            {/*logo div ends here  */}
 

            {/* items div Start here */}

   
            <div className=' md:w-9/12 h-full flex  justify-between items-center gap-12'>
                 {/*  border-pink-400 border-4 */}
                {/* List div  start here*/}
                <div className='hidden md:block ml-48 mt-1 '>
                    {/* border-green-300 border-4 */}
                <ul className='flex gap-10'>
                    <li className='font-mono'>Pricing</li>
                    <li className='font-mono'>Add-ons</li>
                    <li className='font-mono'>FAQs</li>
                    <li className='font-mono'>Company</li>


                </ul>
                </div>
                 {/* list div ends here */}


                 {/* button div start here */}
                <div className="   mr-14 w-28 h-12 bg-green-300 rounded">
                    {/* 'border-orange-300 border-4 */}
                    <button className='font-mono mt-3 ml-3 '>Start Here</button>
                </div>
                {/* button div ends here */}

            </div>
            {/* items div ends here */}


         </div>

    )
}

export default Navbar