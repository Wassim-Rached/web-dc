var tabPrix = [37.2, 18.65, 83.56, 46.89, 125.63];
const BUDGET = 80;
const TTC = 1.19;
const TXT_PRIX = document.frm.txtPrix;
const LSTOPT = document.frm.lstOpt;

// init
charger();

// on_lstOpt_change
function on_lstOpt_change() {
  const value = LSTOPT.value;
  switch (value) {
    // Tous les prix TTC
    case "c1":
      afficher(tabPrix);
      break;

    // Le prix le moins cher
    case "c2":
      const min_value = Math.min.apply(null, tabPrix);
      afficher([min_value]);
      break;

    // Les prix qui sont dans le budget
    case "c3":
      const in_budget = tabPrix.filter((value) => value < BUDGET);
      afficher(in_budget);
      break;

    //  error
    default:
      afficher(["error"]);
      break;
  }
}
// LSTOPT event listener
/*
	LSTOPT.addEventListener("change", ()=>{
		const value = LSTOPT.value
		switch (value) {
			// Tous les prix TTC
			case "c1":
				afficher(tabPrix)
				break;

			// Le prix le moins cher
			case "c2":
				const min_value = Math.min.apply(null,tabPrix)
				afficher([min_value])
				break;

			// Les prix qui sont dans le budget
			case "c3":
				const in_budget = tabPrix.filter((value)=> value < BUDGET )
				afficher(in_budget)
				break;
			
			//  error
			default:
				afficher(["error"])
				break;
		}
	})
	*/

// on mouse over
TXT_PRIX.addEventListener("mouseover", () => {
  colorier(TXT_PRIX, "blue");
});
TXT_PRIX.addEventListener("mouseleave", () => {
  colorier(TXT_PRIX, "black");
});

function charger() {
  tabPrix = tabPrix.map((value) => {
    return (value * TTC).toFixed(2);
  });
  afficher(tabPrix);
}

// show table
function afficher(sel) {
  TXT_PRIX.value = sel.join(" , ");
}

//
function colorier(txt, couleur) {
  txt.style.color = couleur;
}
