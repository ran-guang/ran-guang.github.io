let myImage = document.querySelector('img');

myImage.onclick = function (){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/My test image.jpg'){
        myImage.setAttribute('src','images/firefox2.jpg')
    }else {
        myImage.setAttribute('src','images/My test image.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla 酷毙了,'+ myName;
}
if (!localStorage.getItem('name')){
    setUserName();
}else{
    storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了,'+ storedName;
}
myButton.onclick =function (){
    setUserName();
}
function setUserName(){
    let myName = prompt('请输入你的名字。');
    if (!myName){
        setUserName();
    }else {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Mozilla酷毙了,'+myName;
    }
}