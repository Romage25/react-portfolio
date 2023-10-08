export const InfoElements = () => {
  const myInfo = [
    ["Name: ", "Rodel M. Gerodias"],
    ["Date of Birth: ", "September 2, 2001"],
    ["Address: ", "#738 Brgy. San Roque, San Pedro, Laguna"],
    ["Zip code: ", "4023"],
    ["Email: ", "rodelgerodias25@gmail.com"],
    ["Contact Number: ", "0960-515-4707"],
  ];
  
  return myInfo.map((info, i) => (
    <h6 key={i}>
      <span className="text-lg font-bold w-40 block md:inline-block">
        {info[0]}
      </span>
      {info[1]}
    </h6>
  ));
};