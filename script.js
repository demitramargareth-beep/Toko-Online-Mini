// ==============================
// FORMAT HARGA
// ==============================

function money(price) {
    return "Rp" + price.toLocaleString("id-ID");
}


// ==============================
// GAMBAR PENGGANTI (JIKA FILE TIDAK DITEMUKAN)
// ==============================

function imageFallback(text) {
    const svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">' +
        '<rect width="100%" height="100%" fill="#dbeafe"/>' +
        '<text x="50%" y="50%" fill="#17263F" font-family="Arial" ' +
        'font-size="28" text-anchor="middle">' + text + '</text></svg>';

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// ==============================
// DATA PRODUK
// ==============================

const products = [

/* === DOMPET === */

    {
        id: 1,
        name: "Classic Men's Wallet",
        category: "Dompet",
        price: 99000,
        image: "gambar/dompetpria.jfif",
        desc: "Dompet pria simpel dan rapi.",
        detail: "Dompet lipat pria dengan banyak slot kartu dan satu kantong uang kertas. Ukurannya ringkas, mudah masuk saku celana.",
        bahan: "Kulit sintetis",
        ukuran: "11 x 9 x 2 cm",
        warna: "Hitam, Cokelat",
        stok: 15,
        rating: 4.7,
        tag: "BEST SELLER"
    },

    {
        id: 2,
        name: "Long Wallet Pria",
        category: "Dompet",
        price: 119000,
        image: "gambar/dompetpriapanjang.jfif",
        desc: "Dompet panjang muat banyak.",
        detail: "Dompet panjang pria dengan banyak sekat kartu dan ruang luas untuk uang kertas serta nota. Tampilan elegan dan tahan lama.",
        bahan: "Kulit sintetis",
        ukuran: "19 x 10 x 2 cm",
        warna: "Hitam, Cokelat Tua",
        stok: 10,
        rating: 4.6,
        tag: "POPULAR"
    },

    {
        id: 3,
        name: "Ladies Wallet",
        category: "Dompet",
        price: 109000,
        image: "gambar/dompetwanita.jfif",
        desc: "Dompet wanita mungil dan manis.",
        detail: "Dompet wanita berukuran kompak dengan kantong koin, slot kartu, dan ruang uang kertas. Cocok dimasukkan ke tas kecil.",
        bahan: "Kulit sintetis",
        ukuran: "12 x 10 x 3 cm",
        warna: "Krem, Merah Muda",
        stok: 12,
        rating: 4.7,
        tag: "NEW"
    },

    {
        id: 4,
        name: "Ladies Long Wallet",
        category: "Dompet",
        price: 135000,
        image: "gambar/dompetwanitapanjang.jfif",
        desc: "Dompet panjang wanita yang elegan.",
        detail: "Dompet panjang wanita dengan resleting dan banyak sekat. Muat ponsel, kartu, uang, dan kebutuhan kecil lainnya.",
        bahan: "Kulit sintetis",
        ukuran: "20 x 10 x 3 cm",
        warna: "Hitam, Krem, Cokelat",
        stok: 9,
        rating: 4.8,
        tag: "POPULAR"
    },

/* === SEPATU === */

    {
        id: 5,
        name: "Classic Flat Shoes",
        category: "Sepatu",
        price: 179000,
        image: "gambar/flat shoes.jfif",
        desc: "Flat shoes nyaman untuk harian.",
        detail: "Flat shoes wanita dengan sol empuk dan desain simpel. Nyaman dipakai ke kampus, kantor, maupun acara santai.",
        bahan: "Kulit sintetis",
        ukuran: "Tersedia ukuran 36 - 40",
        warna: "Hitam, Krem",
        stok: 11,
        rating: 4.5,
        tag: "NEW"
    },

    {
        id: 6,
        name: "Pantofel Pria",
        category: "Sepatu",
        price: 299000,
        image: "gambar/pantofelpria.jfif",
        desc: "Sepatu formal untuk pria.",
        detail: "Pantofel pria dengan tampilan rapi dan mengilap. Pas untuk kerja, acara resmi, dan interview.",
        bahan: "Kulit sintetis premium",
        ukuran: "Tersedia ukuran 39 - 44",
        warna: "Hitam",
        stok: 7,
        rating: 4.6,
        tag: "POPULAR"
    },

    {
        id: 7,
        name: "Classic Sneakers Pria",
        category: "Sepatu",
        price: 249000,
        image: "gambar/sepatusneakerspria.jfif",
        desc: "Sneakers nyaman dan versatile.",
        detail: "Sneakers dengan sol empuk dan desain klasik yang mudah dipadukan dengan outfit santai maupun semi formal. Nyaman dipakai seharian.",
        bahan: "Kanvas dan karet",
        ukuran: "Tersedia ukuran 39 - 44",
        warna: "Putih, Hitam",
        stok: 8,
        rating: 4.7,
        tag: "BEST SELLER"
    },

    {
        id: 8,
        name: "Classic Sneakers Wanita",
        category: "Sepatu",
        price: 239000,
        image: "gambar/sepatusneakerswanita.jfif",
        desc: "Sneakers wanita yang stylish.",
        detail: "Sneakers wanita dengan bentuk ramping dan sol ringan. Cocok untuk jalan-jalan, kuliah, dan aktivitas santai.",
        bahan: "Kanvas dan karet",
        ukuran: "Tersedia ukuran 36 - 40",
        warna: "Putih, Pink",
        stok: 10,
        rating: 4.8,
        tag: "POPULAR"
    },

/* === SANDAL === */

    {
        id: 9,
        name: "Crocs Hitam",
        category: "Sandal",
        price: 149000,
        image: "gambar/sendalcrocshitam.jfif",
        desc: "Sandal crocs ringan dan santai.",
        detail: "Sandal crocs berbahan ringan dan tahan air dengan lubang sirkulasi udara. Nyaman dipakai di rumah maupun bepergian.",
        bahan: "Karet EVA",
        ukuran: "Tersedia ukuran 37 - 43",
        warna: "Hitam",
        stok: 14,
        rating: 4.6,
        tag: "POPULAR"
    },

    {
        id: 10,
        name: "Crocs Putih",
        category: "Sandal",
        price: 149000,
        image: "gambar/sendalcrocsputih.jfif",
        desc: "Sandal crocs warna bersih.",
        detail: "Sandal crocs warna putih yang ringan, empuk, dan mudah dibersihkan. Cocok dipadukan dengan outfit santai.",
        bahan: "Karet EVA",
        ukuran: "Tersedia ukuran 37 - 43",
        warna: "Putih",
        stok: 13,
        rating: 4.5,
        tag: "NEW"
    },

    {
        id: 11,
        name: "Sandal Pria",
        category: "Sandal",
        price: 89000,
        image: "gambar/sendalpria.jfif",
        desc: "Sandal pria nyaman dipakai.",
        detail: "Sandal pria dengan alas anti selip dan strap yang kuat. Nyaman untuk pemakaian harian.",
        bahan: "Karet dan sintetis",
        ukuran: "Tersedia ukuran 39 - 44",
        warna: "Hitam, Cokelat",
        stok: 20,
        rating: 4.4,
        tag: "BEST SELLER"
    },

    {
        id: 12,
        name: "Sandal Wanita",
        category: "Sandal",
        price: 95000,
        image: "gambar/sendalwanita.jfif",
        desc: "Sandal wanita simpel dan manis.",
        detail: "Sandal wanita dengan desain simpel dan alas empuk. Pas untuk jalan santai maupun nongkrong.",
        bahan: "Karet dan sintetis",
        ukuran: "Tersedia ukuran 36 - 40",
        warna: "Krem, Hitam",
        stok: 18,
        rating: 4.5,
        tag: "POPULAR"
    },

/* === JAM TANGAN === */

    {
        id: 13,
        name: "Jam Tangan Pria Classic",
        category: "Jam Tangan",
        price: 189000,
        image: "gambar/jamtanganpria.jfif",
        desc: "Jam tangan pria berkesan maskulin.",
        detail: "Jam tangan analog pria dengan desain klasik dan tali yang kuat. Cocok untuk kerja maupun acara santai.",
        bahan: "Stainless steel dan kaca mineral",
        ukuran: "Diameter case 42 mm",
        warna: "Hitam, Silver",
        stok: 9,
        rating: 4.7,
        tag: "BEST SELLER"
    },

    {
        id: 14,
        name: "Jam Tangan Pria Sport",
        category: "Jam Tangan",
        price: 219000,
        image: "gambar/jamtanganpria2.jfif",
        desc: "Jam tangan pria gaya sporty.",
        detail: "Jam tangan pria bergaya sporty dengan tampilan tegas dan tali nyaman di pergelangan tangan. Tahan percikan air.",
        bahan: "Stainless steel dan silikon",
        ukuran: "Diameter case 44 mm",
        warna: "Hitam, Biru",
        stok: 7,
        rating: 4.6,
        tag: "NEW"
    },

    {
        id: 15,
        name: "Jam Tangan Wanita Elegant",
        category: "Jam Tangan",
        price: 179000,
        image: "gambar/jamtanganwanita.jfif",
        desc: "Jam tangan wanita yang anggun.",
        detail: "Jam tangan analog wanita dengan case mungil dan tampilan elegan. Mudah dipadukan dengan berbagai gaya.",
        bahan: "Stainless steel dan kaca mineral",
        ukuran: "Diameter case 32 mm",
        warna: "Rose Gold, Silver",
        stok: 8,
        rating: 4.8,
        tag: "POPULAR"
    },

    {
        id: 16,
        name: "Jam Tangan Wanita Casual",
        category: "Jam Tangan",
        price: 169000,
        image: "gambar/jamtanganwanita2.jfif",
        desc: "Jam tangan wanita untuk harian.",
        detail: "Jam tangan wanita bergaya kasual dengan tali ringan dan nyaman. Cocok dipakai ke kampus maupun jalan-jalan.",
        bahan: "Stainless steel dan kulit sintetis",
        ukuran: "Diameter case 34 mm",
        warna: "Cokelat, Hitam",
        stok: 10,
        rating: 4.5,
        tag: "NEW"
    },

    {
        id: 17,
        name: "Smartwatch Active",
        category: "Jam Tangan",
        price: 349000,
        image: "gambar/smartwatch.jfif",
        desc: "Smartwatch untuk aktivitas harian.",
        detail: "Smartwatch dengan layar jernih, notifikasi pesan, pemantau langkah, dan detak jantung. Baterai tahan hingga beberapa hari.",
        bahan: "Plastik ABS dan silikon",
        ukuran: "Layar 1.69 inci",
        warna: "Hitam, Biru",
        stok: 6,
        rating: 4.6,
        tag: "BEST SELLER"
    },

    {
        id: 18,
        name: "Smartwatch Pro",
        category: "Jam Tangan",
        price: 429000,
        image: "gambar/smartwatch2.jfif",
        desc: "Smartwatch fitur lengkap.",
        detail: "Smartwatch dengan layar lebih besar, mode olahraga lengkap, dan kemampuan menerima panggilan lewat Bluetooth.",
        bahan: "Aluminium dan silikon",
        ukuran: "Layar 1.85 inci",
        warna: "Hitam, Silver",
        stok: 5,
        rating: 4.7,
        tag: "NEW"
    },

/* === TAS === */

    {
        id: 19,
        name: "Sling Bag Wanita",
        category: "Tas",
        price: 159000,
        image: "gambar/tas_selempang.jfif",
        desc: "Tas selempang mini yang elegan.",
        detail: "Tas selempang dengan bahan lembut dan tali panjang yang bisa diatur. Pas untuk membawa ponsel, dompet, dan kebutuhan kecil lainnya.",
        bahan: "Kulit sintetis",
        ukuran: "20 x 14 x 7 cm",
        warna: "Krem, Cokelat",
        stok: 5,
        rating: 4.6,
        tag: "NEW"
    },

    {
        id: 20,
        name: "Sling Bag Pria",
        category: "Tas",
        price: 139000,
        image: "gambar/tas_selempangpria.jfif",
        desc: "Tas selempang praktis untuk pria.",
        detail: "Tas selempang pria dengan beberapa kantong dan resleting kuat. Muat ponsel, dompet, charger, dan perlengkapan kecil.",
        bahan: "Kanvas dan nilon",
        ukuran: "25 x 16 x 8 cm",
        warna: "Hitam, Abu-abu",
        stok: 9,
        rating: 4.5,
        tag: "POPULAR"
    },

    {
        id: 21,
        name: "Everyday Tote Bag",
        category: "Tas",
        price: 129000,
        image: "gambar/tas_totebag.jfif",
        desc: "Tas simpel untuk aktivitas harian.",
        detail: "Tas tote berukuran besar dengan desain minimalis. Muat laptop, buku, dan perlengkapan harian, cocok untuk kuliah, kerja, maupun belanja.",
        bahan: "Kanvas tebal",
        ukuran: "38 x 32 x 10 cm",
        warna: "Krem, Hitam",
        stok: 12,
        rating: 4.8,
        tag: "BEST SELLER"
    }

];

// ==============================
// KARTU PRODUK
// ==============================

function productCard(p) {
    return `
        <article class="product-card">

            <div class="product-image">

                <img
                    src="${p.image}"
                    alt="${p.name}"
                    onerror="this.onerror=null;this.src=imageFallback(this.alt)"
                >

                ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}

            </div>

            <div class="product-info">

                <small>${p.category.toUpperCase()}</small>

                <h3>${p.name}</h3>

                <p>${p.desc}</p>

                <div class="product-bottom">

                    <span class="price">${money(p.price)}</span>

                    <a href="detail_produk.html?id=${p.id}" class="product-button">
                        Lihat Produk →
                    </a>

                </div>

            </div>

        </article>
    `;
}


// ==============================
// MENAMPILKAN PRODUK
// ==============================

function renderProducts() {

    const productList = document.getElementById("productList");

    if (!productList) return;

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    const keyword = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;

    const filteredProducts = products.filter(p => {

        const matchName =
            p.name.toLowerCase().includes(keyword) ||
            p.category.toLowerCase().includes(keyword);

        const matchCategory =
            category === "Semua" ||
            p.category === category;

        return matchName && matchCategory;

    });

    productList.innerHTML = filteredProducts.length
        ? filteredProducts.map(productCard).join("")
        : "";

    document.getElementById("productCount").textContent =
        filteredProducts.length + " produk tersedia";

    document.getElementById("emptyMessage").hidden =
        filteredProducts.length > 0;

}


// ==============================
// PRODUK FAVORIT BERANDA
// ==============================

function renderFeaturedProducts() {

    const featured = document.getElementById("featuredProducts");

    if (!featured) return;

    featured.innerHTML = products.map(productCard).join("");

}


// ==============================
// DETAIL PRODUK
// ==============================

let selectedProduct = null;

let quantity = 1;

const detailImage = document.getElementById("detailImage");

if (detailImage) {

    const params = new URLSearchParams(window.location.search);

    const productId = Number(params.get("id"));

    selectedProduct = products.find(p => p.id === productId);

    if (selectedProduct) {

        const p = selectedProduct;

        document.title = p.name + " | M-Store";

        detailImage.src = p.image;
        detailImage.alt = p.name;
        detailImage.onerror = function () {
            this.onerror = null;
            this.src = imageFallback(p.name);
        };

        document.getElementById("breadcrumbName").textContent = p.name;
        document.getElementById("detailCategory").textContent = p.category.toUpperCase();
        document.getElementById("detailName").textContent = p.name;
        document.getElementById("detailPrice").textContent = money(p.price);
        document.getElementById("detailDescription").textContent = p.detail || p.desc;

        // Label produk (BEST SELLER, NEW, dll)
        const tag = document.getElementById("detailTag");
        if (p.tag) {
            tag.textContent = p.tag;
        } else {
            tag.hidden = true;
        }

        // Rating
        const rating = document.getElementById("detailRating");
        if (p.rating) {
            const full = Math.round(p.rating);
            rating.textContent = "★".repeat(full) + "☆".repeat(5 - full) + "  " + p.rating;
        } else {
            rating.hidden = true;
        }

        // Stok
        const stock = document.getElementById("detailStock");
        if (p.stok > 0) {
            stock.textContent = "Stok tersedia: " + p.stok;
        } else {
            stock.textContent = "Stok habis";
            stock.classList.add("out");
        }

        // Spesifikasi produk
        const specs = [
            ["Kategori", p.category],
            ["Bahan", p.bahan],
            ["Ukuran", p.ukuran],
            ["Warna", p.warna]
        ].filter(item => item[1]);

        document.getElementById("detailSpecs").innerHTML = specs
            .map(item => `
                <div class="spec-row">
                    <dt>${item[0]}</dt>
                    <dd>${item[1]}</dd>
                </div>
            `)
            .join("");

        updateDetailTotal();

        // Produk lainnya
        const related = products
            .filter(item => item.id !== p.id)
            .sort(item => (item.category === p.category ? -1 : 1))
            .slice(0, 3);

        document.getElementById("relatedProducts").innerHTML =
            related.map(productCard).join("");

    } else {

        document.querySelector(".detail-product").innerHTML = `
            <div class="detail-notfound">
                <h2>Produk tidak ditemukan</h2>
                <p>Produk yang kamu cari tidak tersedia.</p>
                <a class="btn btn-dark" href="produk.html">Kembali ke Produk</a>
            </div>
        `;

        const relatedSection = document.getElementById("relatedSection");
        if (relatedSection) relatedSection.hidden = true;

    }

}


// ==============================
// JUMLAH PRODUK
// ==============================

function updateDetailTotal() {

    const total = document.getElementById("detailTotal");

    if (total && selectedProduct) {
        total.textContent = money(selectedProduct.price * quantity);
    }

}

function changeQuantity(value) {

    if (!selectedProduct) return;

    quantity += value;

    if (quantity < 1) quantity = 1;

    if (quantity > selectedProduct.stok) {
        quantity = selectedProduct.stok;
    }

    document.getElementById("quantity").textContent = quantity;

    updateDetailTotal();

}


// ==============================
// NOTIFIKASI (TOAST)
// ==============================

function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);

}


