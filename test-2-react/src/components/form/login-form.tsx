import { useFormik } from "formik";
import { useTimer } from "../../hooks/timer-hook";
import { Route } from "react-router";
import { boolean, object, string } from "yup";
import { FormInput } from "../form-input/form-input";
import { FormCheckbox } from "../form-box/form-box";

const LoginSchema = object().shape({
    email: string().email().required("Email is required"),
    acceptedTerms: boolean().required().oneOf([true]),
});

interface FormType {
    onSubmit: (values: any) => void;
}

export function LoginForm({ onSubmit }: FormType) {
    const formik = useFormik({
        initialValues: {
            email: sessionStorage.getItem('email') || '',
            acceptedTerms: false,
        },
        onSubmit: onSubmit,
        validationSchema: LoginSchema,
        validateOnMount: true,
    })
    const {time, startTimer, endTimer} = useTimer({ 
        step: 100,
        startTime: 500, 
        onEnd: formik.handleSubmit,
    })
    return (
        <Route>
            <FormInput 
                value={formik.values.email} 
                onChange={(value) => {
                    formik.setFieldValue('email', value)
                    sessionStorage.setItem('email', value)
                }} 
            />
            <div className="p-1"></div>
            <FormCheckbox
                checked={formik.values.acceptedTerms} 
                onChange={(value) => {
                    formik.setFieldValue('acceptedTerms', value)
                }} 
            />
            <button 
                onMouseDown={startTimer}
                onClick={endTimer}
                disabled={!formik.isValid} 
                className="btn btn-primary mt-auto"
            >
                Hold to proceed ({time} ms)
            </button>
        </Route>
    )
}