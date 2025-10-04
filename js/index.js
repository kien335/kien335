// Khi bấm "Mua ngay"
document.getElementById("muaNgay").addEventListener("click", function(e) {
    e.preventDefault();
    alert("Bạn đã chọn mua bánh mì! 🥖");
});

// Hiệu ứng nhấp nháy khi hover tiêu đề
let tieude = document.getElementById("tieude");
tieude.addEventListener("mouseenter", () => tieude.classList.add("blink"));
tieude.addEventListener("mouseleave", () => tieude.classList.remove("blink"));

// Cuộn mượt khi bấm "Xem thêm"
document.getElementById("xemThem").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("gioithieu").scrollIntoView({ behavior: "smooth" });
});

// Hiệu ứng card rung nhẹ khi click
let cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.1)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 200);
    });
});

// Hiệu ứng fade-in khi scroll
const fadeElems = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
    fadeElems.forEach(elem => {
        const rect = elem.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            elem.style.animationPlayState = "running";
        }
    });
});
