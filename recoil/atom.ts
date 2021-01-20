import { atom } from 'recoil'

export const statusMenubar = atom({
    key: 'statusState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});