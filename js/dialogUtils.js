(function() {
	function colorToString(color) {
		var retArray = [color.r, color.g, color.b, color.a];
		return 'rgba(' + retArray.join(',') + ")";
	}
	window.dialogUtils = {
		showModal : function (ModalService) {
			const ColorTemps = [
				[
					{ name : 'red-dark', color: {r:150, g:0, b:0, a:1} },
					{ name : 'orange-dark', color: {r:150, g:50, b:0, a:1}},
					{ name : 'yellow-dark', color: {r:150, g:150, b:0, a:1}},
					{ name : 'green-dark', color: {r:0, g:150, b:0, a:1} },
					{ name : 'cyan-dark', color: {r:0, g:150, b:150, a:1}},
					{ name : 'blue-dark', color: {r:0, g:0, b:150, a:1}},
					{ name : 'violet-dark', color: {r:50, g:0, b:150, a:1}},
					{ name : 'pink-dark', color: {r:150, g:0, b:50, a:1}},
				],[
					{ name : 'red-lighter', color: {r:200, g:0, b:0, a:1} },
					{ name : 'orange-lighter', color: {r:200, g:100, b:0, a:1}},
					{ name : 'yellow-lighter', color: {r:200, g:200, b:0, a:1}},
					{ name : 'green-lighter', color: {r:0, g:200, b:0, a:1} },
					{ name : 'cyan-lighter', color: {r:0, g:200, b:200, a:1}},
					{ name : 'blue-lighter', color: {r:0, g:0, b:200, a:1}},
					{ name : 'violet-lighter', color: {r:100, g:0, b:200, a:1}},
					{ name : 'pink-lighter', color: {r:200, g:0, b:100, a:1}},
				],[
					{ name : 'red-true', color: {r:255, g:0, b:0, a:1} },
					{ name : 'orange-true', color: {r:255, g:155, b:0, a:1}},
					{ name : 'yellow-true', color: {r:255, g:255, b:0, a:1}},
					{ name : 'green-true', color: {r:0, g:255, b:0, a:1} },
					{ name : 'cyan-true', color: {r:0, g:255, b:255, a:1}},
					{ name : 'blue-true', color: {r:0, g:0, b:255, a:1}},
					{ name : 'violet-true', color: {r:155, g:0, b:255, a:1}},
					{ name : 'pink-true', color: {r:255, g:0, b:155, a:1}},
				],[
					{ name : 'red-lighter', color: {r:255, g:50, b:50, a:1} },
					{ name : 'orange-lighter', color: {r:255, g:155, b:50, a:1}},
					{ name : 'yellow-lighter', color: {r:255, g:255, b:50, a:1}},
					{ name : 'green-lighter', color: {r:50, g:255, b:50, a:1} },
					{ name : 'cyan-lighter', color: {r:50, g:255, b:255, a:1}},
					{ name : 'blue-lighter', color: {r:50, g:50, b:255, a:1}},
					{ name : 'violet-lighter', color: {r:155, g:50, b:255, a:1}},
					{ name : 'pink-lighter', color: {r:255, g:50, b:155, a:1}},
				],[
					{ name : 'red-lighter', color: {r:255, g:100, b:100, a:1} },
					{ name : 'orange-lighter', color: {r:255, g:155, b:100, a:1}},
					{ name : 'yellow-lighter', color: {r:255, g:255, b:100, a:1}},
					{ name : 'green-lighter', color: {r:100, g:255, b:100, a:1} },
					{ name : 'cyan-lighter', color: {r:100, g:255, b:255, a:1}},
					{ name : 'blue-lighter', color: {r:100, g:100, b:255, a:1}},
					{ name : 'violet-lighter', color: {r:155, g:100, b:255, a:1}},
					{ name : 'pink-lighter', color: {r:255, g:100, b:155, a:1}},
				],[
					{ name : 'red-light', color: {r:255, g:150, b:150, a:1} },
					{ name : 'orange-light', color: {r:255, g:155, b:150, a:1}},
					{ name : 'yellow-light', color: {r:255, g:255, b:150, a:1}},
					{ name : 'green-light', color: {r:150, g:255, b:150, a:1} },
					{ name : 'cyan-light', color: {r:155, g:255, b:255, a:1}},
					{ name : 'blue-light', color: {r:150, g:150, b:255, a:1}},
					{ name : 'violet-light', color: {r:155, g:150, b:255, a:1}},
					{ name : 'pink-light', color: {r:255, g:150, b:155, a:1}},
				],[
					{ name : 'black', color: {r:0, g:0, b:0, a:1} },
					{ name : 'black-gray', color: {r:37, g:37, b:37, a:1} },
					{ name : 'gray-dark', color: {r:74, g:74, b:74, a:1}},
					{ name : 'gray', color: {r:111, g:111, b:111, a:1}},
					{ name : 'gray-light', color: {r:148, g:148, b:148, a:1}},
					{ name : 'white-gray', color: {r:187, g:187, b:187, a:1}},
					{ name : 'white', color: {r:220, g:220, b:220, a:1}},
					{ name : 'white', color: {r:255, g:255, b:255, a:1}},
				],
			];
			var colorCustoms = [
				{color : {r: 255, g: 255, b: 254,a: 1},id : 1},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 2},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 3},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 4},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 5},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 6},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 7},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 8},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 9},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 10},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 11},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 12},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 13},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 14},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 15},
				{color : {r: 255, g: 255, b: 254,a: 1},id : 16},
			];

			let modalCtrl = null;
			let timeoutFunc = null;
			function Controller($scope, close, $timeout,$window) {
				let self = this;
				modalCtrl = this;
				timeoutFunc = $timeout;
				self.currentColor = {r: 255, g: 255, b: 255, a: 1};
				self.close = function(ret) {
					self.saveColorCustom();
					close(ret);
				};
				self.updateColor = function() {
					var colorString = colorToString(self.currentColor);
					$('#cp').colorpicker('setValue', colorString);
				};
				self.CpSelector = ColorTemps;
				self.toString = function (color) {
					return colorToString(color);
				};
				self.CpCustoms = null;
				self.currentFocus = 0;
				self.BoxBorder = function (id) {
					if(self.currentFocus === id){
						return '3px solid black';
					}else{
						return 'none';
					}
				};
				self.handleFocus = function (col) {
					self.currentFocus = col.id;
				};
				self.addToCustom = function () {
					if(self.currentFocus > 0){
						self.CpCustoms[self.CpCustoms.map(function (e){ return e.id;}).indexOf(self.currentFocus)].color = self.currentColor;
					}else{
						console.log('please choose one box');
					}
				};
				self.loadColorCustom = function () {
					let colorString = $window.localStorage.getItem('colorCustoms');
					if(colorString){
						return JSON.parse(colorString);
					}else{
						return colorCustoms;
					}
				};
				self.saveColorCustom = function () {
					let colorString = JSON.stringify(self.CpCustoms);
					$window.localStorage.setItem('colorCustoms', colorString);
				};
			};
			ModalService.showModal({
				templateUrl : '../html/components/colorModal.html',
				controller : Controller,
				controllerAs : '$ctrl'
			}).then(function(modal){
				modalCtrl.CpCustoms = modalCtrl.loadColorCustom();
				modal.element.modal();
				const cpOptions = {
					customClass : 'cp-custom',
					format: 'rgba',
					container: '#cp-container',
					inline: true,
					color: colorToString(modalCtrl.currentColor),
					sliders : {
						saturation: {
		                    maxLeft: 200,
		                    maxTop: 200
		                },
		                hue: {
		                    maxTop: 200
		                },
		                alpha: {
		                    maxTop: 200
		                }
					}
				}
				$('#cp').colorpicker(cpOptions).on('changeColor', function(event) {
					console.log(modalCtrl.currentColor);
					timeoutFunc(function() {modalCtrl.currentColor = event.color.toRGB();});
				});
				modal.element.on('hidden.bs.modal', function () {
            		modalCtrl.close('outside');
        		});
				modal.close.then(function(ret) {
					console.log("Close invoke", ret);
					$('.modal-backdrop').remove();
					$('body').removeClass('modal-open');
				});
			})
		}
	}
})();