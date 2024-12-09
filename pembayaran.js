document.addEventListener("DOMContentLoaded", () => {
    // Ambil data produk dari localStorage
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

    if (selectedProduct) {
        // Menampilkan data di halaman
        document.getElementById("order-item").textContent = selectedProduct.name;
        document.getElementById("order-price").textContent = IDR ${selectedProduct.price.toLocaleString()};

        // Menghitung total harga
        const shippingFee = 250000;
        const convenienceFee = 3000;
        const totalPrice = selectedProduct.price + shippingFee + convenienceFee;

        // Menampilkan total harga
        document.getElementById("order-total").textContent = IDR ${totalPrice.toLocaleString()};
    } else {
        // Jika tidak ada data produk
        document.getElementById("order-item").textContent = "No product selected.";
        document.getElementById("order-price").textContent = "IDR 0";
        document.getElementById("order-total").textContent = "IDR 0";
    }
});