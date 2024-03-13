import "./settingsbtn.css";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function SettingsBtn() {
  return (
    <>
      <FontAwesomeIcon
        icon={faGear}
        className="bg-primaryCyan text-white p-2 text-[1.7rem] rounded-full fixed bottom-[1rem] right-[1.5rem] hover:rotate-[120deg] transition-all duration-200 "
        role="button"
        aria-label="settings btn"
      />
    </>
  );
}
