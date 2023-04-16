# ui-react-honeycomb
It is a simple honeycomb UI library for react, developed and maintained by https://shyamsundar.dev

[![Build Status](https://travis-ci.org/mkay581/carousel-js.svg?branch=master)](https://travis-ci.org/mkay581/carousel-js)
[![npm version](https://badge.fury.io/js/carousel-js.svg)](https://badge.fury.io/js/carousel-js)

# Carousel

A lightweight and flexible honeycomb UI design that allows you to build fully functional, advanced honeycomb design with minimal javascript and markup.
This library is built using native react javascript (for performance) and adheres to latest ECMAScript specs.
Supports IE10+, all major browsers and even mobile.

## Inspiration

This is a module that I built originally to solve many of the headaches and complexities around building flexible
and scalable honeycomb design.

This library has been used and adopted on many projects, including:

* [truzlyindia.com](http://www.truzlyindia.com)


## Installation

You can install as an npm package if using a build system like [Browserify](http://browserify.org/). 

```
npm install <name/> --save-dev
```

## Usage

### Carousel

You can create a carousel based off of a set of predetermined markup. Assuming you have the appropriate elements
already in the DOM and have your CSS set up correctly to show and hide the styles. You can setup Carousel
and navigate to panels programmatically.

```javascript
var carousel = new Carousel({
    panels: document.getElementsByClassName('carousel-panel')
});

carousel.goTo(1); // go to second carousel panel
```

