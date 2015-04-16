# angular-analytics

Dead-simple Google Analytics support for Angular.

Based on analytics.js by [Mats Karlsson](https://github.com/MatsKarlsson).

## Usage

Add analytics.js to your page:

```html
<script type="text/javascript" src="analytics.js"></script>
```

Reference and configure angularAnalytics in your angular app:

```javascript
var app = angular.module("app", ["angularAnalytics"]);
app.run(function(analytics) {
    analytics.init();
})
  .value("analyticsCode", "UA-XXXXXX");
```

Replace *UA-XXXXXX* with your Google Analytics tracking code.

Analytics will automatically track location changes from ngRoute as pageviews.

### Tracking events

You can track custom events by injecting **analytics** in your module:

```javascript
app.controller("myController", function(analytics) {
  this.doSomething = function() {
    analytics.trackEvent("button", "click" "nav buttons", 4);
  };
});
```

See https://developers.google.com/analytics/devguides/collection/analyticsjs/events for more information on tracking events in Google Analytics.
