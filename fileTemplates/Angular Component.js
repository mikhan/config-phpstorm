(function () {
	"use strict";

	angular.module("${Module}")
		.component("${Component}", {
			templateUrl: "template.html",
			controller: Controller
		});

	Controller.${DS}inject = [];
	function Controller() {
		var ${DS}ctrl = this;

		${DS}ctrl.${DS}onInit = ${DS}onInit;

		function ${DS}onInit() {
		}
	}
})();