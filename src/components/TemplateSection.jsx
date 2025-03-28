import BlueBtns from "../reusables/blueBtns";

const TemplateSection = () => {
  return (
    <main>
      <article>
        <h3>Find your perfect canvas</h3>
        <p>
          Spend smarter, lower your bills, get cashback on everything you buy,
          and unlock credit to grow your business.
        </p>
        <BlueBtns text="Explore Templates" />
      </article>

      <section className="flex justify-between items-center py-10  ">
        <div className="halfcard rounded-r-2xl bg-[#F6F9F8]"></div>
        <div className="card bg-[#FDFAF5]">
          <div>
            <div>
              <span className="h-2 w-2 rounded-full bg-gray600"></span>
              <span>Template</span>
            </div>
            <h3>Instagram Post</h3>
          </div>
        </div>
        <div className="card bg-[#F6F9F8]">
          <div>
            <div>
              <span className="h-2 w-2 rounded-full bg-gray600"></span>
              <span>Template</span>
            </div>
            <h3>Facebook cover</h3>
          </div>
        </div>
        <div className="halfcard rounded-l-2xl bg-[#F4CBB8]"></div>
      </section>
    </main>
  );
};
export default TemplateSection;
