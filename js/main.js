function doNothing(){
	return false;
}


var vm = new Vue({
  el: '#app',
  data: {
    count: 1,
    lastName: 'Bar',
    getTotal: 120,
    price: 120
  },
  methods: {
	total: function(c){
		console.log(c)
		if (c == "add") {
			vm.count++
			vm.getTotal = vm.count * 120;
			console.log(vm.getTotal);
		}else if (c == "sub"){
			if (vm.count === 0){
			// do nothing
			}else{
			vm.count--
			vm.getTotal = vm.count * 120;
			console.log(vm.getTotal);
			}
		}
		/*var total = 0;

		this.services.forEach(function(s){
			if (s.active){
				total+= s.price;
			}
		});

	   return total;*/
	}
  }
})