// ==============================
// KERANJANG
// ==============================

function getCart() {

    try {
        return JSON.parse(localStorage.getItem("mstoreCart")) || [];
    } catch (error) {
        return [];
    }

}

function updateCartCount() {

    const total = getCart().reduce(function (sum, item) {
        return sum + item.quantity;
    }, 0);

    document.querySelectorAll(".cart-count").forEach(function (el) {
        el.textContent = total;
    });

}

function addToCart(goToCart) {

    if (!selectedProduct || selectedProduct.stok < 1) return;

    const cart = getCart();

    const existing = cart.find(p => p.id === selectedProduct.id);

    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image,
            quantity: quantity
        });

    }

    localStorage.setItem("mstoreCart", JSON.stringify(cart));

    updateCartCount();

    if (goToCart === true) {
        window.location.href = "keranjang.html";
        return;
    }

    showToast(selectedProduct.name + " ditambahkan ke keranjang");

}


// ==============================
// MENU MOBILE
// ==============================

function toggleMenu() {

    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.toggle("open");
    }

}


// ==============================
// JALANKAN SAAT HALAMAN DIBUKA
// ==============================

// ==============================
// KERANJANG: SIMPAN & HITUNG
// ==============================

const SHIPPING_COST = 15000;

function saveCart(cart) {
    localStorage.setItem("mstoreCart", JSON.stringify(cart));
    updateCartCount();
}

