import React from "react";
import '../style/service.css'
export default function Service() {
  return (
    <>
   
    <div className="service">
    <h1>Nos Services</h1>
      <ul className="card-wrapper">
  <li className="card">
    <img src='https://www.dynamique-mag.com/wp-content/uploads/800a45eea37bb71d392dd5aeabc9825b.jpg' alt=''/>
    <h3><a href=""> la géolocalisation pour véhicules d’entreprise
</a></h3>
    <p>Lorem ipsum sit dolor amit</p>
  </li>
  <li className="card">
    <img src='https://www.hubone.fr/data/2021/03/hubone-1617194109-700x500.png' alt=''/>
    <h3><a href="">La géolocalisation par le champ magnétique terrestre!</a></h3>
    <p>Lorem ipsum sit dolor amit</p>
  </li>
  <li className="card">
    <img src='https://www.geo-tracking.net/wp-content/uploads/2018/08/flotte.png' alt=''/>
    <h3><a href="">Geolocalisation vehicule : un suivi instantané et à distance</a></h3>
    <p>Lorem ipsum sit dolor amit</p>
  </li>
</ul>
</div>
    </>
  );
}
