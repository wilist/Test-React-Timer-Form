import { useFormik } from "formik";
import { Route } from "react-router";
import { FormInput } from "../form-input/form-input";

interface HomeFormPropsType {
    onSubmit: (values: any) => void;
    onCancel: () => void;
}

export function HomeForm({ onSubmit, onCancel }: HomeFormPropsType) {
    const formik = useFormik({
        initialValues: {
            email: sessionStorage.getItem('email') || '',
        },
        onSubmit: onSubmit,
    })

    return (
        <Route>
            <FormInput value={formik.values.email} onChange={() => null} />
            <button onClick={onCancel} className="btn btn-primary mt-auto">Back</button>
            <button onClick={() => formik.handleSubmit()} className="btn btn-primary mt-auto">Confirm</button>
        </Route>
    )
}