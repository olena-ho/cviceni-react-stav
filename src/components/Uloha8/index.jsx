/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/

import { useState } from "react"

export const Uloha8 = () => {
  const predOptions = ['možná', 'ano', 'ne'];
  const [predictionI, setPredictionI] = useState(0);
  return (
    <>
      <h3>Prší v Brně: { predOptions[predictionI] }</h3>
      <button onClick={() => setPredictionI(predictionI === 2 ? 0 : predictionI + 1)}>změnit</button>
    </>
  )
}
