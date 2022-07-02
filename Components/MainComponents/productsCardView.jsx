import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Productcarouselviews } from "../SubComponents/productcarouselviews";

export const ProductsCardView = (props) => {
  const [arrayofproduct, setArrayofproduct] = useState([]);
  const type = props.type ? props.type : "allproduct";
  const typeOfProduct = props.typeOfProduct ? props.typeOfProduct : props.type;
  useEffect(() => {
    $.ajax({
      type: "get",
      url: `/api/products/${type}`,
      success: (data) => {
        console.log(data);
        setArrayofproduct(data);
      },
    });
  }, []);
  return (
    <div className="outer-products-cards">
      <div className="inner-products-cards">
        <div className="header-product-cards-view">
          <h3 className="font-[500] text-md tracking-wider">
            New Collection Of {typeOfProduct}
          </h3>
        </div>
        <hr />
        <div className="owl_crousel-view-for-products">
          {arrayofproduct[0] != null ? (
            <Productcarouselviews products={arrayofproduct} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
