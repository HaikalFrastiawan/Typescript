function cekIzinMengemudi (umur: number): string {
    if (umur >= 17){
        return "Boleh bikin sim";
    }else {
        return "Belum Boleh bikin sim"
    }
}

const daftarUmur: number[] = [16,18,20,14,13];
daftarUmur.map((umur) => {
    const hasil = cekIzinMengemudi(20);

    console.log(`untuk umur ${umur}: ${hasil}`)
})
const Jaki = cekIzinMengemudi(18);
console.log(`apakah zaki sudah boleh mengemudi? ${Jaki}`);


const yangBolehSim = daftarUmur.filter((umur) =>{
    return umur >= 17;
});

console.log("Daftar umur yang boleh bikin SIM:", yangBolehSim);

