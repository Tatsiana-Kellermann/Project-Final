import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.css'
import { useForm } from "react-hook-form";
import { fetchBasketOrder } from '../../store/slices/basketSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const OrderForm = () => {
    const dispatch = useDispatch()
    const { products} = useSelector(state => state)
    const {data, status, error} = useSelector(state => state.basket)
    const { register, handleSubmit, formState:{errors, isSubmitSuccessful } } = useForm();

    const onSubmit = order => {
        order = data.map(el => {
            const price = products.data.find(({ id }) => id === el.id).price
            return { ...el, price }
        })
        dispatch(fetchBasketOrder(order))
    } 

    if ( isSubmitSuccessful && status === 'resolve') {
        toast.success('Order Successfuly Placed!', {
            autoClose: 2500,
        })
    } else if (status === 'rejected') {
        toast.error(error, {
            autoClose: 2500,
        })
    }
  
    const priceRender = () => {
        if (products.status === 'resolve') {
            return data.reduce((prev,item) => {
                const product = products.data.find(el => el.id === item.id)
                return prev + item.count * product.finalPrice
            },0).toFixed(2)
        } else {
            return 0
        }
    }    

    const changeClass = () => {
        return errors.phone?.type && data.length ? `${s.phone_number} ${s.reject}` : s.phone_number
    }
 
    return (
        <>
            {
                !data.length
                ?
                <Link to="/products/all" className={s.btn_shop}>
                    Shop Now
                </Link>
                :
                <form onSubmit={handleSubmit(onSubmit)} className={s.basket_form}>
                    <h3 className={s.title}>Order details</h3>
                    <div className={s.total_blok}>
                        <p className={s.total_text}>Total</p>
                        <p className={s.total_sum}>{priceRender()}$</p>
                    </div>
                    <div className={s.inputs}>
                        <input 
                            className={changeClass()} 
                            type="tel" 
                            name="phone" 
                            {...register("phone", 
                            { required: true, pattern: /^([+]?\d{1,3}[-\s])\d{2,4}[-\s]\d{7,10}$/}
                            )}
                            placeholder='+49 999 9999999'
                        />
                        <input className={s.order_btn} type="submit" value="Order"/>
                    </div>
                </form>
            } 
        </>

    );
};

export default OrderForm;