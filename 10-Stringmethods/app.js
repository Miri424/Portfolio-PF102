// // let name = "Miri"
// // // 1 - Bu kod string elementinin uzunlugunu tapmaga yarayir.
// // let result = name.length;
// // console.log(result, "result");
        
// // //***********************************************************************



// // let sentence = `Salam Olsun Sene JS`;
// // // 2 - Bu metod stringin indexindeki bir elementi verir.
// // let index = sentence.charAt(4);
// // console.log(index);




// // //***********************************************************************

// // //***********************************************************************



// // let test = "Something" 
// // let testname = test[1]
// // console.log(testname);
// // // bu bize stringin [] icinde qeyd olunmus indexin ozunu verir.



// // let test2 = "Something" 
// // let result2 = test2.slice(2);
// // console.log(result2);

// // // slice metodu () icinde qeyd olunan indeksden evvelki yada sonraki hisseni diger hisselerden extract edir.


// // let next = "Something"
// // let result3 = next.substring(1,4)
// // console.log(result3);

// // // substring metodu () icinde QEYD OLUNAN 1-ci indeksden QEYD OLUNAN 2-ci indekse qeder olan elementleri qaytarir.


// // let next2 = "Something" 
// // let result4 = next2.substr(2)
// // console.log(result4);

// // // substr() göstərilən mövqedəki simvoldan başlayaraq sətir hissələrini çıxarır və müəyyən edilmiş simvol sayını qaytarır.
// // // slice () extract olunan hisseleri yeni setirde qaytarir.
// // // Əgər indexin baslangici indexin sonundan böyükdürsə bele yəni sətir hələ də qaytarılır. Yeni slice ile benzerlik 
// // // olsada menfi musbet indexlerde ferqlenir.



// // let next3 ="Something"
// // let result5 = next3.toUpperCase();
// // console.log(result5);

// // // stringin tum herflerini caspLk a cevirir. qisaca her herfi boyudur.


// // let next4 ="Something"
// // let result6 = next4.toLowerCase();
// // console.log(result6);

// // //stringin tum herflerini lowerCase e cevirir. qisaca tum herfler kicik ile yazilir.

// // let next5 = "Something"
// // let next6 = " Interesting"
// // let result7 = next5.concat("", next6);
// // console.log(result7);

// // // iki ve ya daha cox stringi birlesdirib tek setire yazdirir.




// // let next8 = "Something      "
// // let result9 = next8.trimEnd();
// // console.log(result9);


// // // herfden sonra ki whitespace i remove edir


// // let next9 = "     Something      "
// // let result10 = next9.trim();
// // console.log(result10);


// // // herfden sonra ki whitespace i remove edir

// // let text = "125";
// // let padded = text.padStart(4,"0");
// // console.log(padded);


// // // padStart yazinin evveline () icinde qeyd olunan index sayi qeder IKINCI "" icinde qeyd olunan reqem elave edir



// // let text1 = "6";
// // let padded2 = text1.padEnd(4,"0");
// // console.log(padded2);



// // // padEnd yazinin sonuna () icinde qeyd olunan index sayi qeder IKINCI "" icinde qeyd olunan reqem elave edir




// // // no description

// // // replaceAll

// // //no description


// // let ifTrue = "Salam dhuh wiqohd uwiqggw dgl"
// // let result12 = ifTrue.startsWith("Salam"); 
// // console.log(result12);


// // // startWitdh() metodu stringin icinde ki baslangic elementini axtarir ve tapirsa console.log true ya donur.

// // let ifTrue1 = "Salam dhuh wiqohd uwiqggw dgl"
// // let result13 = ifTrue1.endsWith("dgl"); 
// // console.log(result13);


// // // startWitdh() metodu stringin icinde ki sonuncu elementini axtarir ve tapirsa console.log true ya donur.


// // let ifTrue2 = "Salam dhuh wiqohd uwiqggw dgl"
// // let result14 = ifTrue1.includes("dhuh"); 
// // console.log(result14);
// // // includes() stringin butun elementlerini axtarir ve () icine daxil olan elementi tapdiqda console.log true ya donur.


// // let text4 = "lorem ipsum dolor sit amet"
// // let result15 = text4.lastIndexOf("amet")
// // console.log(result15);

// // //stringin son indexinin sayisini verir


// // let text5 = "daym sn bastard lroem eoidfh s"
// // let result16 = text5.indexOf("bastard");
// // console.log(result16);

// // stringin icinden () qeyd olunan elementi axtarir ve index baslangicini verir.




// function nameFunc (name) {
//     let result = name.length;
//     return result
// }
// console.log(nameFunc("FDJBFGIYFDWLHBK"));

// //******************************************************


// function Ifstarts (someLetter, string) {
//         if (string.includes(someLetter)) {
//          console.log( string.indexOf(someLetter));
//         }

//  }

//  Ifstarts("a", "tasdbjeu")



// // //***************************************************


// function findingUniCode (uniCode, string) {
//     if (string.charCodeAt(uniCode)) {
//         console.log(string.charCodeAt(uniCode))
//     }
// }
// findingUniCode("", "y")


// //******************************************************

// function topUpperCase (string) {
//     console.log(string.toUpperCase());
// }
// topUpperCase("dfsh 8 t")

// //******************************************************

// function toplowerCase (string) {
//     console.log(string.toLowerCase());
// }
// toplowerCase("FKJJDLWEG YUC");

// //******************************************************


// function whiteSpaceRemove (string) {
//     console.log(string.trim());
// }
// whiteSpaceRemove("      SALAM       ")


// //******************************************************

// // let text3 = "Salam Pasha"
// // let result11 = text3.replace("Pasha" , "Abu");
// // console.log(result11);

// function replacing (string, replaceWord, changedWord) {
//     console.log(string.replace(replaceWord, changedWord));
// }
// replacing("HELLO QARDAAAS HELLO", "HELLO QARDAAAS HELLO", "SALAM" )


// //******************************************************


// function reverseString (string) {
//     console.log(string.split('').reverse().join(''));
// }

// reverseString("SALAAAAAAAAAAM HANSI YUVANIN QUSUSUZ?");


// //******************************************************



// function countLetterOrDigits (str) {
//     let countLetter = 0;
//     let countReqems = 0;
//     for(let i = 0; i < str.length; i++) {
//         let char =  str[i];

        // if((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) { 
            // countLetter++;
        // }
            // else if (char >= "0" && char <= "9") {
                // countReqems++;
            // }    
//     }
//     console.log(`${countLetter}`);
//     console.log(`${countReqems}`);
// }
// countLetterOrDigits("sl124asdfa23");




// function swapFirstAndLastWords(string) {
//     let words = string.split(' ');
//     if (words.length > 1) {
//         [words[0], words[words.length - 1]] = [words[words.length - 1], words[0]];
//     }
//     return words.join(' ');
// }

// console.log(swapFirstAndLastWords("menIm aDim qurBandir")); 

// // BUNU ANLAMADIMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM


