function colorTagCtrl (ModalService) {
	var self = this;
	self.displayModal = function () {
		dialogUtils.showModal(ModalService);
	}
}

angular
	.module('color-tag',[])
	.component('colorTag',{
		templateUrl : '../html/components/colorTag.html',
		controller : colorTagCtrl,
		controllerAs : 'colorTagCtrl'
	})