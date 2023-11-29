import 'components/Expenses/style.css'
// import ExpensesForm from 'components/ExpensesForm'

const Expenses = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className='bg-expenses mt-16 rounded-t-60'>
            <div className='max-w-7xl m-auto'>
                <div className='flex justify-between'>
                    <div className='flex gap-5 items-center'>
                        <p className=" text-gray-500 font-bold text-lg">{currentDate}</p>
                        <p className="text-3xl font-bold">Категория</p>
                    </div>
                    <p className="text-3xl">- 2 000 ₽</p>
                </div>
            </div>    
        </div>
    )
}

export default Expenses