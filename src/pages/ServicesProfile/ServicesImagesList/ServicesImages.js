import React from "react";
import { useState, useEffect } from "react";



const [url, setUrl] = useState("");
localStorage.setItem("Images", JSON.stringify(Images));

useEffect(() => {
  setUrl(localStorage.getItem("Images", JSON.stringify(Images)));
}, [])

const Images = [
  "icons/preventative.png",
  "icons/restorative.png",
  "icons/comprehensive.png",
  "icons/ortodontia.png",
  "icons/cosmetic.png"
];



export default function ServicesImages() {
  return (
    <div>

    </div>
  )
}