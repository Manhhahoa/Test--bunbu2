import * as yup from "yup";
export type UserSubmitForm = {
    gmail: string,
    password: string,

}
export const schema = yup.object().shape({
    gmail: yup.string()
        .email('email is in valid')
        .required('gmail is required'),
    password: yup.string()
        .required('password is required')
        .min(4, 'password must be at least 4 characters')
        .max(8, 'password must be at least 8 characters'),
});