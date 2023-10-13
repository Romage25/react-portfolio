/* eslint-disable react/prop-types */
export default function ContactElements({ link, src, text }) {
  return (
    <div className="bg-white p-5 text-center inline-grid rounded-lg shadow-xl">
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className="grid place-items-center mb-5 p-5 md:p-10 mx-auto bg-blue-300 rounded-full md:hover:shadow-lg md:hover:shadow-blue-300"
      >
        <img
          src={`${src}.svg`}
          alt={src}
          className="w-[30px] transition-transform transform-gpu hover:scale-150"
        />
      </a>
      <h4 className="md:text-2xl">{text}</h4>
    </div>
  );
}
