# svelte-marquee-text

> [[CSS GPU Animation](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)] Marquee Text for Svelte

[![npm](https://img.shields.io/npm/v/svelte-marquee-text-widget.svg?style=for-the-badge)](https://www.npmjs.com/package/svelte-marquee-text-widget)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/borakilicoglu/svelte-marquee-text-widget/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/svelte-marquee-text-widget.svg?style=for-the-badge)](https://www.npmjs.com/package/svelte-marquee-text-widget)

## Demo

[https://borakilicoglu.github.io/svelte-marquee-text](https://borakilicoglu.github.io/svelte-marquee-text)

## Install

`npm install svelte-marquee-text-widget` or `yarn add svelte-marquee-text-widget`

## Usage

Import that in your App.svelte or similar file

```js
import MarqueeTextWidget from "svelte-marquee-text-widget";
```

On your page you can now use html like this:

```html
<!-- simple marquee text -->
<marquee-text-widget>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna.
</marquee-text-widget>

<!-- short text need more duplicates -->
<marquee-text-widget repeat="{10}">
  Short text =(
</marquee-text-widget>

<!-- slow duration -->
<marquee-text-widget duration="{30}">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna.
</marquee-text-widget>
```

## Props

| Prop     | Type    | Default | Description                                                                                                                                                                                                                                                                    |
| -------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| duration | Number  | 15      | Animation Duration                                                                                                                                                                                                                                                             |
| repeat   | Number  | 2       | Number of repeat the Slot (It's important for to short content)                                                                                                                                                                                                                |
| paused   | Boolean | false   | The property specifies whether the animation is running or paused &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
