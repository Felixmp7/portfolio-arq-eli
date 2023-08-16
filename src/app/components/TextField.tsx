import clsx from "clsx";
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    errorMessage?: string
}

export const TextField = forwardRef((props: IProps, ref: any) => {
    const { id, label, name, placeholder, type, errorMessage, ...rest } = props;
    const inputClasses = clsx({
        'shadow-sm appearance-none border rounded w-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent': true,
        'border-red-500': !!errorMessage
    });
    return (
        <>
            <label className="block font-bold mb-2 text-xs" htmlFor={id}>
                {label}
            </label>
            <input {...rest} ref={ref} className={inputClasses} id={id} type={type} name={name}placeholder={placeholder} />
            {!!errorMessage && (
                <span className="text-red-500 text-xs">{errorMessage}</span>
            )}
        </>
    );
});
