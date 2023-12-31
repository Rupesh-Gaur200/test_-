import logo from '/logo.png'
function Navbar(){
    return(
    //    main div start here
         <div>


            {/* logo div */}
            <div>
                <img src={logo}></img>
            </div>

            {/*logo div ends here  */}
 \

            {/* items div Start here */}

   
            <div>

                {/* List div  start here*/}
                <div>
                <ul>
                    <li>Pricing</li>
                    <li>Add-ons</li>
                    <li>FAQs</li>
                    <li>Company</li>


                </ul>
                </div>
                 {/* list div ends here */}


                 {/* button div start here */}
                <div>
                    <button>Start Here</button>
                </div>
                {/* button div ends here */}

            </div>
            {/* items div ends here */}


         </div>

    )
}

export default Navbar