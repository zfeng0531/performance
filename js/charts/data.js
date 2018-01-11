var rankData = [{
	name: '沙坪坝区',
	value: 123
}, {
	name: '江北区',
	value: 222
}, {
	name: '万州区',
	value: 34
}, {
	name: '铜梁区',
	value: 65
}, {
	name: '北碚区',
	value: 261
}, {
	name: '涪陵区',
	value: 12
}, {
	name: '巴南区',
	value: 77
}, {
	name: '忠县',
	value: 213
}, {
	name: '云阳县',
	value: 83
}];

var rankName = [];
var rankValue = [];
var sortData = [];
sortData = rankData.sort(function(a, b) {
	return a.value - b.value;
});
for(var i = 0; i < sortData.length; i++) {
	rankName.push(sortData[i].name);
	rankValue.push(sortData[i].value);
}
//console.dir(aaa)

var radarData = [{
	//					value: [14, 18, 22, 40, 31],
	//					name: '万州'
	//				}, {
	value: [49, 29, 40, 23, 19],
	name: '重庆'
}]

var barData = [65, 51, 56, 47, 58, 69]

//var lineData = ['40%', '55%','54%', '43%', '65%', '55%']
var lineData = [11, 22,33, 22, 33, 11]

var changeData = function changeData(cityName) {
	radarData = [{
		name: cityName,
		value: randamData(5,50)
	}];
	barData = randamData(6,80);
	lineData = randamData(6,70);
}

function randamData(num,max) {
	var result = [];
	for(var i = 0; i < num; i++) {
		result[i] = Math.floor(Math.random() * max)
	}
	return result;
}