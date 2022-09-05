function Heart() {
  return (
    <div className="mx-auto w-3/12    z-0">
      <div className="animate-heartBeat absolute rotate-45 ">
        <div className="w-32 h-32 bg-[#ed0022] absolute shadow-2xl"></div>
        <div className="w-32 h-32 rounded-full bg-[#ed0022] -translate-y-1/2 absolute"></div>
        <div className="w-32 h-32 rounded-full  bg-[#ed0022] -translate-x-1/2 absolute"></div>
      </div>
      <div>
          <div className=" w-40 bg-[#ed0022]  overflow-hidden relative flex  justify-center rounded-full absolute right-20 top-6 ">
              <img className="  h-20 w-32 " src="img/heatbeat.png" />
              <div className="flex  -ml-96 absolute gap-32 justify-between animate-[x_5s_2.5s_linear_infinite]   ">
                  <div className="flex">
                      <div className=" bg-[#ed0022]   w-44 h-32   "></div>
                      <div className=" bg-gradient-to-r  from-bg-[#ed0022] to-transparent w-8 h-32  "></div>
                  </div>
                  <div className=" bg-[#ed0022]  w-64 h-32  top-0 "></div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Heart;
