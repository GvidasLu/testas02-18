// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
let a = 2;
let b = 8;

if (a > b) {
    console.log('A daugiau uz B');
}else if (b > a) {
    console.log('B daugiau uz A');
}else {
    console.log('A lygu B');
}

// 2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
for (let i = 1; i <= 10; i++) {
    console.log(i);
   }
// 3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
let i = 0;

for(i = 0; i <= 10; i += 2){
    console.log(i);
}
// 4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let skaiciavimas = 0;
let skaicius;

for(let i = 0; i < 5; i++) {
    skaicius = rand(1, 10);
    console.log(skaicius);
}

// 5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let skaicius = rand();

while(skaicius != 5) {
    skaicius = rand(1,10);
}

console.log('Atspausdinti skaiciai: ' + skaicius);

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)

let masyvas = [];
let skaiciai = rand(20,30);

for(let i = 0; i < skaiciai; i++){
    masyvas[i] = rand(10, 30);
    masyvas.push(rand(10,30));
}

for(let i = 0; i < skaiciai; i++) {
    for(let j = 0; j < ilgis; j++) {
        if (masyvas[i] < masyvas[j]) {
            let temp = masyvas[i];
            masyvas[i] = masyvas[j];
            masyvas[j] = temp;
        }
    }
}

console.log('Masyvo reiksme: ' + masyvas);

console.log(`Antra maziausia reiksme yra ${masyvas[ilgis-2]}`)

////////////////////////////////////////

let max = 0;
let max2 = 0;
for(let i = 0; i < ilgis; i++) {
    if(masyvas[i] > max) {
        max2 = max;
        max = masyvas[i];
    } else if (masyvas[i] > max2) {
        max2 = masyvas[i];
    }
}

console.log(`Antra maziausia reiksme yra ${max2}`)

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let raides = ['A', 'B', 'C', 'D'];

let a=b=c=d=0;

for(let i = 0; i < 100; i++) {
    masyvas[i] = raides[rand(0,3)];
    if(masyvas[i] === ['A']) {
        a++;
    }else if(masyvas[i] === ['B']) {
        b++;
    }else if(masyvas[i] === ['C']) {
        c++;
    }else if(masyvas[i] === ['D']) {
        d++;
    }
}

console.log(`A: ${a}, B: ${b}, C: ${c}, D: ${d}`);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(a, b) {
    if(typeof(a) === 'number' && typeof(b) === 'number') {
        let suma = a+b;
        if(suma % 2 == 1) {
            return('skaiciu suma nelygine');
        } else {
            return(`skaiciu suma: ${suma}`);
        }
    }
    if(Array.isArray(a) && Array.isArray(b)) {
        let suma = a.lenght + b.lenght;
        if(suma % 2 == 1) {
            return('masuvy ilgiu suma nelygine');
        } else {
            return(`masyvu ilgiu suma: ${suma}`);
        }
        return;
    }
    return 'blogi kintamuju tipai';
}

console.log(lygineSuma(5, [1,5,6,5]));

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(skaicius) {
    if (typeof(skaicius) == 'number') {
        if(skaicius < 2 ){
            return `Skaicius ${skaicius} nera pirminis`;
        }
        if(skaicius == 2 ){
            return `Skaicius ${skaicius} yra pirminis`;
        }
        for(let i = 2; i < skaicius; i++) {
            if(skaicius % i == 0) {
                return `Skaicius ${skaicius} nera pirminis`;
            }
        }
        return `Skaicius ${skaicius} yra pirminis`;
    } else {
        return 'Kintamasis nera skaicius';
    }
}

console.log(pirminisSkaicius(11));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

function telefonoNumeris(a) {
    if(!Array.isArray(a) ) {
        return 'Kintamsis nera masyvas';
    }
    if(a.lenght != 10) {
        return 'Kintamojo ilgis nera 10';
    }
    for(let i = 0; i < 10; i++) {
        if(typeof(a[i]) !== 'number'){
            return 'Ne visi masyvo elementai yra skaiciai';
        }
    }
    return `(${a[0]}${a[1]}${a[2]})  ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
}

console.log(telefonoNumeris([4,5,6,4,5,3,2,1,4,8]));