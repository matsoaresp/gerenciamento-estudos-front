type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    text: string,
     onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button ({type, text, onClick}: ButtonProps) {

    return (
        <div>
                <button type={type} onClick={onClick}>{text}</button>
        </div>
    )
}