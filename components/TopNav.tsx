import Link from "next/link";

interface ButtonProps {
  active: string;
}

export default function TopNav({ active }: ButtonProps) {
  const renderValue = (): JSX.Element => {
    switch (active) {
      case "thamkhao":
        return <span>Tham khảo</span>;
      case "quotes":
        return <span>Buddhist Quotes</span>;
      case "meditation":
        return <span>Meditation</span>;
      case "nhatky":
        return <span>Nhật ký</span>;
      default:
        return <span>Settings</span>;
    }
  };
  return (
    <div className=" fixed min-w-[360px] max-w-[414px] w-full flex justify-center items-center bg-[url('/img/marita-kavelashvili-ugnrXk1129g-unsplash.jpg')] bg-[length:414px] h-16 z-50 border-b border-[#cccccc] ">
      <h1 className="font-semibold text-lg uppercase text-green-700">
        {renderValue()}
      </h1>
    </div>
  );
}
