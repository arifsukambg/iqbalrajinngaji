const tombol = document.querySelector('#btnTema');
const kartu = document.querySelector('.card');

const daftarWarna = [
    '#E3F2FD',
    '#E8F5E9',
    '#FCE4EC',
    '#F3E5F5',
    '#FFF3E0'
];

let indexWarna = 0;

tombol.addEventListener('click', () => {
    kartu.style.backgroundColor = daftarWarna[indexWarna];
    indexWarna = (indexWarna + 1) % daftarWarna.length;
});
