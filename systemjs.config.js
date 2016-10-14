/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'chroma-js':                      'npm:chroma-js/chroma.js',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      '@progress/kendo-angular-buttons': 'npm:@progress/kendo-angular-buttons',
      '@progress/kendo-angular-popup': 'npm:@progress/kendo-angular-popup',
      '@progress/kendo-popup-common': 'npm:@progress/kendo-popup-common',
      "@progress/kendo-angular-charts": "npm:@progress/kendo-angular-charts",
      "@progress/kendo-angular-grid": "npm:@progress/kendo-angular-grid",
      "@progress/kendo-angular-intl": "npm:@progress/kendo-angular-intl",
      "@progress/kendo-charts": "npm:@progress/kendo-charts",
      "@progress/kendo-drawing": "npm:@progress/kendo-drawing",
      "@telerik/kendo-draggable": "npm:@telerik/kendo-draggable",
      "@telerik/kendo-intl": "npm:@telerik/kendo-intl",
      "@telerik/kendo-theme-default": "npm:@telerik/kendo-theme-default"
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'chroma-js': {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'npm:@progress/kendo-angular-buttons': {
        main: './dist/npm/js/main.js',
        defaultExtension: 'js'
      },
      'npm:@progress/kendo-angular-popup': {
        main: './dist/npm/js/main.js',
        defaultExtension: 'js'
      },
      'npm:@progress/kendo-popup-common': {
        main: './dist/npm/js/main.js',
        defaultExtension: 'js'
      },
      "npm:@progress/kendo-angular-charts": {
        "defaultExtension": "js",
        "main": "./dist/npm/js/main.js"
      },
      "npm:@progress/kendo-angular-grid": {
        "defaultExtension": "js",
        "main": "./dist/npm/js/main.js"
      },
      "npm:@progress/kendo-angular-intl": {
        "defaultExtension": "js",
        "main": "./dist/npm/js/main.js"
      },
      "npm:@progress/kendo-charts": {
        "defaultExtension": "js",
        "main": "./dist/npm/js/main.js"
      },
      "npm:@progress/kendo-drawing": {
        "defaultExtension": "js",
        "main": "./dist/npm/js/main.js"
      },
      "npm:@telerik/kendo-draggable": {
        "defaultExtension": "js",
        "main": "./dist/npm/js/main.js"
      },
      "npm:@telerik/kendo-intl": {
        "defaultExtension": "js",
        "main": "./dist/npm/js/main.js"
      }
    }
  });
})(this);
