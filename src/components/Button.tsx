type ButtonProps = {

    text: string,
    onClick?: () => void
}

export default function Button ({text, onClick}: ButtonProps) {

    return (
        <div>
                <button onClick={onClick}>{text}</button>
        </div>
    )
}