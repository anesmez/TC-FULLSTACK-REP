import React from "react";
import { Link } from "react-router-dom";
// import {} from "@fortawesome/react-fontawesome"

function Footer () {
    return(
        <div className='bg-gradient-to-tr from-blue-700 to-blue-400 flex flex-row h-2/6 justify-center place-items-center'>
            <div className="flex flex-col ">
            <hr className="w"/>
            <div className="left w-2/5 ml-14">
                <div>
                    <span>
                        Un site Algerien qui fait la relation entre le vendeur et client dans le marché des voitures
                    </span>
                </div>
                <ul>
                    <li>
                        <img></img>
                        <span>023131482</span>
                    </li>
                    <li>
                        <img></img>
                        <span>Karossa_dz@karossa.dz</span>
                    </li>
                    <li>
                        <ul>
                            <a href="https://www.facebook.com">
                            <li>
                                <img></img>
                            </li>
                            </a>
                            <a href="https://www.twitter.com">
                            <li>
                                <img></img>
                            </li>
                            </a>
                            <a href="https://www.google.com">
                            <li>
                                <img></img>
                            </li>
                            </a>
                        </ul>
                    </li>
                </ul>

            </div>
            </div>
            <div className="w-3/5">
                <ul className="flex justify-around">
                    <li>
                        <span className="font-bold text-xl">
                            Explore
                        </span>
                        <ul>
                            <Link to="/home">
                            <li>
                                Home
                            </li>
                            </Link>
                            <Link to="/Account">
                            <li >
                                Account
                            </li>
                            </Link>
                            <Link to="Favorites">
                            <li>
                                Favorites
                            </li>
                            </Link>
                            
                        </ul>
                    </li>

                    <li>
                        <span className="font-bold text-xl">
                            Know more
                        </span>
                        <ul>
                            <Link to="/home">
                            <li>
                                Home
                            </li>
                            </Link>
                            <Link to="/Account">
                            <li >
                                Account
                            </li>
                            </Link>
                            <Link to="Favorites">
                            <li>
                                Favorites
                            </li>
                            </Link>     
                        </ul>
                    </li>
                    
                    <li>
                        <span className="font-bold text-xl">
                            About
                        </span>
                        <ul>
                            <Link to="/home">
                            <li>
                                Home
                            </li>
                            </Link>
                            <Link to="/Account">
                            <li >
                                Account
                            </li>
                            </Link>
                            <Link to="Favorites">
                            <li>
                                Favorites
                            </li>
                            </Link> 
                        </ul>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;