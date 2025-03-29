const Features = () => {
  const list = [
    {
      id: 1,
      heading: "Pick a Template",
      text: "Find your perfect canvas",
    },
    {
      id: 2,
      heading: "Tweak the Text",
      text: "Make it your own with witty captions",
    },
    {
      id: 3,
      heading: "Personalize & Polish",
      text: "Change colors, fonts, and more",
    },
    {
      id: 4,
      heading: "Download & Share",
      text: "Boom! You're a design superstar",
    },
  ];
  return (
    <main>
      <article>
        <h3>Features to enhance your workflow</h3>
        <p className="text-nav-color text-xl leading-6">
          Spend smarter, lower your bills, get cashback on everything you buy,
          and unlock credit to grow your business.
        </p>
      </article>

      <article>
        <div>
          <h4>Fast and Easy</h4>
          <p className="text-nav-color text-xl leading-6">
            Spend smarter, lower your bills, get cashback on everything you buy,
            and unlock credit to grow your business.
          </p>
        </div>

        <div>
          <picture>
            <img src="../../public/images/features1.jpg" alt="features" />
            <img src="../../public/images/features2.jpg" alt="features" />
          </picture>
          <picture>
            <img src="../../public/images/features3.jpg" alt="features" />
            <img src="../../public/images/features4.jpg" alt="features" />
          </picture>
        </div>
      </article>

      <article>
        <div>
          <img src="../../public/images/img-resize.jpg" alt="img-resize" />
        </div>
        <div>
          <h4>Canvas Resize</h4>
          <p className="text-nav-color text-xl leading-6">
            Spend smarter, lower your bills, get cashback on everything you buy,
            and unlock credit to grow your business.
          </p>
        </div>
      </article>

      <article>
        <div>
          <h4>Over 9 million icons</h4>
          <p className="text-nav-color text-xl leading-6">
            Spend smarter, lower your bills, get cashback on everything you buy,
            and unlock credit to grow your business.
          </p>
        </div>

        <picture>
          <img src="../../public/images/img-icons.jpg" alt="icon-img" />
        </picture>
      </article>

      <article>
        <div>
          <h4>Background remover</h4>
          <p className="text-nav-color text-xl leading-6">
            Spend smarter, lower your bills, get cashback on everything you buy,
            and unlock credit to grow your business.
          </p>
        </div>
        <picture>
          <img
            src="../../public/images/original-fake.jpg"
            alt="original-fake"
          />
        </picture>
      </article>

      <article>
        <h4>How it works</h4>
        <p className="text-nav-color text-xl leading-6">
          Spend smarter, lower your bills, get cashback on everything you buy
        </p>

        <ul>
          {list.map((item) => (
            <li>
              <div>
                <span>{item.id}</span>
                <h5>{item.heading}</h5>
              </div>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default Features;
