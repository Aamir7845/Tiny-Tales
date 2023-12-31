import React from "react";

const Card = ( {menuData }) => {
  //   console.log(menuData);
  // console.log(menuData[5].id)
 
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          console.log(curElem.id)
          console.log("next")
          {/* const { id, name, category, image, description} = curElem; */}

          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElem.id}</span>
                    <span className="card-author subtle" style={{color: "red"}}> {curElem.category}</span>
                    <h2 className="card-title"> {curElem.name} </h2>
                    <span className="card-description subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={curElem.image} alt="images" className="card-media" />
                  <span className="card-tag  subtle">{curElem.price}</span>

                  <span className="card-tag  subtle"><b>Buy Now</b></span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Card;