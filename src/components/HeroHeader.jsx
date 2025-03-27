import BlueBtns from "../reusables/blueBtns";

const images = [
  {
    imgName: "../../public/images/hero-pic1.jpg",
    altName: "heropic1",
  },
  {
    imgName: "../../public/images/hero-pic2.jpg",
    altName: "heropic2",
  },
  {
    imgName: "../../public/images/hero-pic3.jpg",
    altName: "heropic3",
  },
  {
    imgName: "../../public/images/hero-pic4.jpg",
    altName: "heropic4",
  },
];

const HeroHeader = () => {
  return (
    <main className="bg-linear-to-r from-hero-linear-1 to-linear-2">
      {/* Header section  */}
      <header>
        <h3 className="text-heading-color">Piccap</h3>

        <nav className="text-nav-color">
          <span>Templates</span>
          <span>Pricing</span>
        </nav>
        <BlueBtns>Sign In</BlueBtns>
      </header>

      {/* Main hero section */}

      <section>
        <article>
          <div>
            <h1>
              Get stunning graphics,
              <span>faster</span>
            </h1>

            <p>
              Effortless tweak templates and captions. Create stunning visuals
              in seconds. No design degree required <span>(we promise).</span>
            </p>
          </div>
          <BlueBtns>Start designing</BlueBtns>
        </article>

        <div className="bg-gray600 grid grid-cols-2 grid-rows-2 gap-0 m-0 p-0">
          {images.map((image) => (
            <img
              className="h-full w-max"
              src={image.imgName}
              alt={image.altName}
            />
          ))}

          {/* <img src="../../public/images/hero-pic1.jpg" alt="" /> */}
        </div>
      </section>
    </main>
  );
};
export default HeroHeader;
