const t = document.querySelectorAll(".tab");
const c = document.querySelectorAll(".content");

t.forEach((tab,index)=>{
    tab.addEventListener("click",(e)=>{
        t.forEach((tab)=>{
            tab.classList.remove("active");
        });

        tab.classList.add("active");

        c.forEach((content)=>{
            content.classList.remove("active");
        })
       
         c[index].classList.add("active");
    })
})