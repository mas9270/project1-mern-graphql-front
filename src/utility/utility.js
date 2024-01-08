
import { toast } from 'react-toastify';

export function toastifySuccess(massage, delay = null) {
    toast.success(massage, {
        position: "top-right",
        autoClose: delay === null ? 5000 : delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        className: "ToastifyStyle",
        rtl: true
    });
}

export function toastifyWarning(massage, delay = null) {
    toast.warn(massage, {
        position: "top-right",
        autoClose: delay === null ? 5000 : delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "ToastifyStyle",
        rtl: true
    });
}

export function toastifyError(massage, delay = null) {
    toast.error(massage, {
        position: "top-right",
        autoClose: delay === null ? 5000 : delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "ToastifyStyle",
        rtl: true
    });
}

export function checkResponse(param) {
    return (param !== null && param !== undefined)
}

export function LoadingButtonAction(on = false, elm = null, currentIcon) {

    let currentId = elm.current
    let LodingBtn = currentId.querySelector('.LoadingButton')

    if (on) {
        elm.current.disabled = true
        if (checkResponse(LodingBtn)) {
            LodingBtn.classList.remove(`${currentIcon}`)
            LodingBtn.classList.add(`fa-solid fa-spinner`)
            LodingBtn.setAttribute("spin")
        }
    }
    else {
        elm.current.disabled = false
        if (checkResponse(LodingBtn)) {
            LodingBtn.classList.remove("fa-solid fa-spinner")
            LodingBtn.removeAttribute("spin")
            LodingBtn.classList.add(`${currentIcon}`)
        }
    }
}

export function validateEmail(value) {
    let error;
    if (!value) {
        error = 'ایمیل را وارد کنید';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'ایمیل به درستی وارد نشده است';
    }
    return error;
}

export function validateUsername(value) {
    let error;
    if (!value) {
        error = 'نام کاربری را وارد کنید';
    }
    return error;
}

export function validatePassword(value) {
    let error;
    if (!value) {
        error = 'رمز عبور را وارد کنید';
    } else if (value.length < 10) {
        error = 'رمز عبور حداقل باید 10 کاراکتر باشد';
    }
    return error;
}

export function validateRepeatPassword(value, compareValue) {

    let error;
    if (!value) {
        error = 'تکرار رمز عبور را وارد کنید';
    } else if (value.length < 10) {
        error = 'تکرار رمز عبور حداقل باید 10 کاراکتر باشد';
    }
    else if (value !== compareValue.current.value) {
        error = 'رمز عبور و تکرار رمز عبور با هم برابر نیست';
    }
    return error;
}

export function dashboardValidatePassword(value) {
    let error;

    if (value !== "") {
        error = 'تکرار رمز عبور را وارد کنید';
    }
    else if (value.length < 10) {
        error = 'رمز عبور حداقل باید 10 کاراکتر باشد';
    }

    return error;
}

export function validationMobilePhone(value) {
    let error;

    let regex = /09([012349])\d{8}$/

    if (value !== "") {
        if (!regex.test(value)) {
            error = 'شمراه موبایل صحیح نیست';
        }
    }
    else {
        if (value === "") {
            error = 'وارد کردن شماره موبایل اجباری است';
        }
    }

    return error;
}

export function validateRecaptcha(value) {
    let error;

    if (value === "") {
        error = 'فرم را تایید کنید';
    }
    return error;
}

export function isNumber(elm) {
    let number = /\D/

    if (!number.test(elm.current.value)) {
        return true
    }
    else {
        return false
    }
}


