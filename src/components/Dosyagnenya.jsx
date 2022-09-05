import Carousel from "./Carousel";

function Dosyagnenya() {
  return (
    <div>
      <div className=" rounded-xl  h-screen mx-auto p-10 w-3/4 m-20 shadow-[0_0_20px_10px_rgba(0,0,0,0.6) shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)]">
       <div className="h-80 py-20">
         <div className="p-6">
          <h1 className="text-center text-xl">Курсы и сертификаты</h1>
        </div>

        <div className="max-w-3xl max-h-xl flex gap-5 mx-auto mb-10  ">
          <Carousel />
        </div>
         </div>
      </div>
    </div>
  );
}

export default Dosyagnenya;
