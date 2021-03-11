import { atom } from 'recoil'

export const StatusMenubar = atom({
    key: 'statusState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const OpenCart = atom({
    key: 'openCart', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const AddToCart = atom({
    key: 'addToCart', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});