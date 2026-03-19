type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    text: string,
    onClick?: () => void
}

export default function Button ({type, text, onClick}: ButtonProps) {

    return (
        <div>
                <button type={type} onClick={onClick}>{text}</button>
        </div>
    )
}