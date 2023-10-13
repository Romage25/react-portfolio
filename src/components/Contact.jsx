/* eslint-disable react/no-unescaped-entities */
import { contactData } from "../data";
import ContactElements from "./Elements/ContactElements";

export default function Contact() {
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
          <p className="mb-5 text-xl text-center font-semibold">
          If you'd like to get in touch with me or connect, you can reach out through the following channels:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-content-between md:gap-5">
            {contactMap}
          </div>
        </div>
      </div>
    </>
  );
}
