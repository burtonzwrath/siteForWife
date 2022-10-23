function Heart({ animationState }) {
  return animationState ? (
    <div
      className={` ${
        animationState ? " animate-sun1 " : "opacity-95"
      } heart_wrapper`}
    >
      <div className=" heart_contentWrapper   ">
        <div className="h-20 w-20">
          <img className="  h-20 w-20  bg-cover" src="img/heartBlue2.jpg" />
        </div>
        <div className="heart_contentDiv ">
          <div className="flex">
            <div className=" bg-black  w-32 h-20   "></div>
            <div className=" bg-black w-8 h-32  "></div>
          </div>
          <div className=" bg-black  w-64 h-32  top-0 "></div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Heart;
