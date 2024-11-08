const couponsData = [
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "", promoCode: "CODE1" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "", promoCode: "CODE2" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "", promoCode: "CODE3" },
    // Add promo codes for each coupon
];

function createCouponCard(coupon) {
    const couponCard = document.createElement("div");
    couponCard.classList.add("coupon");

    couponCard.innerHTML = `
        <img src="${coupon.image}" alt="${coupon.name}">
        <h3>${coupon.name}</h3>
        <p>${coupon.price}</p>
        <button class="promo-button" data-promocode="${coupon.promoCode}">Get Promo Code</button>
    `;

    return couponCard;
}

function showModal(promoCode) {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    
    document.getElementById("promoCode").innerText = "Promo Code: " + promoCode;
    
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function initCoupons() {
    const couponsContainer = document.getElementById("coupons");

    couponsData.forEach(coupon => {
        const couponCard = createCouponCard(coupon);
        couponsContainer.appendChild(couponCard);
    });

    couponsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("promo-button")) {
            const promoCode = event.target.dataset.promocode;
            showModal(promoCode);
        }
    });
}

document.addEventListener("DOMContentLoaded", initCoupons);
