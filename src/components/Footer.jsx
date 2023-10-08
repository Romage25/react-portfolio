export default function Footer() {
  return (
    <section>
      <div className="py-14 bg-black/90 text-white">
        <div className="w-[80%] mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h5 className="mb-5 text-2xl">About</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit ipsa saepe eligendi voluptatem ullam debitis
              perspiciatis eveniet beatae, id suscipit.
            </p>
          </div>
          <div>
            <h5 className="mb-5 text-2xl">Links</h5>
            <ul className="flex flex-col gap-3">
              <li className="flex flex-row gap-5">
                <img
                  src="white-arrow-right.svg"
                  alt="arrow right"
                  className="inline w-4"
                />
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li className="flex flex-row gap-5">
                <img
                  src="white-arrow-right.svg"
                  alt="arrow right"
                  className="inline w-4"
                />
                <a href="#about" className="hover:underline">About</a>
              </li>
              <li className="flex flex-row gap-5">
                <img
                  src="white-arrow-right.svg"
                  alt="arrow right"
                  className="inline w-4"
                />
                <a href="#resume" className="hover:underline">Resume</a>
              </li>
              <li className="flex flex-row gap-5">
                <img
                  src="white-arrow-right.svg"
                  alt="arrow right"
                  className="inline w-4"
                />
                <a href="#hobbies" className="hover:underline">Hobbies</a>
              </li>
              <li className="flex flex-row gap-5">
                <img
                  src="white-arrow-right.svg"
                  alt="arrow right"
                  className="inline w-4"
                />
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-5 text-2xl">Services</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="w-5 inline-block">&bull;</span> Web Design
              </li>
              <li>
                <span className="w-5 inline-block">&bull;</span> Web Development
              </li>
              <li>
                <span className="w-5 inline-block">&bull;</span> Data Analysis
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-5 text-2xl">Have a Questions</h5>
            <div className="flex flex-col gap-3">
              <h6 className="flex flex-row gap-5">
                <img
                  src="white-location.svg"
                  alt="white location"
                  className="w-5 inline"
                />
                # 738 San Roque, San Pedro, Laguna
              </h6>
              <h6 className="flex flex-row gap-5">
                <img
                  src="white-phone.svg"
                  alt="white phone"
                  className="w-5 inline"
                />
                0960-515-4797
              </h6>
              <h6 className="flex flex-row gap-5">
                <img
                  src="white-mail.svg"
                  alt="white mail"
                  className="w-5 inline"
                />
                rodelgerodias25@gmail.com{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
