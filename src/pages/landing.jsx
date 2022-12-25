import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";
import Navbar from "../components/Navbar";
import FirstPic from "../assets/pexels-antoni-shkraba-7144212.jpg";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Landing() {
  return (
    <div className= "bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white h-screen">
      <Navbar inLanding />
      <div className="mb-16 flex ml-24">
        <div className="flex-1 py-8 px-12">
          <div className="py-8 font-bold text-4xl">Une meilleure façon de vendre</div>
          <div>
            Si vous cherchez une platform pour achat ou vente des voitures,
            alors vous êtes dans le bon chemin
          </div>
          <button className="px-4 my-5 py-3 font-sm bg-white text-black rounded-lg">
            Aller explorer
          </button>
          <div className="flex space-x-12">
            <div className="flex">
              <StarIcon aria-hidden="true" color="yellow" />
              <StarIcon aria-hidden="true" color="yellow" />{" "}
              <StarIcon aria-hidden="true" color="yellow" />{" "}
              <StarIcon aria-hidden="true" color="yellow" />{" "}
              <StarIcon aria-hidden="true" color="yellow" />
              {/* <StarIcon
                className="w-1/3 h-1/3"
                aria-hidden="true"
                color="yellow"
              /> */}
            </div>
            <div className="font-bold text-xl">
              L'un des plus grand sites d'achats dans l'Algérie
            </div>
          </div>
        </div>
        <div className="flex-1">
            <img className="w-72" src={FirstPic}/>
        </div>
      </div>
      <div className="ml-36">
          <img className="w-72" src={FirstPic}/>
      </div>
      <div className="text-black ml-96 w-72">
         <span className="font-semibold text-xl">Comment ça fonctionne ?</span>
         <ul>
          <li className="flex flex-row">
            <div>
              icon
            </div>
            <div class="ktiba" className="flex flex-col">   
              <span className="font-semibold">Tell us your car preferences</span>
              <span>And with our machine learning system we'll make sure to give you the best offers</span>
            </div>
          </li>
          <li className="flex flex-row">
            <div>
              icon
            </div>
            <div class="ktiba"className="flex flex-col">   
              <span className="font-semibold">No matter how your budget is</span>
              <span>We'll always try and give you the best ones that suit you</span>
            </div>
          </li>
          <li className="flex flex-row">
            <div>
              icon
            </div>
            <div class="ktiba" className="flex flex-col">   
              <span className="font-semibold">The direct connexion between seller and buyer</span>
              <span>You can chat with the announce owner at anytime and anywhere</span>
            </div>
          </li>
         </ul>
      </div>
      {/* <Card/> */}
      <Footer/>
    </div>
  );
}
