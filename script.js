function copyToClipboard(button) {
    const listItem = button.closest('.list-group-item'); // Temukan elemen terdekat dengan kelas .list-group-item
    const number = listItem.querySelector('.no-rek').textContent.split(' - ')[0]; // Ambil hanya nomor rekening
    navigator.clipboard.writeText(number).then(() => {
        alert("Nomor rekening telah disalin: " + number);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}
