import "./mysidebar.css";
// ! arrays
import { arrOfSidebarLinks } from "@/arrays";
// assets
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MySidebar() {
  return (
    <aside className="border-2 border-red-500 max-h-screen w-[18rem] overflow-y-auto">
      <h1>Shoppy</h1>
      <article>
        {arrOfSidebarLinks.map((e, i) => {
          return (
            <section key={i}>
              <h1>{e.title}</h1>
              <ul>
                {e.links.map((e1, i1) => {
                  return (
                    <li key={i1} className="flex items-center space-x-[1rem]">
                      <FontAwesomeIcon
                        icon={e1.img}
                        className="h-[1rem] w-[1rem]"
                      />
                      <span>{e1.txt}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </article>
    </aside>
  );
}
