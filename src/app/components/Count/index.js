import { useSelector, useDispatch } from "react-redux"
import { increase, selectCount, decrease, setCount } from "../../redux/slices/countSlice"

function Count() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    return (
        <center>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increase())}>Increase</button>
            <button onClick={() => dispatch(decrease())}>Decrease</button>
            <input 
                type="number" 
                placeholder={count} 
                value={count} 
                onChange={e => dispatch(setCount(Number(e.target.value)))}
            />
        </center>
    )
}

export default Count