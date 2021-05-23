import {get, post } from './util'
const loginInfo = {
    userName: 'lyx',
    userId: "888",
    role: "manager"
}
export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);
export const test1 = p => get('products');
export const login = (cb) => cb(loginInfo)