# angular-analytics

Dead-simple Google Analytics support for Angular.

Based on analytics.js by (https://github.com/MatsKarlsson)[Mats Karlsson].

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
