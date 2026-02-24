function cekIzinMengemudi(umur) {
    if (umur >= 17) {
        return "Boleh bikin sim";
    }
    else {
        return "Belum Boleh bikin sim";
    }
}
var daftarUmur = [16, 18, 20, 14, 13];
daftarUmur.map(function (umur) {
    var hasil = cekIzinMengemudi(20);
    console.log("untuk umur ".concat(umur, ": ").concat(hasil));
});
var Jaki = cekIzinMengemudi(18);
console.log("apakah zaki sudah boleh mengemudi? ".concat(Jaki));
var yangBolehSim = daftarUmur.filter(function (umur) {
    return umur >= 17;
});
console.log("Daftar umur yang boleh bikin SIM:", yangBolehSim);
