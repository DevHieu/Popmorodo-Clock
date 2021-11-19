import {useState, useRef} from 'react'
import styles from './todo.module.css'


function Todo() {
    const storageJob = JSON.parse(localStorage.getItem('jobs'))
    const focusRef = useRef()
    
    const [list, setList] = useState('')
    const [job, setJob] = useState(storageJob ??  [])

    const handleAdd = (prev) => {
        setJob(prev =>{
            const newJob = [...prev, list]

            const jsonJob =JSON.stringify(newJob)
            localStorage.setItem('jobs', jsonJob)
            return newJob
        })
        setList('')
        focusRef.current.focus()
    }

    const handleDelete = (id) => {
        setJob(prev =>{
            const deleteJob = job.filter((item) => item !== job[id])

            const jsonDelete =JSON.stringify(deleteJob)
            localStorage.setItem('jobs', jsonDelete)
            return deleteJob
        })
    }

    const handleDeleteAll = () => {
        setJob(prev =>{
            const newJob = ([])

            const jsonJob =JSON.stringify(newJob)
            localStorage.setItem('jobs', jsonJob)
            return newJob
        })
    }

    return (
        <div className={styles.Todo}>
            <div className={styles.addTodo}>
                <input ref={focusRef} className={styles.addText} value={list} onChange={e => setList(e.target.value)} placeholder="Add your new todo" />
                <img className={styles.addIcon} src="/img/add-icon.png" alt="Add" onClick={handleAdd}/>
                
            </div>
            <ul>
                {job.map((job, index) => (
                    <div key={index} className={styles.wrapper}>
                        <div className={styles.listCheckbox}>
                            <input className={styles.toggle} type="checkbox" />
                            <label>{job}</label>  
                        </div>
                        <img className={styles.trashIcon} src="/img/trash-icon.png" alt="Add" onClick={() => handleDelete(index)}/>
                    </div>
                ))}
            </ul>
            <button className={styles.deleteAll} onClick={handleDeleteAll}>Delete All </button>
        </div>
        
    );
}

export default Todo;