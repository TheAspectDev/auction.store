import Image from "next/image";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Vazirmatn } from "next/font/google";
import { FaShoppingBasket } from "react-icons/fa";
import { useTheme } from "next-themes";
import RoundedButton from "./items/RoundedButton";
import SearchBar from "./items/SearchBar/SearchBox";
import { useEffect } from "react";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export default function Navbar() {
  return (
    <nav
      className={`${vazirmatn.className} bg-white-100 flex w-full justify-between bg-black/[30%] shadow-md`}
    >
      <div className="flex w-[10%] items-center justify-end">
        <div>
          <div className="flex h-full items-center justify-center gap-x-2 text-3xl">
            <button className="text-animated text-lg font-bold">
              ورود | ثبت نام
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[70px] w-[90%] items-center justify-end ">
        <div className="scale-90 font-medium">
          <SearchBar />
        </div>

        <p className="text-animated mr-5 bg-clip-text fill-transparent text-3xl font-extrabold">
          حراجی گیم
        </p>
        <button className="mr-5">
          <RoundedButton>
            <FaShoppingBasket className="text-2xl text-main-500" />
          </RoundedButton>
        </button>
      </div>
      <div className="bg-animated flex h-[3px] w-[full] "></div>
    </nav>
  );
}
