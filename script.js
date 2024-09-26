document.addEventListener("DOMContentLoaded", function() {
    // Nama pacar yang ingin ditampilkan
    var namaPacar = "Aulia Senja Arum"; // Ganti dengan nama pacar kamu

    // Menampilkan nama pacar di elemen dengan id 'namaPacar'
    document.getElementById("namaPacar").textContent = namaPacar;

    // Fungsi untuk membuat bunga jatuh
    function buatBunga() {
        var bunga = document.createElement('div');
        bunga.classList.add('bunga');
        bunga.style.left = Math.random() * 100 + 'vw';  // Random posisi horizontal
        bunga.style.animationDuration = Math.random() * 3 + 2 + 's';  // Random kecepatan jatuh
        document.getElementById('bungaContainer').appendChild(bunga);

        // Menghapus bunga setelah animasi selesai
        setTimeout(function() {
            bunga.remove();
        }, 5000); // Hapus bunga setelah 5 detik (waktu animasi)
    }

    // Buat bunga jatuh setiap 500ms
    setInterval(buatBunga, 500);
});
