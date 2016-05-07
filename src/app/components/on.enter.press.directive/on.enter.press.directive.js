(function () {
  'use strict';

  angular.
    module('preziPresentio.directives')
    .directive('onEnterPress', OnEnterPressDirective);

  function OnEnterPressDirective() {
    return {
      link: function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
          if (event.which === 13) {
            scope.$apply(function () {
              scope.$eval(attrs.onEnterPress);
            });

            event.preventDefault();
          }
        });
      }
    };
  }
})();
