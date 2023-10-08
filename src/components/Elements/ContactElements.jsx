/* eslint-disable react/prop-types */
export const ContactElements = ({ link, src, text }) => {
  return (
    <>
      <div className="bg-white p-5 text-center inline-grid rounded-lg shadow-xl">
        <a
          href={link}
          rel="noopener noreferrer"
          className="grid place-items-center mb-5 p-5 md:p-10 mx-auto bg-blue-300 rounded-full"
        >
          <img src={`${src}.svg`} alt={src} width={"30px"} />
        </a>
        <h4 className="md:text-2xl">{text}</h4>
      </div>
    </>
  );
};