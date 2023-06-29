import Image from "next/image";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

export default function RoundedButton({ children }) {
  return (
    <div className="bg-animated flex h-10 w-10 items-center justify-center rounded-full p-[24px]">
      <div className="rounded-full bg-bg_color-end p-[8px]">{children}</div>
    </div>
  );
}
