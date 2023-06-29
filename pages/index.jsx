import Image from "next/image";
import Button from "@mui/material/Button";
import Navbar from "../components/navbar";
import SearchResult from "@/components/items/SearchBar/SearchResult";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <Navbar />

      <br />
      <br />

      <div className="-z-50">
        <div className="flex h-[70vh] w-full items-center justify-center">
          <div className="min-w-[100px] p-10 xl:p-0">
            <div
              dir="rtl"
              style={{
                backgroundImage: "url(https://i.redd.it/s2c0viilldj41.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="flex h-[650px] w-full max-w-[900px] items-end overflow-hidden rounded-2xl"
            >
              <div className="flex h-[100%] w-full items-end bg-gradient-to-t from-black/90 from-10% to-transparent font-semibold text-white/90">
                <div className="relative top-10 m-10 flex h-[40%] w-[100%] flex-col items-start justify-center">
                  <h1 className="text-3xl">اکانت فول اکسس ماینکرافت</h1>
                  <div className="mt-2">
                    <p className=" line-clamp-4 text-sm font-medium text-white/70">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                      وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </p>

                    <button className="bg-animated w-22 mt-2 flex h-5 items-center justify-center rounded-full p-5">
                      آگهی ها
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" hidden h-[670px] w-[25%] pb-3 pl-5 pr-5 pt-2 xl:block">
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-black/25 text-xl font-bold text-white/90">
              <h1>پرفروش ترین دسته بندی ها</h1>
              <br />
              <div className="relative top-2 -z-40 grid w-full grid-cols-2 grid-rows-2 flex-col gap-5">
                {/* 1 CATEGORY*/}
                <div className="flex h-full w-full items-center justify-end">
                  <div className="flex w-[150px] flex-col items-center justify-center gap-y-3 rounded-xl bg-white/5 p-5 ">
                    <div className="h-[100px] w-[100px]">
                      <img
                        src={
                          "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/GrassBlock_HighRes.png"
                        }
                        width={100}
                        className="h-[100px] rounded-xl"
                      />
                    </div>
                    <div className=" flex h-[100%] w-[90%] flex-col items-center justify-center gap-y-2 text-white/90">
                      <p className="text-sm">Minecraft</p>
                      <div className="flex items-end justify-end">
                        <button className="bg-animated w-[100px] rounded-2xl p-2 text-sm font-bold">
                          مشاهده
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 1 CATEGORY*/} {/* 1 CATEGORY*/}
                <div className="flex h-full w-full items-center justify-start">
                  <div className="flex w-[150px] flex-col items-center justify-center gap-y-3 rounded-xl bg-white/5 p-5 ">
                    <div className="h-[100px] w-[100px]">
                      <img
                        src={
                          "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/GrassBlock_HighRes.png"
                        }
                        width={100}
                        className="h-[100px] rounded-xl"
                      />
                    </div>
                    <div className=" flex h-[100%] w-[90%] flex-col items-center justify-center gap-y-2 text-white/90">
                      <p className="text-sm">Minecraft</p>
                      <div className="flex items-end justify-end">
                        <button className="bg-animated w-[100px] rounded-2xl p-2 text-sm font-bold">
                          مشاهده
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 1 CATEGORY*/} {/* 1 CATEGORY*/}
                <div className="flex h-full w-full items-center justify-end">
                  <div className="flex w-[150px] flex-col items-center justify-center gap-y-3 rounded-xl bg-white/5 p-5 ">
                    <div className="h-[100px] w-[100px]">
                      <img
                        src={
                          "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/GrassBlock_HighRes.png"
                        }
                        width={100}
                        className="h-[100px] rounded-xl"
                      />
                    </div>
                    <div className=" flex h-[100%] w-[90%] flex-col items-center justify-center gap-y-2 text-white/90">
                      <p className="text-sm">Minecraft</p>
                      <div className="flex items-end justify-end">
                        <button className="bg-animated w-[100px] rounded-2xl p-2 text-sm font-bold">
                          مشاهده
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 1 CATEGORY*/} {/* 1 CATEGORY*/}
                <div className="flex h-full w-full items-center justify-start">
                  <div className="flex w-[150px] flex-col items-center justify-center gap-y-3 rounded-xl bg-white/5 p-5 ">
                    <div className="h-[100px] w-[100px]">
                      <img
                        src={
                          "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/GrassBlock_HighRes.png"
                        }
                        width={100}
                        className="h-[100px] rounded-xl"
                      />
                    </div>
                    <div className=" flex h-[100%] w-[90%] flex-col items-center justify-center gap-y-2 text-white/90">
                      <p className="text-sm">Minecraft</p>
                      <div className="flex items-end justify-end">
                        <button className="bg-animated w-[100px] rounded-2xl p-2 text-sm font-bold">
                          مشاهده
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 1 CATEGORY*/}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
