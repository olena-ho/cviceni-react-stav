import { useState } from "react";
import "./hamburger.css";

/*
Zadání 1: Přichystejte si stavovou proměnnou s výchozí hodnotou `false`, ve které bude uloženo,
  jestli je menu otevřené nebo nikoliv.
Zadání 2: Po kliknutí na tlačítko změňte stav z `true` na `false` nebo obráceně.
Zadání 3: Nerenderujte `ul`, pokud je stav `false`.
Zadání 4: Pokud je menu zavřené nechte mu jen třídu `hamburger`. Pro otevřené přidejte navíc
  `hamburger--otevrene`.
*/

export const Uloha5 = () => {
  const [hambOpen, setHambOpen] = useState(false);

  return (
    <div className="menu">
      <button
        className={`hamburger ${hambOpen ? "hamburger--otevrene" : ""}`}
        aria-label="menu"
        onClick={() => setHambOpen(!hambOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {hambOpen && (
        <ul>
          <li>
            <a href="#o-nas">O nás</a>
          </li>
          <li>
            <a href="#co-delame">Co děláme</a>
          </li>
          <li>
            <a href="#kontakty">Kontakty</a>
          </li>
          <li>
            <a href="#cenik">Ceník</a>
          </li>
        </ul>
      )}
    </div>
  );
};
