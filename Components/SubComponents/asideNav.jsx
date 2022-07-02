import React from "react";
import Router from "next/router";
import { useState } from "react";
import $ from "jquery";
import { useEffect } from "react";

const AsideNav = (props) => {
  let Arrofdat = [
    "Account",
    "Addresses",
    "How To Sell?",
    "Debit/Credit Cards",
    "SignOut",
  ];
  var illegalchar = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "*",
    "*",
    "(",
    ")",
    "-",
    "+",
    "/",
    "?",
    " ",
  ];
  const [selected, setselected] = useState(
    props.selected ? props.selected : ""
  );
  //   switch (props.query) {
  //     case value:
  //       break;

  //     default:
  //       break;
  //   }
  useEffect(() => {
    Arrofdat.forEach((el) => {
      const trimsel = el;
      illegalchar.forEach((element) => {
        if (trimsel.includes(element)) {
          trimsel = trimsel.replaceAll(element, "");
        }
        if (props.query === trimsel) {
          setselected(el);
        }
      });
    });
  }, [$]);
  useEffect(() => {
    if (selected) {
      const trimsel = selected;
      illegalchar.forEach((element) => {
        if (trimsel.includes(element)) {
          trimsel = trimsel.replaceAll(element, "");
        }
      });
      Router.push(trimsel);
      props.setquery(selected);
      $(`.allasideval`).children("li").removeClass("bg-cyan-300");
      $(`h3:contains('${selected}')`).parent().addClass("bg-cyan-300");
    }
  }, [selected]);
  return (
    <>
      <div className="">
        <div className="bg-white m-[.5rem] rounded-sm shadow-md ">
          <ul className="allasideval flex flex-col space-y-2 pl-[.5rem] pb-[1rem] min-w-[5rem] md:min-w-[13rem] min-h-[26rem] max-h-[87vh] pr-[4rem] pt-[1rem] overflow-x-hidden overflow-y-auto ">
            {Arrofdat.map((el) => {
              return (
                <li
                  key={el}
                  className="asideitem hover:bg-cyan-300 pl-[.5rem] w-[130%] rounded-sm cursor-pointer mb-1 pt-1"
                  onClick={(e) => {
                    setselected(e.currentTarget.firstChild.textContent);
                  }}
                >
                  <h3 className="mb-1.5 mt-1 cursor-pointer">{el}</h3>
                  <hr className="w-[100%]" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default AsideNav;
