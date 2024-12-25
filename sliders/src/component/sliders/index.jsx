import { useState } from "react";

const images = [
  "https://m.media-amazon.com/images/I/61xMoRzi-BL._AC_UF894,1000_QL80_.jpg",
  "https://static.jojowiki.com/images/thumb/e/ed/latest/20191015214804/RippleAdventurePromo.jpg/800px-RippleAdventurePromo.jpg",
  "https://m.media-amazon.com/images/I/71y59bwh9PL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNjE2MTNiYTItOWY1NS00ZWFiLThhMTMtMmFlNWFjNjRmZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
];

function Sliders() {
  const [source, setsource] = useState(1);

  function handleClick(i) { 

 
setsource(i)

    



    }

  return (
    <>
      <div className="container">
  
        <div className="mainbox">
          <img src={images[source-1]} alt="" />
        </div>
        <div className="lowerbox">
          {images.map((image, index) => {
            return (
              <img
                key={index}
                onClick={() => handleClick(index + 1)}
                src={image}
                alt=""
              />
            );
          })}
        </div>

      </div>
    </>
  );
}

export default Sliders;
