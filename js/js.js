//Очень странная сказка. Но задание весёлое.

const textCrt = [
	"Жили-были {var1} да {var2} ",
	"Была у них {var3}",
	"Снесла {var3} {var4}, не простое - золотое",
	"- {var1} бил, бил - не разбил",
	"- {var2} била, била - не разбила",
	"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
	"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
	"{speech}"
	];

function showText (item, index) {
	 // for(let i = 0; i < 8; i++) {
		console.log (index);
		return `${item} \n`;
	 //}
	
}


function getVar1 (){
	const var1 = $(".var1").val();
	return var1;
}

function getVar2 (){
	const var2 = $(".var2").val();
	return var2;
}
function getVar3 (){
	const var3 = $(".var3").val();
	return var3;
}
function getVar4 (){
	const var4 = $(".var4").val();
	return var4;
}
function getVar5 (){
	const var5 = $(".var5").val();
	return var5;
}
function getVar6 (){
	const var6 = $(".var6").val();
	return var6;
}
function getVar7 (){
	const var7 = $(".var7").val();
	return var7;
}
function getSpeech (){
	const speech = $(".speech").val();
	return speech;
}

function showNew () {
	return `Жили-были ${getVar1()} да ${getVar2()},
	Была у них ${getVar3()},
	Снесла ${getVar3()} ${getVar4()}, не простое - золотое,
	- ${getVar1()} бил, бил - не разбил,
	- ${getVar2()} била, била - не разбила,
	${getVar5()} бежала, ${getVar6()} задела, ${getVar4()} упало и разбилось.
	${getVar1()} плачет, ${getVar2()} плачет, а ${getVar3()} кудахчет:
	${getSpeech()}`;
}


//CREATE BTN

jQuery(document).ready(function() {
$(".create-text").click(function() {
	
	$(".result-text").html(showText(textCrt));
});
	
});

//REPLACE
jQuery(document).ready(function() {

	$(".replace-text").click(function() {
	console.log("replacedoing");
	$(".result-text").html(showNew());
	
});
	
});

