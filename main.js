let allColorBtn=document.querySelectorAll('.btn');
let btnAll=document.getElementById('btn1');
let btn2=document.getElementById('btn2');
let btn3=document.getElementById('btn3');
let btn4=document.getElementById('btn4');
let btn6=document.getElementById('btn6');
let btn7=document.getElementById('btn7');

let section=document.querySelector('section')
// let cardbox=document.querySelector('.card')

let mainClass=document.querySelector('.main')
let wrapperClass=document.querySelector('.wrapper')
let inputFiledClass=document.querySelector('inputFiled')
let textArea=document.querySelector('textarea');
let subject=document.getElementById('subject');
let doneBtn=document.getElementById('done')

let wrapperBtn=document.querySelector('wrapperBtn')
let textareaColorRed=document.getElementById('textarea_color_red')
let textareaColorYellow=document.getElementById('textarea_color_yellow')
let textareaColorGreen=document.getElementById('textarea_color_green')
let textareaColorBlack=document.getElementById('textarea_color_black')
let crossButton=document.getElementById('crossBtn')
let changeColor=document.querySelector('.changeColors');

let taskAddedContainer=document.querySelector('.taskAddedContainer')
let taskAdded=document.querySelector('.taskAdded')
let headingTag=document.querySelector('h2')
let lockBtn=document.getElementById('lock')

let cardTitle=document.querySelector('.card-title')
let card=document.querySelector('.card')
let cardBody=document.querySelector('.card-body')
let cardBox=document.querySelector('.cardbox')

let iconsContainer=document.querySelector('.icons-container')
let secondPart=document.querySelector('.second-part')
let firstPart=document.querySelector('.first-part')
firstPart.style.display='none'

lockBtn.addEventListener('click',()=>{
    if(firstPart.style.display==='none'){
        firstPart.style.display='block'
    }else{
        firstPart.style.display='none'
    }
})

btn6.addEventListener('click',function(){
    if(mainClass.style.display==='none'){
        mainClass.style.display='block';
    }else{
        mainClass.style.display='none'
    }
})


 let addCard=()=>{
    // const titletext=document.getElementById('titletext');
    let cardbox=document.querySelector('.cardbox')
    textArea.addEventListener('click',()=>{
            if(cardbox.style.display==='none'){
                cardbox.style.display='block';
            }else{
                cardbox.style.display='none'
            }
        })

    // created element

    const newcard=document.createElement('div')
    newcard.className='card'
    
    // textareaColorYellow.addEventListener('click',()=>{
    //     newcard.style.backgroundColor='yellow'
    //    })
    //    textareaColorGreen.addEventListener('click',()=>{
    //     newcard.style.backgroundColor='green'
    //    })
    //    textareaColorBlack.addEventListener('click',()=>{
    //     .style.backgroundColor='black'
    //    })

    const changecolors =document.createElement('div')
    changecolors.className='changeColors';

    const newcardbody=document.createElement('div')
    newcardbody.className='card-body';

    const newh3=document.createElement('h3');
    newh3.className='card-title';
    newh3.innerText=textArea.value;

    // const colors=document.createElement('div')
    // colors.className=changeColor;

    // const newp=document.createElement('p')

    cardbox.appendChild(newcard)
    newcard.appendChild(changecolors)
    changecolors.appendChild(newcardbody);
    newcardbody.appendChild(newh3);
    
    // card.style.width='35ch';
    // card.style.backgroundColor='lightskyblue';
    // card.style.borderRadius='5px';
    // card.style.height='200px'

    
}

doneBtn.addEventListener('click',addCard);

// let task = input.value;
// if(task.length>0){
//     let task_element=document.createElement('div');
//     task_element.classList.add('first-part');
//     iconsContainer.append(task_element);
// }

// let editbutton=document.createElement('button');
// editbutton.classList.add('edit');
// editbutton.innerText="\u{270F}";

// task_element.append(editbutton);


// let deleteBtn=document.createElement('button');
// deleteBtn.classList.add('delete');
// deleteBtn.innerText="\u{2421}";

// task_element.append(deleteBtn)
// input.value=""

// editbutton.addEventListener('click',()=>{l
//     if(editbutton.innerText=="\u{270F}"){
//         editbutton.innerText="\u{270F}"
//         cardTitle.removeAttribute('readonly')
//     }else{
//         editbutton.innerText="\u{270F}"
//         cardTitle.removeAttribute("readonly",readonly)
//     }
// })

// deleteBtn.addEventListener("click",()=>{
//     card.removeChild(task_element)
// })




