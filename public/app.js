const slides = document.querySelectorAll(".slide");
const l_slides = document.querySelectorAll(".l-slide");
const dots = document.querySelectorAll(".dot");
const l_dots = document.querySelectorAll(".l-dot");
const modal = document.getElementById("lightbox");
const add_cart = document.getElementById("add-to-cart");
//  menu
const ham = document.getElementById("hamburger");
const ham_close = document.getElementById("ham-close");
const mobile_menu = document.getElementById("mobile-menu");
const backdrop = document.querySelector(".backdrop");
// cart
const cart_icon = document.getElementById("cart-icon");
const cart_basket = document.getElementById("cart-basket");
const cart_content = document.getElementById("cart-content");
const minus = document.getElementById("minus");
const count = document.getElementById("count");
const plus = document.getElementById("plus");
const cart_num = document.getElementById("cart-num");

ham.addEventListener("click", openMenu);
ham_close.addEventListener("click", closeMenu);
cart_icon.addEventListener("click", toggleBasket);
add_cart.addEventListener("click", handleSubmit);

// carousal
let slideIndex = 1;
showSlide(slideIndex);

// for next and previous
function nextSlide(n) {
  showSlide((slideIndex += n));
}

// for current slide
function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  // for lighthbox
  for (i = 0; i < l_slides.length; i++) {
    l_slides[i].style.display = "none";
  }
  for (i = 0; i < l_dots.length; i++) {
    l_dots[i].classList.remove("active");
  }

  if (n > l_slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = l_slides.length;
  }

  slides[slideIndex - 1].style.display = "block";
  l_slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  l_dots[slideIndex - 1].classList.add("active");
}

function openModal() {
  modal.style.display = "flex";
}
function closeModal() {
  modal.style.display = "none";
}

function openMenu() {
  mobile_menu.classList.add("active-menu");
  mobile_menu.classList.remove("hide");
  backdrop.classList.toggle("hidden");
}
function closeMenu() {
  mobile_menu.classList.remove("active-menu");
  mobile_menu.classList.add("hide");
  backdrop.classList.toggle("hidden");
}

function toggleBasket() {
  cart_basket.classList.toggle("unlock");
  cart_basket.classList.toggle("lock");
}

document.addEventListener("click", (event) => {
  if (backdrop.contains(event.target)) {
    mobile_menu.classList.remove("active-menu");
    mobile_menu.classList.add("hide");
    backdrop.classList.remove("flex");
    backdrop.classList.add("hidden");
  }
});

plus.addEventListener("click", () => {
  count.innerHTML++;
});
minus.addEventListener("click", () => {
  if (count.innerHTML == 0) {
    return;
  }
  count.innerHTML--;
});

function handleSubmit() {
  const newPrice = "$" + 125 * count.innerHTML;
  if (count.innerHTML > 0) {
    cart_content.innerHTML = `
    <div class="flex gap-4 items-center">
      <img
        src="./images/image-product-1-thumbnail.jpg"
        alt="image-product-1"
        class="w-14 rounded-md"
      />
      <div class="text-Dark-grayish-blue">
        <p>Fall Limited Edition Snickers</p>
        <p>
          $125.00 X <span>${count.innerHTML}</span>
          <span class="font-bold text-black">${newPrice}</span>
        </p>
      </div>

      <img
        src="./images/icon-delete.svg"
        alt=""
        class="cursor-pointer"
      onclick="deleteItem()"/>
    </div>

    <button
      class="bg-Orange w-full text-white p-3 rounded-lg font-bold"
    >
      checkout
    </button>
   `;
    cart_num.innerHTML = count.innerHTML;
    cart_num.classList.remove("hidden");
    cart_num.classList.add("flex");
  }
}
cart_content.innerHTML = `<div class="py-10 font-bold text-Dark-grayish-blue">Your cart is empty 😢</div>`;

function deleteItem() {
  cart_content.innerHTML = `<div class="py-10 font-bold text-Dark-grayish-blue">Your cart is empty 😢</div>`;
  cart_num.innerHTML = "0";
  count.innerHTML = "0";
  cart_num.classList.remove("flex");
  cart_num.classList.add("hidden");
}
