import BlueBtns from "../reusables/blueBtns";

const images = [
  {
    imgName: "../../public/images/first-item-hero.jpg",
    altName: "heropic1",
  },
  {
    imgName: "../../public/images/phone-hero.jpg",
    altName: "heropic2",
  },
  {
    imgName: "../../public/images/third-item-hero.jpg",
    altName: "heropic3",
  },
];

const HeroHeader = () => {
  return (
    <main className="bg-sky-blue/40 ">
      {/* Header section  */}
      <header className="flex justify-between items-center w-full py-5 px-20 ">
        <h3 className="text-heading-color font-bold text-2xl">Piccap</h3>

        <nav className="text-nav-color flex justify-between items-center w-[10%] font-medium cursor-pointer">
          <span>Templates</span>
          <span>Pricing</span>
        </nav>
        <BlueBtns text="Sign In" />
      </header>

      {/* Main hero section */}

      <section className="flex justify-center flex-col items-center py-20 h-full image-blend-fade-to-point">
        <article className="flex justify-center items-center flex-col h-[20rem]">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-8xl font-medium tracking-tight text-wrap w-[80%] pb-5 leading-22">
              Get stunning graphics,
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue to-sky-blue italic">
                faster
              </span>
            </h1>

            <p className="text-nav-color text-xl w-[75%]">
              Effortless tweak templates and captions. Create stunning visuals
              in seconds. No design degree required{" "}
              <span className="italic">(we promise).</span>
            </p>
          </div>
          <BlueBtns text="Start designing" className="my-10" />
        </article>

        {/* <div className="image-blend-fade-to-point"> */}
        <div className="p-8 flex justify-between items-start w-[80%] ">
          {images.map((image) => (
            <img
              className="w-[200%] odd:rounded-4xl odd:bg-hero-linear-1 even:rounded-t-[4rem] even:mx-10 first:rotate-[15deg] last:-rotate-[10deg] "
              src={image.imgName}
              alt={image.altName}
            />
          ))}
        </div>
        <div className="image-blend-fade-overlay text-black"></div>
        {/* </div> */}
      </section>
    </main>
  );
};
export default HeroHeader;
