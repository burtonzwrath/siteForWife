function AboutMe() {
  return (
    <div>
      <div className=" rounded-xl mx-auto p-10 w-3/4 mt-10 shadow-shadow-[0_0_20px_10px_rgba(0,0,0,0.6) shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)]">
        <div>
          <h1 className="text-center">Давайте знакомиться )</h1>
        </div>
        <div className="flex w-full gap-10 mt-10">
          <div className="grow ">
            <div className="max-w-xl">
              <p className="first-letter:ml-3">Я Светлана Александровна</p>
              <br/>
              <p className="first-letter:ml-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos minima, quos! Aliquam aut blanditiis culpa dolores
                eligendi expedita, illum molestiae numquam provident quod. Culpa
                dolorem doloribus eos, provident quas vitae?
              </p>
            </div>
          </div>

          <div className="max-w-xs ">
            <div className="" >
              <img  className="rounded-xl object-fill  " src="img/about2.jpg" alt="" />
            </div>
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
