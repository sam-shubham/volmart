import Head from "next/head";
import $ from "jquery";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BannerCarousel from "../Components/MainComponents/bannerCarousel";
import { ProductsCardView } from "../Components/MainComponents/productsCardView";

export default function Home() {
  const [imgarr, setimgarr] = useState([]);
  useEffect(() => {
    $.ready.then(() => {
      var arr = new Array();
      let numtoload = 8;
      for (let i = 0; i < numtoload; i++) {
        arr.push(
          `https://picsum.photos/${window.innerWidth
            .toString()
            .substring(0, window.innerWidth.toString().length - 1)}${i}/${
            window.innerHeight - 95
          }`
        );
        if (i === numtoload - 1) {
          setimgarr(arr);
        }
      }
    });
    var arr = new Array();
    let numtoload = 8;
    for (let i = 0; i < numtoload; i++) {
      arr.push(
        `https://picsum.photos/${window.innerWidth
          .toString()
          .substring(0, window.innerWidth.toString().length - 1)}${i}/${
          window.innerHeight - 95
        }`
      );
      if (i === numtoload - 1) {
        setimgarr(arr);
      }
    }
  }, [$]);
  return (
    <>
      <Head>
        <title>Volmart | Shop For SmartBuyers</title>
        <meta name="description" content="Created By Aditya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="topbannerview">
        <BannerCarousel imgarr={imgarr} />
      </div>
      <ProductsCardView type="Laptop" />
      <ProductsCardView
        type="AndroidSmartPhone"
        typeOfProduct="Android Phones"
      />
      <ProductsCardView
        type="SmartAndroidTV"
        typeOfProduct="Smart Android TV"
      />
      <ProductsCardView type="Boots" />
      <ProductsCardView type="Deodorant" />
    </>
  );
}
