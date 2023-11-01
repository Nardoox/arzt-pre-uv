import { Input } from "@nextui-org/input";
import { SearchIcon } from "./searchicon";
import { TiMinus } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="arztFooter">
      <ul>
        <h3>Informationen</h3>
        <li>
          <TiMinus /> unternehmensname
        </li>
        <li>
          <TiMinus />
          unternehmensform
        </li>
        <li>
          <TiMinus />
          Name des Geschäftsführers
        </li>
        <li>
          <TiMinus />
          Gründungsjahr
        </li>
      </ul>
      <ul>
        <h3>Kontaktinformationen</h3>
        <li>
          <TiMinus />
          Adresse
        </li>
        <li>
          <TiMinus />
          Telefonnummer
        </li>
        <li>
          <TiMinus />
          E-Mail-Adresse
        </li>
        <li>
          <TiMinus />
          Faxnummer
        </li>
        <li>
          <TiMinus /> Schreibt uns eine Email <a href="/">hier</a>
        </li>
      </ul>
      <ul>
        <h3>Navigation</h3>
        <li>
          <TiMinus />
          Home
        </li>
        <li>
          <TiMinus />
          Rezept/Kontakt
        </li>
        <li>
          <TiMinus />
          Anschrift
        </li>
      </ul>
      <ul>
        <li>
          <TiMinus />
          Datenschutzerklärung
        </li>
        <li>
          <TiMinus />
          Impressum
        </li>
        <li>Allgemeine Geschäftsbedingungen (AGB) und Nutzungsbedingungen</li>
      </ul>
      <div className="searchBar">
        <Input
          label="Search"
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
    </footer>
  );
};

export default Footer;
