/**
 * Example UI setup script
 */

console.log("uitest start");
let text;
QuickUI.loadUi(({UI}) =>
  UI.FoldLayout({},
    UI.PageLayout({autodistribute:true,gridparams:{cols:4,rows:4}},
      UI.UiButton({text:"color",oncontrollerdown:(function(){this.materials.normal.color = '#88CCAA';}),size:[3,3]}),
      UI.UiButton({text:"visible",oncontrollerdown:(function(){this.setAttribute('visible', false);}),size:[1,2]}),
      text = UI.UiText({text:"Blah",textcolor:"#55FF55"}),
      UI.UiButton({text:"text",oncontrollerdown:(function(){
        text.setAttribute("value",`${Math.random()}`);
        text.setAttribute("color","#667711");
      })}),
    ),
    UI.UiText({text:"Middle\ntext\nhere"}),
    UI.TabsLayout({labels:["John","Sally","Alice","Sam"]},
      UI.PageLayout({autodistribute:true,gridparams:{cols:4,rows:4}},
        ...([...Array(16).keys()].map(i => UI.UiButton({size:[2,2],text:`${i+1}`})))
      ),
      UI.UiButton({text:"color",oncontrollerdown:(function(){this.materials.normal.color = '#88CCAA';}),size:[3,3]}),
      UI.UiButton({text:"color",oncontrollerdown:(function(){this.materials.normal.color = '#88CCAA';}),size:[3,3]}),
      UI.UiButton({text:"color",oncontrollerdown:(function(){this.materials.normal.color = '#88CCAA';}),size:[3,3]})
    )
  )
);
