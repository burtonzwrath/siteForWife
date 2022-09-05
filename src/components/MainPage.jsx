import Sun from "./Sun";

function MainPage() {
  return (
    <div className="container mx-auto  ">
      <div className="h-screen  items-center justify-center  mx-auto flex">
        <img className="absolute my-10  h-screen animate-blur " src="img/hearthand2.jpg" alt="" />
        <Sun />
      </div>
    </div>
  );
}
export default MainPage;
