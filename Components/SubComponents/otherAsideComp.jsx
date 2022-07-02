import React from "react";

const OtherAsideComp = (props) => {
  // let innerContainer=props.innerContainer || false;
  let innerContainer = true;
  //   let innerdiv = <div>adadadadadada</div>
  //   <div>hjgvy;</div>
  return (
    <>
      <div className="mt-[.5rem] mr-4  w-[100%] shadow-xl">
        <div className="bg-white rounded-sm h-[87vh]  mr-[10px] p-2 ">
          {innerContainer ? (
            <div className="BlueDiv p-2 border-2 border-gray-120 rounded-sm h-[100%] bg-[#f5faff]">
              {
                <div>
                  <div>Account</div>
                </div>
              }
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default OtherAsideComp;
