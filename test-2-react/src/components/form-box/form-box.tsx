interface FormCheckboxPropsType extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    onChange: (value: boolean) => void;
}

export function FormCheckbox({ checked, onChange }: FormCheckboxPropsType) {

    const _onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e.target.checked)
    }

    return (
        <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
                <input checked={checked} onChange={_onChange} type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">I agree</span>
            </label>
        </div>
    )
}