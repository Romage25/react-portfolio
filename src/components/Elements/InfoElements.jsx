import { myInfo } from "../../data";

export default function InfoElements() {
  return myInfo.map((info, i) => (
    <h6 key={i}>
      <span className="text-lg font-bold w-40 block md:inline-block">
        {info.label}
      </span>
      {info.text}
    </h6>
  ));
}
