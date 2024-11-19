import { Icons } from "../../assets";

type Props = {
  bgColor: string;
  icon: string;
  title: string;
  measurement: number;
  status: string;
};

const Card = ({ icon, title, measurement, status, bgColor }: Props) => {
  return (
    <div
      className={`w-[228px] h-[242px] rounded-xl pl-4`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-[96px] py-4">
        <img src={icon} alt="Lungs" />
      </div>
      <div>
        <div>{title}</div>
        <div>{measurement}</div>
        <div className="py-[17px] flex gap-x-1">
          {status === "Higher than Average" ? (
            <img src={Icons.uparrow} alt="Up Arrow" />
          ) : status === "Lower than Average" ? (
            <img src={Icons.downarrow} alt="Down Arrow" />
          ) : null}
          {status}
        </div>
      </div>
    </div>
  );
};

export default Card;
