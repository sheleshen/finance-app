import 'components/Expenses/style.css'
import ExpensesForm from 'components/ExpensesForm'

const Expenses = (/*props*/) => {
    // const { newExpense } = props;

    const currentDate = new Date().toLocaleDateString();

    return (
        <div className='bg-expenses mt-16 rounded-t-60'>
            <ExpensesForm />
            <div className='max-w-7xl m-auto pb-16'>
                <div className='flex justify-between'>
                    <div className='flex gap-5 items-center'>
                        <p className=" text-gray-500 font-semibold text-base">{currentDate}</p>
                        <p className="text-3xl font-bold">{/*newExpense.category*/}Категория</p>
                    </div>
                    <p className="text-3xl">- {/*newExpense.spending*/}2 999 ₽</p>
                </div>
            </div>    
        </div>
    )
}

export default Expenses