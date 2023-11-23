import 'components/Expenses/style.css'
import Button from 'components/Button'

const categories = ['Путешествия', 'Развлечения', 'Образование', 'Еда', 'Одежда', 'Ипотека', 'ЖКХ', 'Здоровье', 'Связь', 'Транспорт', 'Косметика']

const Expenses = () => {
     return (
        <div className='bg-expenses mt-16 rounded-t-60'>
            <div className='max-w-7xl m-auto'>
                <div className='flex gap-4 justify-center py-16'>
                    <input name="amount" type="number" placeholder='00,00' className='px-6 py-3 text-lg border border-solid rounded-full stroke-field text-slate-900 stroke-outline'/>
                    <select name="categories" className='px-6 py-3 text-lg border border-solid rounded-full stroke-field text-slate-900 stroke-outline'> 
                        {categories.map(category => <option key={category}>{category}</option>)}
                    </select>
                    <Button title='Добавить' />
                </div>
            </div>    
        </div>
     )
}

export default Expenses