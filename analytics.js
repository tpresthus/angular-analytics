"use strict";
angular.module('angularAnalytics', []);

angular.module("angularAnalytics").factory("analytics", ['$window', '$location', '$rootScope', 'analyticsCode',
    function ($window, $location, $rootScope, analyticsCode) {

        var service = {};

        service.init = function () {
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date(); a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', analyticsCode, 'auto');
        };

        service.trackPageView = function () {
            ga('send', 'pageview');
        };

        service.trackEvent = function(category, action, label, value) {
            ga('send', 'event', category, action, label, value);
        };

        service.checkout = (function(transaction) {

            function init() {
                ga('require', 'ecommerce');
            }

            function addTransaction(transaction) {
                if(!transaction.id) {
                    throw "analytics.ecommerce: transaction.id is required";
                }

                ga('ecommerce:addTransaction', transaction);
            }

            function addItem(item) {
                if(!item.id) {
                    item.id = transaction.id;
                }
                if(!item.name) {
                    throw "analytics.ecommerce: item.name is required";
                }

                ga('ecommerce:addItem', item);
                return this;
            }

            function addItems(items) {
                for(var i=0; i<items.length; i++) {
                    addItem(items[i]);
                }
                return this;
            }

            function track() {
                ga('ecommerce:send');
            }

            init();
            addTransaction(transaction);

            return {
                item: addItem,
                items: addItems,
                track: track
            };
        });

        $rootScope.$on('$locationChangeSuccess', function () {
            ga('set', 'page', $location.path());
            service.trackPageView();
        });

        return service;
    }]);