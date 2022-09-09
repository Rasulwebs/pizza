"use strict";

//  ================ modal oyna funksiya ============================
let buyurtma = $(".buyurtma"),
    modalW = $(".modal_window"),
    body = $("body"),
    okbtn = $(".okk"),
    modalBodyColor = $(".modal_body_color");


buyurtma.addEventListener("click", () => {
    modalW.classList.add("modal_visibility");
    modalBodyColor.style.display = "block";
});
okbtn.addEventListener("click", () => {
    modalW.classList.remove("modal_visibility");
    modalBodyColor.style.display = "none";

});


//  non value
let selectt = $("#non_select"),
    katta1 = $(".katta1"),
    katta2 = $(".katta2"),
    katta3 = $(".katta3");
    



// select.addEventListener('change', () => {
//     let nonResult = $(".non_change");
//     // console.log(select.value);
//     nonResult.textContent = select.value;

// });

//  katta value

katta1.addEventListener('change', () => {
    let kattaResult = $(".katta_change");
    // console.log(select.value);
    kattaResult.textContent = katta1.value;

});

katta2.addEventListener('change', () => {
    let kattaResult = $(".katta_change");
    // console.log(select.value);
    kattaResult.textContent = katta2.value;

});
katta3.addEventListener('change', () => {
    let kattaResult = $(".katta_change");
    // console.log(select.value);
    kattaResult.textContent = katta3.value;

});


//  ustida value

let checkk1 = $(".l_check1"),
    check2 = $(".l_check2"),
    check3 = $(".l_check3"),
    check4 = $(".l_check4"),
    check5 = $(".l_check5"),
    check6 = $(".l_check6");

//  check1.addEventListener("change", () => {
//     let ustch1 = $(".ustida_change1")
//     ustch1.textContent = check1.value
// })


checkk1.addEventListener("click", () => {
    let ustch1 = $(".ustida_change1");
    if (ustch1.textContent == checkk1.value) {
        ustch1.textContent = ""
    } else {
        ustch1.textContent = checkk1.value;
    }


});

check2.addEventListener("click", () => {
    let ustch2 = $(".ustida_change2");
    if (ustch2.textContent == check2.value) {
        ustch2.textContent = ""
    } else {
        ustch2.textContent = check2.value;
    }


});

check3.addEventListener("click", () => {
    let ustch3 = $(".ustida_change3");
    if (ustch3.textContent == check3.value) {
        ustch3.textContent = ""
    } else {
        ustch3.textContent = check3.value;
    }


});
check4.addEventListener("click", () => {
    let ustch4 = $(".ustida_change4");
    if (ustch4.textContent == check4.value) {
        ustch4.textContent = ""
    } else {
        ustch4.textContent = check4.value;
    }


});
check5.addEventListener("click", () => {
    let ustch5 = $(".ustida_change5");
    if (ustch5.textContent == check5.value) {
        ustch5.textContent = ""
    } else {
        ustch5.textContent = check5.value;
    }


});
check6.addEventListener("click", () => {
    let ustch6 = $(".ustida_change6");
    if (ustch6.textContent == check6.value) {
        ustch6.textContent = ""
    } else {
        ustch6.textContent = check6.value;
    }


});

// qo'shimcha value
let bitter1 = $(".bitter"),
    bitter2 = $(".bitter2");

bitter1.addEventListener("click", () => {
    let more1 = $(".more_change1");
    if (more1.textContent == bitter1.value) {
        more1.textContent = ""
    } else {
        more1.textContent = bitter1.value;
    }


});

bitter2.addEventListener("click", () => {
    let more2 = $(".more_change2");
    if (more2.textContent == bitter2.value) {
        more2.textContent = ""
    } else {
        more2.textContent = bitter2.value;
    }


});

let mTitle=$(".modal_title");


// buyurtma.addEventListener("click", ()=>{
//   if(select.value =="yupqa"){
//     console.log("1");
//   }else{
   
//   }
// });

//  modal window success and error


if (katta1.value == "25cm") {
    mTitle.classList.add("modaltext");
    mTitle.textContent="Error";
  } else if (katta2.value == "30cm") {
    mTitle.classList.add("modaltext");
    mTitle.textContent="Error";
  } else if (katta3.value == "35cm") {
    mTitle.classList.add("modaltext");
    mTitle.textContent="Error";
  }

  katta1.addEventListener("click", () => {
    mTitle.classList.add("modaltext2");
    mTitle.textContent="Success";
  });
//   let formInput2 = $(".input2");
  katta2.addEventListener("click", () => {
    mTitle.classList.add("modaltext2");
    mTitle.textContent="Success";
  });
//   let formInput3 = $(".input3");

  katta3.addEventListener("click", () => {
    mTitle.classList.add("modaltext2");
    mTitle.textContent="Success";
  });
