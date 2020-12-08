/**
 * Example UI setup script
 */

console.log("uitest start");
HandMenu.loadUi(({UI}) =>
  UI.FoldLayout({},
    UI.PageLayout({autodistribute:true,gridparams:{cols:4,rows:4}},
      ...([...Array(16).keys()].map(i => UI.UiButton({size:[2,2],text:`${i+1}`})))
    ),
    UI.UiText({text:"Middle\ntext\nhere"}),
    UI.PageLayout({autodistribute:true,gridparams:{cols:4,rows:4}},
      ...([...Array(16).keys()].map(i => UI.UiButton({size:[2,2],text:`${i+1}`})))
    )
  )
);
