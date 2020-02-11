'use strict';

//  maintain alphabetical order please :)

export function isIterable(object) {

    if (object === null) return false;

    return typeof object[Symbol.iterator] === 'function';
}

export function toArray(object) {

    if (isIterable(object)) {

        return [ ...object ];
    }

    return [ object ];
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