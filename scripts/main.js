
let divContent = document.querySelector('h2');
divContent.textContent = 'Hello world!';

let jsPTag = document.querySelector("#javascript-content");
jsPTag.textContent = "这是使用JS添加的内容";

jsPTag.onclick = function () {
	alert("Hello, 你点击了JS添加的内容.");
}


let themeImg = document.querySelector('img#theme_picture');
themeImg.onclick = function () {
	let imgSrc = themeImg.getAttribute('src');
	if (imgSrc == 'images/my_theme_bg.jpeg') {
		themeImg.setAttribute('src', 'images/view_picture_01.jpg');
	} else if (imgSrc == 'images/view_picture_01.jpg') {
		themeImg.setAttribute('src', 'images/view_picture_02.jpg');
	} else {
		themeImg.setAttribute('src', 'images/my_theme_bg.jpeg');
	}
}

let changeUser = document.querySelector('button#change-user');
let addPic = document.querySelector('button#add-user-info');

changeUser.onclick = function() {
	setUserName();
}

let divElement = document.querySelector('div');

addPic.onclick = function() {
	let img = document.createElement('img');
	img.setAttribute('src', 'images/my_theme_bg.jpeg');
	img.setAttribute('alt', "My theme picture");
	divElement.appendChild(img);
	console.log('add user info picture');
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  divContent.textContent = '欢迎你，' + storedName;
}

function setUserName() {
	let userName = prompt("请输入你的姓名");
	// if (!userName || userName == null) {
	// 	setUserName();
	// } else {
		localStorage.setItem('name', userName);
		divContent.textContent = "欢迎你，" + userName;
	// }
}