window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    const sections = [{
        label: "Giảm giá!",
        class: "card__sale",
        title: "Hamburger",
        desc: "",
        priceFinal: "25.000₫",
        priceOriginal: "39.000₫",
        image: "img/hamburger.WEBP",
        url: "",
    },
        {
            label: "Giảm giá!",
            class: "card__sale",
            title: "Bánh Kếp",
            desc: "",
            priceFinal: "35.000₫",
            priceOriginal: "50.000₫",
            image: "img/banhkep.WEBP",
            url: "",
        },
        {
            label: "Mới!",
            class: "card__new",
            title: "Mì Cay",
            desc: "",
            priceFinal: "40.000₫",
            priceOriginal: "",
            image: "img/micay.WEBP",
            url: "",
        },
        {
            label: "Mới!",
            class: "card__new",
            title: "Gà Rán",
            desc: "",
            priceFinal: "35.000₫",
            priceOriginal: "",
            image: "img/garan.WEBP",
            url: "",
        },
        {
            label: "Mới!",
            class: "card__new",
            title: "Xúc Xích",
            desc: "",
            priceFinal: "10.000₫",
            priceOriginal: "",
            image: "img/xucxich.JPG",
            url: "",
        },
        {
            label: "Mới!",
            class: "card__new",
            title: "Kimbap Chiên",
            desc: "",
            priceFinal: "30.000₫",
            priceOriginal: "",
            image: "img/kimbap.WEBP",
            url: "",
        },
        {
            label: "Mới!",
            class: "card__new",
            title: "Khoai Tây Chiên",
            desc: "",
            priceFinal: "20.000₫",
            priceOriginal: "",
            image: "img/khoaitay.JPG",
            url: "",
        },
        {
            label: "Giảm giá!",
            class: "card__sale",
            title: "Chủ Nhà",
            desc: "Hiền lành, ngoan, đáp ứng mọi nhu cầu của chị em :)))",
            priceFinal: "500.000₫",
            priceOriginal: "3.000.000₫",
            image: "img/nghia.JPEG",
            url: "https://www.facebook.com/bongbeo25",
        },
    ];

    sections.forEach(function (el) {
        const template =`
            <div class="swiper-slide">
                <div class="card">
                    <div class="${el.class}">${el.label}</div>
                    <span class="card__more"></span>
                    <div class="card__image">
                        <img src="${el.image}" alt="${el.title}">
                    </div>
        
                    <div class="card__content">
                        <article class="card__text">
                            <h2 class="card__title">${el.title}</h2>
                            <div class="card__price">
                                <p class="card__priceFinal">${el.priceFinal}</p>
                                <p class="card__priceOriginal">${el.priceOriginal}</p>
                            </div>
                        </article>
        
                        <div class="card__icon">
                            <a href="${el.url}" target="_blank" rel="noopenner">
                                <button class="card__btn"><span>Xem</span></button>
                            </a>
                        </div>
                    </div>

                    <div class="card__options">
                        <p class="card__desc">${el.desc}</p>
                        
                        <form action="" method="post">
                            <div class="card__option">
                                <div class="card__quantity">
                                <p class="card__name">Số lượng</p>
                                    <select name="product_quantity" id="">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </select>
                                </div>
                            </div>
                            <button class="card__cta" type="submit">Thêm vào <img src="assets/shopping-bags.svg"></button>
                        </form>
                    </div>

                </div>
            </div>
        `;

        swiperWrapper.insertAdjacentHTML('beforeend', template);

    })

    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: false,
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 40,
        threshold: 5,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1180: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
            },
            799: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
            },
        }
    });

    var btnShow = document.querySelectorAll('.card__more');


    btnShow.forEach(function (el) {
        el.addEventListener('click', showMore);
    });

    function showMore(event) {
        var card = event.target.closest(".swiper-slide");

        if (card.classList.contains('show-more')) {
            card.classList.remove('show-more');
        } else {
            card.classList.add('show-more')
        }
    }
});