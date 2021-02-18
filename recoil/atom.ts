import { atom } from 'recoil'

export const statusMenubar = atom({
    key: 'statusState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const openCart = atom({
    key: 'openCart', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});