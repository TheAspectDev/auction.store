import Image from "next/image";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchResult({ title, price, imageURL }) {
  return (
    <div className="flex h-[33.333%] w-full gap-x-5">
      <div className="h-[90px] w-[175px]">
        <img src={imageURL} width={175} className="h-[90px] rounded-xl" />
      </div>
      <div className="flex h-[100%] w-[80%] flex-col justify-between text-white/90">
        <p>{title}</p>
        <div className="mb-5 ml-5 mr-5 flex items-end justify-end">
          <button className=" flex min-w-[100px] items-center justify-center rounded-l-full bg-bg_color-start/50 p-2 text-sm font-bold">
            <p className="relative top-0.5 flex items-center">${price}</p>
          </button>
          <button className="bg-animated w-[60px] rounded-r-full p-2 text-sm font-bold">
            خرید
          </button>
        </div>
      </div>
    </div>
  );
}
