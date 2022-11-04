import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../components/Header";
import { Mainpage } from "../../components/Mainpage";
import { Button } from "../../components/Button";
import { TState } from "../../redux/store";
import { ACTIONS } from "../../redux/constants";
import { decrement, increment, setToNumber } from "../../redux/actions/counter";

export const Main = () => {
    //const value = useSelector((state: TState) => state.counteReduser.value);
    // const dispatch = useDispatch();
    // const items = new Array(10).fill(0).map((_item, index) => index); 

    // const handleIncrement = () => {
    //     dispatch(increment());
    // }
    // const handleDecrement = () => {
    //     dispatch(decrement());
    // }
    // const handleSetToNumber = (num: number) => {
    //     dispatch(setToNumber(num))
    // }
    return (
        <>
        <Header />
            {/* <p>{value}</p>
            <Button text='+' onClick={handleIncrement} type='primary' />
            <Button text='+' onClick={handleDecrement} type='primary' /> */}
            {/* {items.map((item) =>{
                const clickButton = () => {
                    handleSetToNumber(item)
                }
            
            return (
                <Button key={item}
                type="primary"
                onClick={clickButton}
                text={item + ''}/>
            )})} */}
            
        <Mainpage/>
        </>
    );    
};