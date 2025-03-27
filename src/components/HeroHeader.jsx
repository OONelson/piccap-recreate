import BlueBtns from "../reusables/blueBtns";

const images = [
  {
    imgName: "../images/hero-pic1.jpg",
    altName: "heropic1",
  },
  {
    imgName: "../images/hero-pic2.jpg",
    altName: "heropic2",
  },
  {
    imgName: "../images/hero-pic3.jpg",
    altName: "heropic3",
  },
  {
    imgName: "../images/hero-pic4.jpg",
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

        <div className="bg-gray600">
          {images.map((image) => (
            <img src={image.imgName} alt={image.altName} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default HeroHeader;
