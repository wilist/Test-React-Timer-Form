interface FormInputPropsType extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    onChange: (value: string) => void;
}

export function FormInput({ value, onChange }: FormInputPropsType) {

    const _onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e.target.value)
    }

    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">Email</span>
            </div>
            <input value={value} onChange={_onChange} type="text" placeholder="Type here" className="input" />
            {/* <div className="label">
                <span className="label-text-alt">Helper text</span>
            </div> */}
        </label>
    )
}