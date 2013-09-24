'use strict';

angular.module('dmpApp')
    .factory('DataConfigPreviewResource', ['$resource', '$window', function($resource, $window) {

        var baseUrl = ($window && $window['dmp']) ? $window['dmp']['jsRoutes']['api'] : ''
            , endpoint = 'resources/:resourceId/configurationPreview';

        return $resource(baseUrl + endpoint);

    }]);