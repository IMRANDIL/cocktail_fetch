import get from './getElement.js';


const laoding = get('.loading');


export const showLoading = () =>{
    laoding.classList.remove('hide-loading');
}



export const hideLoading = () =>{
    laoding.classList.add('hide-loading');
}