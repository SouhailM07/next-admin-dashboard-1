import "./mysidebar.css";
// ! arrays
import { arrOfSidebarLinks } from "@/arrays";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MySidebar() {
  return (
    <aside id="MySidebar">
      <h1 className="font-bold mb-[2rem]">Shoppy</h1>
      <article className="space-y-[1rem] text-[0.9rem]">
        {arrOfSidebarLinks.map((e, i) => {
          return (
            <section key={i}>
              <h1 className="text-sidebarTitles uppercase">{e.title}</h1>
              <ul role="list" className="text-sidebarLinks">
                {e.links.map((e1, i1) => {
                  return (
                    <li
                      role="listitem"
                      key={i1}
                      className="flex items-center space-x-[1rem] cursor-pointer"
                    >
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
