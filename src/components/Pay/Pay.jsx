import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import 'yup-phone';
import { contactFormErrors } from '../../utils/utilData';
import './Pay.css';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export const Pay = ({ ...props }) => {
    const { search } = useLocation();
    const query = queryString.parse(search);

    console.log(query);

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        secondName: yup.string().required(),
        email: yup.string().required().email(),
        phone: yup.string().required().phone(),
    });

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const genTinkoffData = (data) => {
        return {
            TerminalKey: '1617024976590',
            Amount: props.amount * 100,
            OrderId: `${(Math.random() * 100000000000).toFixed(0)}`,
            Description: props.desc,
            SuccessURL: 'https://psyschool.com.ru',
            Receipt: {
                Email: data.email,
                Phone: data.phone,
                Name: `${data.firstName} ${data.secondName}`,
                Taxation: 'osn',
                Items: [
                    {
                        Name: props.title,
                        Price: props.amount * 100,
                        Quantity: 1.0,
                        Amount: props.amount * 100,
                        PaymentMethod: 'full_prepayment',
                        PaymentObject: 'service',
                        Tax: 'none',
                    },
                ],
            },
        };
    };

    const submitHandler = (data) => {
        console.log(data);

        const appLink = 'https://securepay.tinkoff.ru/v2/Init';

        axios
            .post(appLink, genTinkoffData(data))
            .then((response) => {
                console.log(response);
                reset(); // PaymentURL
                NotificationManager.success('???????????? ???? ???????????????? ?????? ?? ???????? ?????? ????????????', '??????????!');

                if (response.data.PaymentURL) {
                    window.location.href = response.data.PaymentURL;
                }
            })
            .catch((error) => {
                console.log(error);
                // eslint-disable-next-line max-len
                NotificationManager.error(
                    '???????????????? ????????????, ???????????????????? ?????????? ?????? ?????????????????? ?? ???????? ???? ??????????????: +7 995 895 21 67',
                    '????????????!',
                    5000,
                );
            });
    };

    const getErrorText = (errorType) => {
        switch (errorType) {
            case 'required':
                return contactFormErrors.empty;
            case 'matches':
                return contactFormErrors.notCorrect;
            case 'email':
                return contactFormErrors.notCorrect;
            case 'phone':
                return contactFormErrors.notCorrect;
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(submitHandler)} className={'Pay ' + props.className}>
                <input
                    name="firstName"
                    ref={register}
                    placeholder={'??????'}
                    className={errors.firstName ? 'input Input-error' : 'input'}
                    value={query.firstName ? query.firstName : ''}
                />
                {errors.firstName && <span>{getErrorText(errors.firstName.type)}</span>}
                <input
                    name="secondName"
                    ref={register}
                    placeholder={'??????????????'}
                    className={errors.secondName ? 'input Input-error' : 'input'}
                    value={query.secondName ? query.secondName : ''}
                />
                {errors.secondName && <span>{getErrorText(errors.secondName.type)}</span>}
                <input
                    name="email"
                    ref={register({ required: true })}
                    placeholder={'Email'}
                    className={errors.email ? 'input Input-error' : 'input'}
                    value={query.email ? query.email : ''}
                />
                {errors.email && <span>{getErrorText(errors.email.type)}</span>}
                <input
                    name="phone"
                    ref={register}
                    placeholder={'??????????????'}
                    className={errors.phone ? 'input Input-error' : 'input'}
                    value={query.phone ? `+${query.phone}` : ''}
                />

                <div className={'Info'}>
                    <div>
                        <span className={'Label'}>??????????????????: </span>
                        <span>{props.amount} ????????????</span>
                    </div>
                    <div>
                        <span className={'Label'}>????????????????: </span>
                        <span>{props.desc}</span>
                    </div>
                </div>
                <input value={'?????????????? ?? ????????????'} type="submit" className={'Form-btn'} />
            </form>
        </>
    );
};
