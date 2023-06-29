import Image from "next/image";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState, useRef } from "react";
import SearchResults from "./SearchResults";
import ReactDOM from "react-dom";

export default function searchBar(className) {
  const [searchBox, setBox] = useState("400px");
  const ref = useRef(null);

  useEffect(() => {
    let li = [
      {
        title:
          "اکانت ماینکرافت | Minecraft Account | دارای رنک هایئیکسل | Rank VIP+ | دارای 100 میلیون کوین در هایئیکسل",
        imgURL: "https://i.redd.it/s2c0viilldj41.png",
        price: "100,000,000,000,000T",
      },
      {
        title: "اکانت دانجن ماینیکرافت | Minecraft Dungeon Account",
        imgURL:
          "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/f95a1f5bce9f6e43c8c7e212b1dc7727.png",
        price: "100T",
      },
      {
        title: "خرید حساب COD",
        imgURL:
          "https://www.callofduty.com/content/dam/atvi/infinityward/iw-touchui/news/feature/2022/11/WZ2-S01-DMZ-TACTICS-TOUT.jpg",
        price: "100,000T",
      },
    ];

    let suggestions = document.getElementById("suggestions");
    suggestions.textContent = "";

    ReactDOM.render(<SearchResults results={li} />, suggestions);

    document.getElementById("anput").addEventListener("input", () => {
      var input, filter, a, i, txtValue;
      input = document.getElementById("anput");
      filter = input.value.toUpperCase();

      let data = [];

      for (i = 0; i < li.length; i++) {
        txtValue = li[i].title;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          data.push(li[i]);
        }
      }
      let suggestions = document.getElementById("suggestions");

      ReactDOM.render(<SearchResults results={data} />, suggestions);

      console.log(data);
    });

    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setBox("0px");
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <div className={className} ref={ref}>
      <div
        onClick={() => {
          setBox("400px");
        }}
        id="container"
        className="flex w-[650px] flex-row-reverse items-center justify-center bg-bg_color-end  p-2.5 text-white/25 "
      >
        <SearchIcon fontSize="large" className=" w-[50px]" />
        <input
          id="anput"
          placeholder="جستجو"
          className=" h-full w-full bg-transparent text-right text-lg placeholder:relative placeholder:bottom-0.5 placeholder:text-white/25 focus:outline-none"
        ></input>
      </div>
      <div
        id="suggestions"
        style={{ height: searchBox }}
        className="absolute flex w-full items-center justify-center overflow-hidden bg-bg_color-end transition-all duration-300"
      ></div>
    </div>
  );
}
