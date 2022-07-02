import styles from "../../Css/navbar.module.css";
import $ from "jquery";
// import { useContext } from "react";
// import { User } from "../contexts/allcontexts";
import { useRouter } from "next/router";
import Script from "next/script";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { User } from "../../context/allcontexts";

const Navbar = (props) => {
  let { pathname } = useRouter();
  const user = useContext(User);

  useEffect(() => {
    if (user.userdata === "") {
      user.saveuserinfo();
    }
  }, [User]);

  useEffect(() => {
    if (user.userdata != "") {
      console.log(user.userdata);
    }
  }, [user.userdata]);
  let todisplay = false;
  function displaysearch() {
    if (!todisplay) {
      $(".searchbtnsvg").animate({
        top: "0rem",
        marginLeft: "0.375rem",
        marginTop: "0.1rem",
      });
      $(".searchiconsvggrap").addClass("absolute");
      $(".searchbtnsvg").addClass("absolute");
      $(".titlenav").addClass("hidden");
      $(".inputformainsearch").animate({
        width: "13rem",
        paddingRight: "0.5rem",
        paddingLeft: "2rem",
        borderRadius: "1rem",
        height: "1.75rem",
      });
      $(".inputformainsearch").trigger("select");
      todisplay = true;
    } else {
      $(".searchbtnsvg").animate({
        top: "0rem",
        marginLeft: "0rem",
        marginTop: "0rem",
      });

      $(".searchiconsvggrap").addClass("mr-3");
      $(".searchiconsvggrap").removeClass(["pt-[0.15rem]", "absolute"]);
      $(".searchbtnsvg").removeClass("absolute");
      $(".inputformainsearch").animate(
        {
          width: "0rem",
          paddingRight: "0rem",
          paddingLeft: "0rem",
          borderRadius: "1rem",
          height: "1.75rem",
        },
        () => {
          $(".titlenav").removeClass("hidden");
        }
      );
      $(".inputformainsearch").trigger("unselect");
      todisplay = false;
    }
  }
  function displaymoboptions() {
    $(".Navitems")
      .slideToggle(500, () => {
        if ($(".Navitems").css("display") === "none") {
          $(".Navitems").removeAttr("style");
        }
      })
      .css({ display: "flex" });
  }

  return (
    <div className={`${styles.navbar} navbar`}>
      <Script src="../impScripts/inpfunctions.js"></Script>
      <div className={`${styles.innernavbar} innernavbar`}>
        <div className={`${styles.innernavforrearrange} innernavforrearrange`}>
          <div className={styles.navcont}>
            <label
              className={`${styles.hamburgerlines} ${styles.divhamburder} divhamburder space-y-1 mr-1 items-end hidden`}
            >
              <input
                type="checkbox"
                className={`${styles.hamburdercheck} hamburdercheck hidden`}
                onChange={displaymoboptions}
              />
              <span
                className={`${styles.line} ${styles.line1} h-1 w-6 bg-green-900 block rounded-md`}
              ></span>
              <span
                className={`${styles.line} ${styles.line2} h-1 w-6 bg-green-900 block rounded-md`}
              ></span>
              <span
                className={`${styles.line} ${styles.line3} h-1 w-6 bg-green-900 block rounded-md`}
              ></span>
            </label>
          </div>
          <div className="titlenav ">
            <h3 className={`${styles.navbartitleitem}`}>Volmart</h3>
          </div>
          <div className={`navbarlinks`}>
            <ul className={`${styles.Navitems} Navitems md:!flex`}>
              <li>
                <Link href="/">
                  <a
                    className={
                      pathname === "/"
                        ? `${styles.btn12} ${styles.active}`
                        : styles.btn12
                    }
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a
                    className={
                      pathname === "/services"
                        ? `${styles.btn12} ${styles.active}`
                        : styles.btn12
                    }
                  >
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a
                    className={
                      pathname === "/about"
                        ? `${styles.btn12} ${styles.active}`
                        : styles.btn12
                    }
                  >
                    AboutUs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contactus">
                  <a
                    className={
                      pathname === "/contactus"
                        ? `${styles.btn12} ${styles.active}`
                        : styles.btn12
                    }
                  >
                    ContactUs
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {/* <i className="fa-solid fa-magnifying-glass mx-4 mt-1 fa-lg cursor-pointer  top-8 ml-1.5"></i> */}

              <button
                className="searchbtnsvg outline-none"
                onClick={() => {
                  displaysearch();
                }}
              >
                <i className="fa-solid fa-magnifying-glass fa-lg mr-3 cursor-pointer top-[1.8rem] ml-1.2 md:top-[2rem] searchiconsvggrap"></i>
              </button>
              <input
                type="text"
                className={` rounded-2xl w-[0px]  h-7 max-w-[13rem] text-black inputformainsearch ${styles.inputformainsearch}`}
                style={{ fontFamily: "Varela Round" }}
              />
            </form>
          </div>
          <Link href="/auth/user">
            <i
              className={`fa-solid fa-user-plus mx-2.5 fa-lg cursor-pointer ${
                user.login ? "!hidden before:hidden" : ""
              }`}
              // className={
              //   !user.login
              //     ? "fa-solid fa-user-plus mx-2.5 fa-lg cursor-pointer"
              //     : "fa-solid fa-user-plus mx-2.5 fa-lg cursor-pointer !hidden before:hidden"
              // }
            ></i>
          </Link>
          <Link href="/user/Account">
            <i
              className={`fa-solid fa-user mx-2.5 fa-lg cursor-pointer ${
                !user.login ? "!hidden before:hidden" : ""
              }`}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
