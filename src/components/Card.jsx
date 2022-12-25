import React from 'react';
import pictureex from "../assets/pexels-mike-b-810357.jpg"

function Card () {
    return (
        <div>
            <div>
             {pictureex}
             <pictureex/>
            </div>
            <div>
                <div>
                    <ul>
                        <li>
                            <span>
                                Mercedes AMG - 2019
                            </span>
                        </li>
                        <li>
                            icon
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>Moteur:</span>
                            <span>2.0 GTI</span>
                        </li>
                        <li>
                            <span>Distance:</span>
                            <span> 140000 Km</span>
                        </li>
                        <li>
                            <span>Prix Estimé : </span>
                            <span> 2.500.000 DA</span>
                        </li>
                    </ul>
                </div>
                <div>
                    2.200.000 DA
                </div>
            </div>
        </div>
    )
}

export default Card;