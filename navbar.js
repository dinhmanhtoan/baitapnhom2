
var level1 = document.querySelectorAll(".level1");
var sub_menu1 = document.querySelectorAll(".sub-menu");
var sub_menu2 = document.querySelector(".sub-menu2");
var level2 = document.querySelectorAll(".level2");

for (let index = 0; index < level1.length; index++) {
    const element = level1[index];
    element.addEventListener("mouseenter", addActive)
    element.addEventListener("mouseleave", remove);
    function remove() {
        let next = element.lastElementChild;
        next.removeAttribute("id");
    }      
    function addActive() {
        let next = element.lastElementChild;
       next.setAttribute("id","active");

 
}
}

        for (let index = 0; index < level2.length; index++) {
            const element = level2[index];
            element.addEventListener("mouseenter", addActivelevel2);
            element.addEventListener("mouseleave", removelevel2);
              
    function removelevel2() {
        let next = this.lastElementChild;
        next.removeAttribute("id");
    }      
    function addActivelevel2() {
        let next = this.lastElementChild;
       next.setAttribute("id","active");
    }
        }
  
//     }
// level3.addEventListener("mouseenter", addActivelevel3);
// level3.addEventListener("mouseleave", removelevel3);


// function removelevel3() {
//     this.removeAttribute("id");
// }      
// function addActivelevel3() {
//     this.setAttribute("id","active");

// }





