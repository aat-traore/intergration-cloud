import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://www.aag.org/wp-content/uploads/2021/12/shutterstock_1111879247.jpg" },
    { url: "https://trustmyscience.com/wp-content/uploads/2020/03/coronavirus-geolocalisation.jpeg" },
    { url: "https://demarchesadministratives.fr/images/demarches/830/controler-la-geolocalisation-utilisee-par-les-applications-installees-sur-les-mobiles-comment-proceder.jpg" },
   
  ];
 export default function Nav ()  {
    return(
        <>
        <div>
            <SimpleImageSlider
            width={'100%'}
            height={404}
            images={images}
            showBullets={true}
            showNavs={true}
            />
        </div>
        
        </>
    )

}