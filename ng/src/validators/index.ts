import * as yup from 'yup'


export const schemaUser = yup.object().shape({
    username: yup.string().min(3, 'Username required'),
    password: yup.string().required('Password required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/, '8 characters, 1 Uppercase and 1 number')
})


export const schemaNewTransaction = yup.object().shape({
    username: yup.string().required(),
    value: yup.number().required()
})