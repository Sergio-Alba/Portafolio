const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,20}$/;
const surnameRegex = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const affairRegex = /^[a-zA-Z1-9]{8,20}$/;
const messageRegex = /^[a-zA-ZÀ-ÿ\s]{4,100}$/;


export const validateInput = ({ type, value }) => {
    let hasError = false;
    let error = '';
    const formatValue = value.trim();

    switch (type) {
        case 'name':
            if(formatValue === "") {
                hasError = true;
                error = 'Name is required';
            } else if(!nameRegex.test(formatValue)) {
                hasError = true;
                error = 'Name is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'surname':
            if(formatValue === "") {
                hasError = true;
                error = 'Surname is required';
            } else if(!surnameRegex.test(formatValue)) {
                hasError = true;
                error = 'Surname is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'email':
            if(formatValue === "") {
                hasError = true;
                error = 'Email is required';
            } else if(!emailRegex.test(formatValue)) {
                hasError = true;
                error = 'Email is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'affair':
            if(formatValue === "") {
                hasError = true;
                error = 'Phone is required';
            } else if(!affairRegex.test(formatValue)) {
                hasError = true;
                error = 'affair is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'message':
            if(formatValue === "") {
                hasError = true;
                error = 'Address is required';
            } else if(!messageRegex.test(formatValue)) {
                hasError = true;
                error = 'message is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        default: 
            hasError = false;
            error = '';
            break;
    }

    return { hasError, error }
}