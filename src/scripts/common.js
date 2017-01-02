// var a = "asdsadsad"
// console.log(a)
// module.exports = a
// let name = 'zhana';
// export default name;
var $ = require('./lib/jquery')
var common = {
	getList:function(){
		$.ajax({
			url:'./api/list',
			success:function(res){
				console.log(res)	
			}
		})
	}
}
module.exports = common