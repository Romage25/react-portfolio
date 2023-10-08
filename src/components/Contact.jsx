import { ContactElements } from "./Elements/ContactElements";

export default function Contact() {
  return (
    <>
      <div className="bg-blue-100 py-14">
        <div className="w-[80%] mx-auto">
          <h2 className="text-5xl font-bold text-center mb-5">Contact</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil
            dolores labore beatae deleniti neque id suscipit optio consequatur
            placeat.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-content-between md:gap-5">
            <ContactElements
              link={"mailto:rodelgerodias25@gmail.com"}
              src={"mail"}
              text={"Email"}
            />
            <ContactElements
              link={"https://www.linkedin.com/in/rodel-gerodias-b0a49326b/"}
              src={"linkedin"}
              text={"LinkedIn"}
            />         
            <ContactElements
              link={"https://www.facebook.com/rodel.gerodias.7"}
              src={"facebook"}
              text={"Facebook"}
            />
          
            <ContactElements
              link={"https://www.instagram.com/romage25/"}
              src={"instragram"}
              text={"Instragram"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
