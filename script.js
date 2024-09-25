function copyToClipboard() {
    const number = document.querySelector('.no-rek').textContent.split(' - ')[0]; // Ambil hanya nomor rekening
    navigator.clipboard.writeText(number).then(() => {
        alert("Nomor rekening telah disalin: " + number);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}