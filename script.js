document.addEventListener('DOMContentLoaded', () => {
    const resepList = document.getElementById('resep-list');
    const addResepBtn = document.getElementById('add-resep-btn');
    let resepCounter = 2; // Mulai dari ID 2 karena ID 1 sudah ada di HTML

    // Fungsi untuk membuat elemen resep baru (template)
    function createResepItem(id) {
        const item = document.createElement('div');
        item.className = 'resep-item';
        item.dataset.id = id;
        
        item.innerHTML = `
            <select class="bahan-select">
                <option value="">-- Pilih Bahan Baku --</option>
                <option value="kopi">Biji Kopi Arabika</option>
                <option value="susu">Susu Full Cream</option>
                <option value="gula">Gula Cair</option>
                <option value="es">Es Batu</option>
            </select>
            <input type="number" class="jumlah-pakai" placeholder="Jumlah">
            <span class="satuan">(Satuan: Gram/ml/pcs)</span>
            <button class="remove-btn"> [HAPUS] </button>
        `;
        
        // Tambahkan event listener untuk tombol HAPUS
        item.querySelector('.remove-btn').addEventListener('click', () => {
            item.remove();
        });

        return item;
    }

    // Event listener untuk tombol 'Tambah Bahan Lain'
    addResepBtn.addEventListener('click', () => {
        const newItem = createResepItem(resepCounter++);
        resepList.appendChild(newItem);
    });

    // Tambahkan event listener hapus untuk item yang sudah ada di HTML
    document.querySelectorAll('.resep-item .remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.closest('.resep-item').remove();
        });
    });

    // Event listener untuk tombol SIMPAN (Hanya Simulasi Lofi)
    const saveBtn = document.getElementById('save-btn');
    saveBtn.addEventListener('click', () => {
        const menuName = document.getElementById('nama_menu').value;
        if (menuName) {
            alert(`[SIMULASI LOFI]: Data Menu '${menuName}' dan Resepnya telah tersimpan.`);
            // Di implementasi nyata, ini akan mengirim data ke backend
        } else {
            alert("Nama Menu harus diisi!");
        }
    });

});