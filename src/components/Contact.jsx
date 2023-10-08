import { ContactElements } from "./Elements/ContactElements";

export default function Contact() {
  const contactData = [
    { link: "mailto:rodelgerodias25@gmail.com", src: "mail", text: "Email" },
    {
      link: "https://www.linkedin.com/in/rodel-gerodias-b0a49326b/",
      src: "linkedin",
      text: "LinkedIn",
    },
    {
      link: "https://www.facebook.com/rodel.gerodias.7",
      src: "facebook",
      text: "Facebook",
    },
    {
      link: "https://www.instagram.com/romage25/",
      src: "instragram",
      text: "Instragram",
    },
  ];

  const contactMap = contactData.map((contact, i) => {
    return (
      <ContactElements
        key={i}
        link={contact.link}
        src={contact.src}
        text={contact.text}
      />
    );
  });
  return (
    <>
      <div className="bg-blue-100 py-14 min-h-[80vh] flex flex-row justify-center items-center">
        <div className="w-[80%] m-auto">
          <h2 className="text-5xl font-bold text-center mb-5">Contact</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil
            dolores labore beatae deleniti neque id suscipit optio consequatur
            placeat.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-content-between md:gap-5">
            {contactMap}
          </div>
        </div>
      </div>
    </>
  );
}
