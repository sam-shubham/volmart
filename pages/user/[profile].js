import { useState, useEffect } from "react";
import AsideNav from "../../Components/SubComponents/asideNav";
import OtherAsideComp from "../../Components/SubComponents/otherAsideComp";
import $ from "jquery";

const Profile = (props) => {
  const [query, setquery] = useState(props.dat);
  console.log(query);
  function isOverflown(element) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }
  useEffect(() => {
    $("body").css({ "background-color": "rgb(241 245 249)" });

    return () => {
      $("body").css({ "background-color": "#fff" });
    };
  }, [$]);

  return (
    <>
      <div className="">
        <div className="newtext bg-slate-100 relative h-[100%] overflow-hidden">
          <div className=" flex justify-between">
            <div className="">
              <AsideNav query={query} setquery={setquery} />
            </div>
            <div className=" w-[100%]">
              <OtherAsideComp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const dat = query.profile;
  return {
    props: { dat },
  };
}

export default Profile;
