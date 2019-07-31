'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:footerSection.directive
 * @description
 * # footerSection.directive
 */
angular.module('spafelizApp')
  .directive('footerSection', footerSection);

function footerSection() {
  var directive = {
    // template: '<div><ng-transclude></ng-transclude></div>',
    templateUrl: './views/partial.footer.html',
    restrict: 'EAC',
    link: link
  };

  return directive;

  function link(scope, element, attrs) {
    scope.team = attrs.team;
    // element.text('this is the footerSection.directive directive');
  }
}
