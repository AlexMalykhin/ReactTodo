import { useState } from 'react';

const ToDoForm = ({addTodo})=> {
    const [value, setValue] = useState('');

    const handleSubmit = e =>{
       e.preventDefault();
       if(!value) return;
       addTodo(value);
       setValue('');
    };
    return (
        <form onSubmit={handleSubmit}> 
            <input 
               type="text" 
               className='inputTask' 
               placeholder="I want to"
               value={value}
               onChange={e => setValue(e.target.value)}/>
        </form>
    );
}


export default ToDoForm;
