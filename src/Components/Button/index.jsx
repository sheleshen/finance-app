import 'components/Button/style.css'

function Button(props) {
    const { title } = props

    return (
        <button className="bg-button rounded-full font-bold text-white px-7 py-3 hover:bg-button-hover cursor-pointer">
            {title}
        </button>
    )
}

export default Button