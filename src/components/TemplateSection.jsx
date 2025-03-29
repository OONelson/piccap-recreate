import BlueBtns from "../reusables/blueBtns";

const TemplateSection = () => {
  return (
    <main className="py-20">
      <article className="px-20 py-10 w-[50%]">
        <h3 className="text-5xl font-semibold mb-2">
          Find your perfect canvas
        </h3>
        <p className="text-nav-color text-xl leading-6">
          Spend smarter, lower your bills, get cashback on everything you buy,
          and unlock credit to grow your business.
        </p>
        <BlueBtns text="Explore Templates" className="my-5" />
      </article>

      <section className="flex justify-between items-center py-10 flex-nowrap">
        <div className="card rounded-r-2xl bg-[#F6F9F8] -ml-[20%]"></div>

        <div className="card bg-[#FDFAF5] overflow-hidden">
          <div>
            <div className="flex justify-between items-center w-[20%]">
              <div className="h-2 w-2 rounded-full bg-gray600"></div>
              <span className="text-nav-color ">Template</span>
            </div>
            <h3 className="text-3xl font-medium">Instagram Post</h3>
            <div className="flex justify-between items-end w-full ">
              <button className="bg-template-btn-1 py-2 px-4 rounded-2xl font-medium">
                Use template
              </button>
              <img
                className="w-[60%] rounded-2xl rotate-[20deg] translate-y-10 translate-x-20"
                src="../../public/images/hero-pic1.jpg"
                alt="featuresImg"
              />
            </div>
          </div>
        </div>

        <div className="card bg-[#F6F9F8] overflow-hidden">
          <div>
            <div className="flex justify-between items-center w-[20%]">
              <div className="h-2 w-2 rounded-full bg-gray600"></div>
              <span className="text-nav-color ">Template</span>
            </div>
            <h3 className="text-3xl font-medium">Facebook cover</h3>
            <div className="flex justify-between items-end w-full translate-y-17">
              <button className="bg-template-btn-2 py-2 px-4 rounded-2xl font-medium text-base ">
                Use template
              </button>
              <img
                className="w-[60%] -rotate-[20deg] translate-x-20 translate-y-12"
                src="../../public/images/features-real-2.png"
                alt="featuresImg"
              />
            </div>
          </div>
        </div>

        <div className="card rounded-l-2xl bg-[#F4CBB8] -mr-[19%]">
          <div>
            <div className="flex justify-between items-center w-[20%]">
              <div className="h-2 w-2 rounded-full bg-gray600"></div>
              <span className="text-nav-color ">Template</span>
            </div>
            <h3 className="text-3xl font-medium">Facebook St</h3>
            <div className="flex justify-between items-end  translate-y-30">
              <button className="bg-template-btn-3 py-2 px-4 rounded-2xl font-medium text-base self-end">
                Use template
              </button>
              <img
                className="w-[70%] rounded-2xl -rotate-[10deg]"
                src="../../public/images/features-real-3.png"
                alt="featuresImg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default TemplateSection;
