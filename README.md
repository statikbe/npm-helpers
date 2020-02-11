# @statikbe/helpers

## Installation

```
npm install @statikbe/helpers
yarn add @statikbe/helpers
```

## Usage

```
import { toArray } from '@statikbe/helpers';

toArray(document.querySelector('.my-class'));
```

## Methods

| method | description | returns |
| --- | --- | --- |
| `isIterable(obj)` | Checks if `obj` is iterable. | `Boolean` |
| `toArray(obj)` | Converts iterable object to array, if not iterable creates array containing `obj`. | `Array` |
| `toggle(elements [, display])` | Shows or hides target element(s). | - |
| `trigger(elements, eventName)` | Trigger an event on element(s). | - |