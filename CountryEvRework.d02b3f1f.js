const e=document.querySelector(".pagination-container");e.addEventListener("click",t=>{if("BUTTON"!=t.target.nodeName)return;e.querySelectorAll(".pag-button").forEach(e=>e.classList.remove("active")),t.target.classList.add("active");let a=1;JSON.parse(localStorage.getItem("key")),console.log(Number(t.target.textContent))});
//# sourceMappingURL=CountryEvRework.d02b3f1f.js.map
