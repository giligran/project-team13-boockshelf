import"./styles-ee14eca9.js";const e={switcherRef:document.querySelector(".switch"),container:document.querySelector(".header-container"),logo:document.querySelector(".icon-title-svg"),shop:document.querySelector(".shop-icon-svg"),arrow:document.querySelector(".arow-down"),burger:document.querySelector(".icon-menu-svg"),mobMenu:document.querySelector("#mobile-menu"),mobOpen:document.querySelector("#mob-menu-open"),mobClose:document.querySelector("#mob-menu-close"),page:document.querySelector(".page-mode"),home:document.querySelector(".section-home")};localStorage.getItem("mode")==="dark"&&(e.container.classList.add("dark"),e.logo.classList.add("dark"),e.shop.classList.add("dark"),e.burger.classList.add("dark"));function t(o){o.target.nodeName==="INPUT"&&(e.container.classList.toggle("dark"),e.logo.classList.toggle("dark"),e.shop.classList.toggle("dark"),e.burger.classList.toggle("dark"),e.container.classList.contains("dark")?(localStorage.setItem("mode","dark"),localStorage.getItem("mode")):(localStorage.removeItem("mode"),localStorage.getItem("mode")))}e.switcherRef.addEventListener("click",t);
