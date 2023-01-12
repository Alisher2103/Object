// No1 object keylarini toping
// let obj = {
//     id: 1,
//     name: "WebBrain"
// };
// console.log(Object.keys(obj));

// No2 object valuelarining raqamga tenglarini toping
// let obj = {
//     id: 1,
//     name: "WebBrain",
//     age : 25
// };

// for (let key in obj) {
//     typeof obj[key] == 'number' && console.log(key);
// }

// No3object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }

// for (let key in obj) {
//   typeof obj[key] == 'boolean' && console.log(key,obj[key]);
//     }

// No4 object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj={
//     id:1,
//     name:"ali",
//     offline:true,
//     online:true,
//     individual:false
// }
// var str = 'name';
// function Search(obj, str) {
//     for (key in obj) {
//         str == obj[key] && console.log(key,obj[key]);
//     }
// }
// Search(obj,'ali')

// No5 object va string berilgan,string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }
// var str = 'i'
// for (key in obj) {
//    if(typeof obj[key] == 'string' && obj[key].includes(str) ){
//         console.log(obj[key]);
//     }
// }

    
// No6 object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// let obj = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }
// let sum = 0;
// while (obj) {
//     sum += obj.age
//     obj = obj.child;
// }
// console.log(sum);
// chiqish
// 146

// No 7 talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar parol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name  xato chiqsin
// let obj = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// function Kirish(parol, name) {
    
//         if (obj.name == name && obj.parol == parol) {
//         console.log('Hush kelibsiz')
//         } else {
//             console.log('parol yoki name xato');
//        }
//     }

// Kirish( 101 , 'Umar')

