import classNames from 'classnames';

function Button({text, variant = 'defualt'}) {
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center rounded": true,
            "bg-gray-300": variant === 'defualt',
            "bg-green-300": variant === 'success',
            "bg-red-300": variant === 'danger',
            "bg-yellow-300": variant === 'warning',
        })}>{text} {variant}</button>
    )
}

export default Button;