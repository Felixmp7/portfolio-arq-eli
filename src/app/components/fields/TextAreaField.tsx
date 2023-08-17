import clsx from "clsx";
import { DetailedHTMLProps, TextareaHTMLAttributes, forwardRef } from "react";

interface IProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    errorMessage?: string
}

export const TextAreaField = forwardRef((props: IProps, ref: any) => {
    const { id, name, placeholder, errorMessage, ...rest } = props;
    const inputClasses = clsx({
        'shadow-sm appearance-none border rounded w-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent resize-none h-full': true,
        'border-red-500': !!errorMessage
    });
    return (
        <>
            <textarea {...rest} ref={ref} className={inputClasses} id={id} name={name} placeholder={placeholder} />
            {!!errorMessage && (
                <span className="text-red-500 text-xs">{errorMessage}</span>
            )}
        </>
    );
});
