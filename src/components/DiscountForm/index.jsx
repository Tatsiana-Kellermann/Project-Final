import React from 'react';
import { useForm } from "react-hook-form";
import s from './style.module.css'
import gnome from './gnome.png'
import { fetchGetDiscount } from '../../services/discountRequest';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const DiscountForm = () => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

    const onSubmit = data => {
        fetchGetDiscount({ phoneNumber: data.phone })
            .then(res => {
                if (!res.clientRegistered) {
                    toast.success(`Successful! We've sent you code on your phone`, { autoClose: 3500 })
                } else {
                    toast.error("This phone number has already been used!", { autoClose: 3500 })
                }
            })
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ phone: '' });
        }
    }, [isSubmitSuccessful, reset])

    const changeClass = () => {
        return errors.phone?.type === 'pattern' ? `${s.input_tel} ${s.reject}` : s.input_tel
    }

    return (
        <div className={s.form}>
            <div className={s.disc_item}>
                <img className={s.gnome} src={gnome} alt="gnome" />
                <div className={s.disc_form_box}>
                    <p className={s.disc_info}>
                        <span > 5% off </span> <br />
                        on the first order
                    </p>
                    <form className={s.disc_form} onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className={changeClass()}
                            type='tel'
                            {...register("phone",
                                { required: true, pattern: /^([+]?\d{1,3}[-\s])\d{2,4}[-\s]\d{7,10}$/ }
                            )}
                            placeholder='+49 999 9999999'
                        />
                        {
                            errors.phone?.type === 'required' &&
                            <p className={s.required}>
                                This field is required, please type your phone number
                            </p>
                        }
                        <input className={s.submit_btn} type="submit" value="Get a discount" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DiscountForm;