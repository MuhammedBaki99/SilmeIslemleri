console.log("Projeye Başladık");

//Önce bir meyveler adında bir dizi oluştur
//kaç tane meyve eklemek istediğnii kullanıcıya sor
//meyve sayısı kadar kullanıcıya prompt ile meyve çeşidi al
//kullanıcıya meyve silmek istermisin diye sor
//eğer isterse hangi meyveyi silmek istediğini sor
//silinmesini istediği neyveyi bulup silinmesini sağla

let meyveler = [];


let meyveAdeti = Number(prompt("Kaç tane meyve eklemek istersiniz?"));


for (let i = 0; i < meyveAdeti; i++) {
    let meyveAdi = prompt("Meyve Çeşidi Giriniz");
    meyveler.push(meyveAdi);
}

console.log(meyveler);
