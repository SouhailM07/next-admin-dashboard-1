"use client";
import "./ecommerce.css";
// ? types
import { myBox } from "@/types";
// ! arrays
import { arrOfBoxes } from "@/arrays";
// zustand
import themeStore from "@/zustand/themeStore";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*=============================================================================================*/
// main component section
/*=============================================================================================*/

export default function Ecommerce() {
  return (
    <>
      <main className="px-[2rem] pt-[4rem] w-full">
        <article className="flex space-x-[1rem] w-full">
          <Earnings />
          <section className="flex justify-around max-w-[65rem]  flex-wrap gap-[1rem]">
            {arrOfBoxes.map((e, i) => {
              return (
                <MyBox
                  key={i}
                  Color={e.Color}
                  label={e.label}
                  img={e.img}
                  n={e.n}
                  Bg={e.Bg}
                  percent={e.percent}
                />
              );
            })}
          </section>
        </article>
      </main>
    </>
  );
}

const Earnings = () => {
  const { themeIndex } = themeStore((state) => state);
  return (
    <section className="min-w-[16rem] rounded-xl drop-shadow-xl bg-white grid grid-cols-2 grid-rows-[1.5rem_1.5rem_1fr] px-[1.5rem] py-[1rem] h-[10rem]">
      <h1 className="text-sidebarTitles text-[0.8rem] mt-[0.4rem] font-bold">
        Earnings
      </h1>
      <div
        className={`h-[2.5rem] w-[2.5rem] cursor-pointer hover:drop-shadow-xl rounded-full themeIndex-${themeIndex} text-white grid place-items-center font-medium place-self-end col-[2/2] row-[1/3]`}
      >
        $
      </div>
      <p className="text-[1.2rem]">$63,448.78</p>
      <button
        className={`themeIndex-${themeIndex} cursor-pointer hover:drop-shadow-xl text-white w-[6rem] rounded-md h-[3rem] row-[3/3] mt-[2rem]`}
      >
        Download
      </button>
    </section>
  );
};

//
const MyBox = ({ Bg, img, n, label, percent, Color }: myBox) => {
  return (
    <div className="bg-white drop-shadow-xl w-[14rem] p-[1rem] pt-[2rem] rounded-md h-[10rem]">
      <div
        className={`h-[3rem] w-[3rem] grid place-items-center rounded-full ${Bg} ${Color} cursor-pointer hover:drop-shadow-xl`}
      >
        <FontAwesomeIcon icon={img} className=" h-[1.5rem] w-[1.5rem]" />
      </div>
      <p className="font-bold flex items-center my-[0.6rem]">
        {n}
        <span
          className={`font-medium ml-[0.5rem] text-[0.9rem] ${
            percent.includes("-") ? "text-red-500" : "text-green-500"
          }`}
        >
          {" "}
          {percent}
        </span>
      </p>
      <p className="text-sidebarTitles text-[0.9rem]">{label}</p>
    </div>
  );
};
