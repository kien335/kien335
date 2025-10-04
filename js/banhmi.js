// Khi bấm "Mua ngay"
document.getElementById("muaNgay").addEventListener("click", function(e) {
    e.preventDefault();
    alert("Bạn đã chọn mua bánh mì! 🥖");
});

// Hiệu ứng nhấp nháy khi hover tiêu đề
let tieude = document.getElementById("tieude");
tieude.addEventListener("mouseenter", () => tieude.classList.add("blink"));
tieude.addEventListener("mouseleave", () => tieude.classList.remove("blink"));

// Nút "Xem thêm" → phân biệt link thật và link #
let xemThemBtn = document.getElementById("xemThem");
xemThemBtn.addEventListener("click", function(e) {
    let link = this.getAttribute("href");

    if (link === "#") {
        // Nếu href="#" thì chỉ cuộn mượt xuống giới thiệu
        e.preventDefault();
        document.getElementById("gioithieu").scrollIntoView({ behavior: "smooth" });
    }
    // Nếu href là link thật (http/https) thì để trình duyệt mở bình thường
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
