import 'components/Header/style.css'

const Header = () => {
    return (
        <div className='container'>
            <div className='container py-8 flex justify-between items-center'>
                <h1 className='text-5xl text-black font-extrabold'>
                    Привет, Аня
                </h1>
                <div className='w-14 h-14 bg-stone-300 rounded-full'></div>
            </div>
            <div className='grid grid-cols-2 gap-10 border-t-4 border-stone-300'>
                <p className='font-bold text-4xl text-center pt-3'>Расходы</p>
                <p className='font-bold text-4xl text-center pt-3'>Доходы</p>
                
            </div>
        </div>
    )
}

export default Header