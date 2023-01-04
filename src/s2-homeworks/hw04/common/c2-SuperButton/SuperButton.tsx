import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const finalClassName = s.button + (disabled ? s.disabled : xType === 'red' ? s.red + (className === ' ' ? ' ' + className : '') : '') // задачка на смешивание классов
// const finalClassName = `${s.button} ${disabled ? className === 'disabled' : xType === 'red'} ? ${s.button}${xType === 'red' : 'default'}`
    // const finalClassName = `${s.button}${xType==='red' ? s.red : className === 'red' ? s.secondary : s.default} ${disabled ? s.disabled : ''}`
    // `${s.СТИЛЬ КНОПКИ}  ${xType==='КРАСНЫЙ' ? ДАВАЙ КРАСНЫЙ СТИЛЬ : xType === 'secondary' ? ДАВАЙ СЕКОНДАРИ СТИЛЬ: ДАВАЙ ПО ДЕФОЛТУ } ${disabled ? ДАВАЙ ДИЗАБЛЕТ СТИЛЬ :  ПУСТУЮ СТРОКУ} `
    const finalClassName = `${s.button} ${xType==='red' ? s.red : xType === 'secondary' ? s.secondary : s.default } ${disabled ? s.disabled : ''} `
    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
