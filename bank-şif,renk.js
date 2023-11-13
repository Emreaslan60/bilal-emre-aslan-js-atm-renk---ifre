// Atm uygulaması
// let bakiye=1000;
// let metin=('hoşgeldinizi ne yapmak istersiniz\n 1-Bakiye sorgulama\n 2-Para çekme\n 3-Para yatırma\n 4-Çıkış')

// let secim=prompt(metin);
// switch(secim){
//     case '1':
//         alert('bakiyeniz:'+bakiye);
//         break;

//         case '2':
//             let cekilecekTutar=Number(prompt('Çekmek istediğiniz tutarı giriniz:'));
//             if(cekilecekTutar<bakiye){
//                 bakiye=bakiye-cekilecekTutar;
//                 alert('kalan bakiye:' +bakiye);
//             }else{
//                 alert('bakiye miktarını aştınız')
//             }
//             break;

//             case '3':
//              let yatırılacakTutar=Number(prompt('Yatırılacak tutarı giriniz:'));
//              bakiye=bakiye+yatırılacakTutar; 
//              alert('güncel bakiyeniz:'+bakiye);
             
//              break;

//              case '4':
//              alert('sistemden çıkış yapılmıştır.');
//              break;

//              default:
//                 alert('lütfen 1 ile 4 arasında sayı giriniz!');
//                 break;
// } 







// // HEX RANDOM PASSWORD

// let sifrekarakter  = [    "a",    "b",    "c",    "ç",    "d",    "e",    "f",    "g",    "ğ",    "h",    "ı",    "i",    "j",    "k",    "l",    "m",    "n",    "o",    "ö",    "p",    "r",    "s",    "ş",    "t",    "u",    "ü",    "v",    "y",    "z",    "q",    "w",    "x",    "A",    "B",    "C",    "Ç",    "D",    "E",    "F",    "G",    "Ğ",    "H",    "I",    "I",    "J",    "K",    "L",    "M",    "N",    "O",    "Ö",    "P",    "R",    "Ş",    "T",    "U",    "Ü",    "V",    "Y",    "Z",    "Q",    "W",    "X",    0,    1,    2,    3,    4,    5,    6,    7,    8,     9,       "!",    "'",    "^",    "+",    "%",    "&",    "/",    "(",    ")",    "=",    "?",    "-", "_",    "*",    ",",    ";",    "`","{",    "}",    "[",    "]",    "@",    "|",    "<",    ">",    ".",    ":",    "é",    "$","#","£","€", "₺"]

// let uzunluk=Number(prompt('Şifre uzunluğu giriniz'))
// let sifren=[]


// for(let i=0; i<uzunluk; i++){
//     let random=Math.floor(Math.random()* sifrekarakter.length);
//     sifren.push(sifrekarakter[random]);
//     sifrekarakter.splice(random,1);
    
// }

// alert(sifren.join(''))






// HEX KOD OLUŞTURMA

// let karakterler = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function hexKod() {

//   let renk = [];

//   for (let i = 0; i < 6; i++) {

//     let rastgeleKarakter = karakterler[Math.floor(Math.random() * karakterler.length)];

//     renk.push(rastgeleKarakter);
//   }
  
//   return '#' + renk.join('');
// }

// console.log(hexKod());