function getSubtotal(cart) {
    return cart.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0);
}


// ==============================
// KERANJANG: TAMPILKAN ISI
// ==============================

function renderCart() {

    const cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    const cart = getCart();

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-state">
                <h3>Keranjangmu masih kosong</h3>
                <p>Yuk, pilih produk favoritmu dulu.</p>
                <a class="btn btn-dark" href="produk.html">Belanja Sekarang</a>
            </div>
        `;

    } else {

        cartItems.innerHTML = cart.map(function (item) {
            return `
                <div class="cart-row">

                    <div class="cart-thumb">
                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            onerror="this.onerror=null;this.src=imageFallback(this.alt)"
                        >
                    </div>

                    <div class="cart-detail">
                        <h3>${item.name}</h3>
                        <p>${money(item.price)}</p>

                        <div class="qty-control">
                            <button type="button" onclick="changeCartQuantity(${item.id}, -1)">−</button>
                            <span>${item.quantity}</span>
                            <button type="button" onclick="changeCartQuantity(${item.id}, 1)">+</button>
                        </div>

                        <button type="button" class="remove-btn" onclick="removeFromCart(${item.id})">
                            Hapus
                        </button>
                    </div>

                    <div class="cart-row-total">
                        ${money(item.price * item.quantity)}
                    </div>

                </div>
            `;
        }).join("");

    }

    const subtotal = getSubtotal(cart);
    const shipping = cart.length ? SHIPPING_COST : 0;

    document.getElementById("subtotal").textContent = money(subtotal);
    document.getElementById("shipping").textContent = money(shipping);
    document.getElementById("total").textContent = money(subtotal + shipping);

}

function changeCartQuantity(id, value) {

    const cart = getCart();

    const item = cart.find(p => p.id === id);

    if (!item) return;

    item.quantity += value;

    if (item.quantity < 1) item.quantity = 1;

    saveCart(cart);
    renderCart();

}

function removeFromCart(id) {

    const cart = getCart().filter(p => p.id !== id);

    saveCart(cart);
    renderCart();

}


// ==============================
// CHECKOUT
// ==============================

function renderCheckout() {

    const summary = document.getElementById("checkoutSummary");

    if (!summary) return;

    const cart = getCart();

    summary.innerHTML = cart.length
        ? cart.map(function (item) {
            return `
                <div class="checkout-summary-item">
                    <span>${item.name} × ${item.quantity}</span>
                    <b>${money(item.price * item.quantity)}</b>
                </div>
            `;
        }).join("") + `
            <div class="checkout-summary-item">
                <span>Ongkos kirim</span>
                <b>${money(SHIPPING_COST)}</b>
            </div>
        `
        : "<p>Keranjang masih kosong.</p>";

    const total = cart.length ? getSubtotal(cart) + SHIPPING_COST : 0;

    document.getElementById("checkoutTotal").textContent = money(total);

    const form = document.getElementById("checkoutForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (getCart().length === 0) {
            showToast("Keranjang masih kosong");
            return;
        }

        const nama = form.elements["nama"].value;

        const message = document.getElementById("orderMessage");

        message.textContent =
            "Terima kasih, " + nama + "! Pesananmu berhasil dibuat (simulasi).";

        message.hidden = false;

        form.reset();

        saveCart([]);
        renderCheckout();

    });

}


// ==============================
// JALANKAN SAAT HALAMAN DIBUKA
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    renderProducts();

    renderFeaturedProducts();

    renderCart();

    renderCheckout();

    updateCartCount();

});
