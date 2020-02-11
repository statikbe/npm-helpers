'use strict';

//  maintain alphabetical order please :)

export function isIterable(obj) {

    if (obj === null) return false;

    return typeof obj[Symbol.iterator] === 'function';
}

export function toArray(obj) {

    if (isIterable(obj)) {

        return [ ...obj ];
    }

    return [ obj ];
}

export function toggle(elements, display) {

    toArray(elements).forEach(element => {

        let _display = display;

        if (typeof _display === 'undefined') {

            _display = element.style.display === 'none';
        }
        
        element.style.display = display ? '' : 'none';
    });
}

export function trigger(elements, eventName) {

    toArray(elements).forEach(element => {

        element.dispatchEvent(new Event(eventName));
    });
}