import logo from '/logo.png'
function Navbar(){
    return(
    //    main div start here
         <div className='w-full h-24 flex items-center justify-between gap-14'>
          {/*  border-red-400 border-4 */}

            {/* logo div */}
            <div className='ml-8'>
                <img className="w-48 "src={logo}></img>
            </div>

            {/*logo div ends here  */}
 

            {/* items div Start here */}

   
            <div className=' w-9/12 h-full flex  justify-between items-center'>
                 {/*  border-pink-400 border-4 */}
                {/* List div  start here*/}
                <div className=' ml-48'>
                    {/* border-green-300 border-4 */}
                <ul className='flex gap-8'>
                    <li>Pricing</li>
                    <li>Add-ons</li>
                    <li>FAQs</li>
                    <li>Company</li>


                </ul>
                </div>
                 {/* list div ends here */}


                 {/* button div start here */}
                <div className=" mr-14 w-28 h-12 bg-green-300 rounded">
                    {/* 'border-orange-300 border-4 */}
                    <button className='pl-5 pt-3'>Start Here</button>
                </div>
                {/* button div ends here */}

            </div>
            {/* items div ends here */}


         </div>

    )
}

export default Navbar