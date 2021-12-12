let refresh = document.querySelector('#refresh');
let submit1 = document.querySelector('#submit1');

let bg1 = document.querySelector('#bg1');
let bg2 = document.querySelector('#bg2');
let bg3 = document.querySelector('#bg3');
let bg4 = document.querySelector('#bg4');
let bg5 = document.querySelector('#bg5');
let bg6 = document.querySelector('#bg6');
let bg7 = document.querySelector('#bg7');
let bg8 = document.querySelector('#bg8');
let bg9 = document.querySelector('#bg9');

let edgarbod = document.querySelector('#edgarbod');

let cloth1 = document.querySelector('#cloth1');
let cloth2 = document.querySelector('#cloth2');
let cloth3 = document.querySelector('#cloth3');
let cloth4 = document.querySelector('#cloth4');
let cloth5 = document.querySelector('#cloth5');
let cloth6 = document.querySelector('#cloth6');
let cloth7 = document.querySelector('#cloth7');
let cloth8 = document.querySelector('#cloth8');
let cloth9 = document.querySelector('#cloth9');

let mouth1 = document.querySelector('#mouth1');
let mouth2 = document.querySelector('#mouth2');
let mouth3 = document.querySelector('#mouth3');
let mouth4 = document.querySelector('#mouth4');
let mouth5 = document.querySelector('#mouth5');
let mouth6 = document.querySelector('#mouth6');
let mouth7 = document.querySelector('#mouth7');
let mouth8 = document.querySelector('#mouth8');
let mouth9 = document.querySelector('#mouth9');

let eye1 = document.querySelector('#eye1');
let eye2 = document.querySelector('#eye2');
let eye3 = document.querySelector('#eye3');
let eye4 = document.querySelector('#eye4');
let eye5 = document.querySelector('#eye5');
let eye6 = document.querySelector('#eye6');
let eye7 = document.querySelector('#eye7');
let eye8 = document.querySelector('#eye8');
let eye9 = document.querySelector('#eye9');

let hair1 = document.querySelector('#hair1');
let hair2 = document.querySelector('#hair2');
let hair3 = document.querySelector('#hair3');
let hair4 = document.querySelector('#hair4');
let hair5 = document.querySelector('#hair5');
let hair6 = document.querySelector('#hair6');
let hair7 = document.querySelector('#hair7');
let hair8 = document.querySelector('#hair8');
let hair9 = document.querySelector('#hair9');

bg1.style.display = 'none';
bg2.style.display = 'none';
bg3.style.display = 'none';
bg4.style.display = 'none';
bg5.style.display = 'none';
bg6.style.display = 'none';
bg7.style.display = 'none';
bg8.style.display = 'none';
bg9.style.display = 'none';

cloth1.style.display = 'none';
cloth2.style.display = 'none';
cloth3.style.display = 'none';
cloth4.style.display = 'none';
cloth5.style.display = 'none';
cloth6.style.display = 'none';
cloth7.style.display = 'none';
cloth8.style.display = 'none';
cloth9.style.display = 'none';

mouth1.style.display = 'none';
mouth2.style.display = 'none';
mouth3.style.display = 'none';
mouth4.style.display = 'none';
mouth5.style.display = 'none';
mouth6.style.display = 'none';
mouth7.style.display = 'none';
mouth8.style.display = 'none';
mouth9.style.display = 'none';

eye1.style.display = 'none';
eye2.style.display = 'none';
eye3.style.display = 'none';
eye4.style.display = 'none';
eye5.style.display = 'none';
eye6.style.display = 'none';
eye7.style.display = 'none';
eye8.style.display = 'none';
eye9.style.display = 'none';

hair1.style.display = 'none';
hair2.style.display = 'none';
hair3.style.display = 'none';
hair4.style.display = 'none';
hair5.style.display = 'none';
hair6.style.display = 'none';
hair7.style.display = 'none';
hair8.style.display = 'none';
hair9.style.display = 'none';

let backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];
let clothes = [cloth1, cloth2, cloth3, cloth4, cloth5, cloth6, cloth7, cloth8, cloth9];
let mouths = [mouth1, mouth2, mouth3, mouth4, mouth5, mouth6, mouth7, mouth8, mouth9];
let eyes = [eye1, eye2, eye3, eye4, eye5, eye6, eye7, eye8, eye9];
let hairs = [hair1, hair2, hair3, hair4, hair5, hair6, hair7, hair8, hair9];

let bg = Math.floor(Math.random() * 9);
let cl = Math.floor(Math.random() * 9);
let mo = Math.floor(Math.random() * 9);
let ey = Math.floor(Math.random() * 9);
let ha = Math.floor(Math.random() * 9);

document.getElementById('edgarid').innerHTML += bg;
document.getElementById('edgarid').innerHTML += cl;
document.getElementById('edgarid').innerHTML += mo;
document.getElementById('edgarid').innerHTML += ey;
document.getElementById('edgarid').innerHTML += ha;

backgrounds[bg].style.display = 'initial';
clothes[cl].style.display = 'initial';
mouths[mo].style.display = 'initial';
eyes[ey].style.display = 'initial';
hairs[ha].style.display = 'initial';

refresh.onclick = () => {
	window.location.reload();
}

submit1.onclick = () => {
	window.location.reload();
}

function findEdgar(){
	let key = document.getElementByID("edid").value;
	document.getElementById('dumbp').innerHTML += document.getElementByID("edid").value;
	/*let keyss = [];
	if(key.length === 5){
		for(i=0; i<5; i++) {
			keyss[i] = key.substr(i, 1);
		}
		let keybg = keyss[0];
		let keycl = keyss[1];
		let keymo = keyss[2];
		let keyey = keyss[3];
		let keyha = keyss[4];
		
		bg1.style.display = 'none';
bg2.style.display = 'none';
bg3.style.display = 'none';
bg4.style.display = 'none';
bg5.style.display = 'none';
bg6.style.display = 'none';
bg7.style.display = 'none';
bg8.style.display = 'none';
bg9.style.display = 'none';

cloth1.style.display = 'none';
cloth2.style.display = 'none';
cloth3.style.display = 'none';
cloth4.style.display = 'none';
cloth5.style.display = 'none';
cloth6.style.display = 'none';
cloth7.style.display = 'none';
cloth8.style.display = 'none';
cloth9.style.display = 'none';

mouth1.style.display = 'none';
mouth2.style.display = 'none';
mouth3.style.display = 'none';
mouth4.style.display = 'none';
mouth5.style.display = 'none';
mouth6.style.display = 'none';
mouth7.style.display = 'none';
mouth8.style.display = 'none';
mouth9.style.display = 'none';

eye1.style.display = 'none';
eye2.style.display = 'none';
eye3.style.display = 'none';
eye4.style.display = 'none';
eye5.style.display = 'none';
eye6.style.display = 'none';
eye7.style.display = 'none';
eye8.style.display = 'none';
eye9.style.display = 'none';

hair1.style.display = 'none';
hair2.style.display = 'none';
hair3.style.display = 'none';
hair4.style.display = 'none';
hair5.style.display = 'none';
hair6.style.display = 'none';
hair7.style.display = 'none';
hair8.style.display = 'none';
hair9.style.display = 'none';
		
		backgrounds[keybg].style.display = 'initial';
clothes[keycl].style.display = 'initial';
mouths[keymo].style.display = 'initial';
eyes[keyey].style.display = 'initial';
hairs[keyha].style.display = 'initial';
	}*/
}