type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    text: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export default function Button ({type, text, onClick, className}: ButtonProps) {

    return (
        <div className="flex justify-center">
                <button className={className} type={type} onClick={onClick}>{text}</button>
        </div>
    )
}