type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    type?: string;
}

export default function Input ({label, error, ...rest}: InputProps) {

    return (
        <div>
            {label && <label>{label}</label>}
            <input {...rest}/>
            {error && <span>{error}</span>}
        </div>
    )
}