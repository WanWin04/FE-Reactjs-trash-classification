export const func = () => {
    const hiddenFunc = document.querySelector('.hidden-func');
    if(hiddenFunc.classList.contains('show')){
        hiddenFunc.classList.remove('show');
    }
}
export const LogAndReg = () => {
    const boxlog = document.querySelector('.login-box');
    boxlog.classList.toggle('active');
}
export const LogAnd4got = () => {
    const boxlog = document.querySelector('.login-box');
    boxlog.classList.toggle('active2');
}
export const GgAndEnterName = () => {
    const boxlog = document.querySelector('.login-box');
    boxlog.classList.toggle('active3');
}