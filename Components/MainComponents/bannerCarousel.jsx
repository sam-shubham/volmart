// import OwlCarousel from "react-owl-carousel";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import $ from "jquery";
import { useEffect } from "react";

const BannerCarousel = (props) => {
  return (
    <OwlCarousel
      loop={true}
      items={1}
      //   responsiveRefreshRate={0}
      autoplay={true}
      autoplayTimeout={7000}
      autoplayHoverPause={false}
      className="owl-theme"
      touchDrag={false}
      mouseDrag={false}
      nav={true}
      onLoad={() => {
        for (let i = 0; i < 4; i++) {
          switch (i) {
            case 0:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "49%" }, 3800);
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "0%" }, 2600);
              break;
            case 1:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "51%" }, 3700);
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "0%" }, 2800);
              break;
            case 2:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "53%" }, 3600);
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "0%" }, 2900);
              break;
            case 3:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "47%" }, 3500);
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "0%" }, 2800);
              break;

            default:
              break;
          }
        }
      }}
      onAnimationEnd={() => {
        for (let i = 0; i < 4; i++) {
          switch (i) {
            case 0:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "0%" }, 1300);
              break;
            case 1:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "0%" }, 1700);
              break;
            case 2:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "0%" }, 1800);
              break;
            case 3:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "0%" }, 1500);
              break;

            default:
              break;
          }
        }
      }}
      onAnimationStart={() => {
        for (let i = 0; i < 4; i++) {
          switch (i) {
            case 0:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "49%" }, 2500);
              break;
            case 1:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "51%" }, 2700);
              break;
            case 2:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "53%" }, 2900);
              break;
            case 3:
              $("div.topbannerview")
                .find(".owl-item.active")
                .find("div.bannerOverlay")
                .find("div.clip" + i)
                .animate({ width: "47%" }, 2500);
              console.log(
                $("div.topbannerview")
                  .find(".owl-item.active")
                  .find("div.bannerOverlay")
                  .find("div.clip" + i)
              );
              break;

            default:
              break;
          }
        }
      }}
      //   onAnimationStart={() => {
      //     for (let i = 0; i < 3; i++) {
      //       $("div.topbannerview")
      //         .find(".owl-item.active")
      //         .find(`#bannerOverlay.clip${i}`)
      //         .animate({ width: "0px" });
      //     }
      //   }}
      navText={[
        `<h3  class="owl-prev-custom">
          <svg xmlns="http://www.w3.org/2000/svg" class="prev invert" width="20" height="40" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/></svg>
          </h3>`,
        `<h3  class="owl-next-custom">
          <svg xmlns="http://www.w3.org/2000/svg" class="next invert" width="20" height="40" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/></svg>
          </h3>`,
      ]}
      // margin={20}
      dots={false}
      animateIn={"zoomInLeft"}
      animateOut={"zoomOutRight"}
    >
      {props.imgarr.map((el) => {
        return (
          <div key={el}>
            <div className="bannerOverlay">
              <div
                className="clip0 bg-[#c3ec87]  h-full block absolute opacity-20 z-[1]"
                style={{
                  clipPath: "polygon(0 0, 64% 0, 100% 100%, 0% 100%) ",
                }}
              ></div>
              <div
                className="clip1 bg-[#b09efa]  h-full block absolute opacity-20 z-[1]"
                style={{
                  clipPath: "polygon(0 0, 72% 0, 90% 100%, 0% 100%) ",
                }}
              ></div>
              <div
                className="clip2 bg-[#8cf1e0]  h-full block absolute opacity-20 z-[1]"
                style={{
                  clipPath: "polygon(0 0, 55% 0, 100% 100%, 0% 100%) ",
                }}
              ></div>
              <div
                className="clip3 bg-[#8e878742] max-w-[47%] w-0 h-full block absolute  z-[2] text-white space-y-5"
                style={{
                  clipPath: "polygon(0 0, 71% 0, 100% 100%, 0% 100%)",
                  backdropFilter: "blur(1px)",
                }}
              >
                <div className=" mt-10 ml-[8rem] text-lg font-medium tracking-wider md:text-[2rem] md:mt-[12rem]">
                  <h1>Diwali Sale</h1>
                </div>
                <div className=" max-w-[80%] pt-[2rem] pl-[7.5rem]">
                  <h3>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius ipsum et doloribus quam magni dicta, aliquid ut
                    similique cupiditate dolorum!
                  </h3>
                </div>
                <div className=" pl-[7.8rem] pt-[2rem]">
                  <button
                    className="bg-sky-400 w-[8rem] h-[3rem] px-3 py-2 rounded-tr-[30px] rounded-bl-[30px] tracking-wider cursor-pointer 
                  transition-all duration-500 
                  hover:rounded-br-[30px] hover:rounded-tl-[30px] 
                  hover:rounded-bl-[0px] 
                  hover:rounded-tr-[0px]"
                    style={{
                      background:
                        "linear-gradient(45deg,rgb(10,0,0),rgb(60,155,50),rgb(0,10,0))",
                    }}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
            <img className=" z-[-1]" src={el} alt="" />
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default BannerCarousel;
