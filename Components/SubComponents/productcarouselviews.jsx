import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarouse = dynamic(import("react-owl-carousel"), { ssr: false });
import $ from "jquery";

export const Productcarouselviews = (props) => {
  useEffect(() => {
    $(".owl-nav").css({ width: "102.5%", transform: "translateX(-20px)" });
  });
  return (
    <div className="container-fluid">
      <OwlCarouse
        items={6}
        className="owl-theme"
        margin={50}
        stagePadding={10}
        slideBy={4}
        nav={true}
        dots={false}
        navText={[
          `<h3  class="owl-prev-custom">
          <svg xmlns="http://www.w3.org/2000/svg" class="prev invert" width="20" height="40" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/></svg>
          </h3>`,
          `<h3  class="owl-next-custom">
          <svg xmlns="http://www.w3.org/2000/svg" class="next invert" width="20" height="40" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/></svg>
          </h3>`,
        ]}
        animateIn={"rotateInDownRight"}
        animateOut={"rotateOutUpLeft"}
      >
        {props.products.map((el) => {
          return (
            <div key={el._id} className="item">
              <div className="card">
                <div>
                  <img src={el.productImg} alt="" />
                </div>
                <div className="productdetails">
                  <h3>{el.productName}</h3>
                </div>
                <div className="price">
                  <h3>Rs {el.productPrice}</h3>
                  <p className="middleline">{el.productPrice + 4000}</p>
                </div>
                <div>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          );
        })}
      </OwlCarouse>
    </div>
  );
};
