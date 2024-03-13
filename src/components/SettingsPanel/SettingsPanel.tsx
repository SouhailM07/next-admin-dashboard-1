"use client";
import "./settingspanel.css";
// components
import { SettingsBtn } from "@/components";
// zustand
import themeStore from "@/zustand/themeStore";
// shadcn-ui
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function SettingsPanel() {
  const themeOptions = [
    { label: "Light", func: "" },
    { label: "Dark", func: "" },
  ];
  const { themeIndex, editThemeIndex } = themeStore((state) => state);
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <SettingsBtn />
        </SheetTrigger>
        {/* @ts-ignore */}
        <SheetContent className="w-[20rem]  ">
          <SheetHeader>
            <SheetTitle>Settings?</SheetTitle>
            <SheetDescription>
              <hr className="SettingsPanel__hr" />
              <h1 className=" font-bold mb-[1rem]">Theme option</h1>
              <ul role="list" className="space-y-[0.5rem]">
                {themeOptions.map((e, i) => {
                  return (
                    <li role="listitem" key={i} className="space-x-[1rem]">
                      <input type="radio" name="mode" id={e.label + i} />
                      <label htmlFor={e.label + i}>{e.label}</label>
                    </li>
                  );
                })}
              </ul>
              <hr className="SettingsPanel__hr" />
              <h1>Theme colors</h1>
              <ul className="flex space-x-[0.7rem] mt-[1rem]">
                {Array(6)
                  .fill("")
                  .map((_e, i) => {
                    return (
                      <li
                        role="button"
                        key={i}
                        onClick={() => editThemeIndex(i)}
                        className={`cursor-pointer text-white h-[2rem] rounded-full grid place-items-center w-[2rem] themeIndex-${i}`}
                      >
                        {themeIndex == i && <FontAwesomeIcon icon={faCheck} />}
                      </li>
                    );
                  })}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
