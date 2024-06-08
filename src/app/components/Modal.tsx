"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import clsx from "clsx";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SlClose } from 'react-icons/sl';

type Props = PropsWithChildren & {
    modalClasses?: string,
    onClickOutside: VoidFunction
}

export default function Modal({ children, modalClasses = '', onClickOutside  }: Props) {
    const [mounted, setMounted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutside(modalRef, onClickOutside);

    useEffect(() => setMounted(true), []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return mounted ? createPortal(
        <div className="fixed inset-x-0 inset-y-0 z-10 grid text-sm bg-black backdrop-blur-sm bg-opacity-40 place-items-center">
            <div
                ref={modalRef}
                className={clsx({
                    "relative bg-white rounded-md p-6 max-h-[400px] md:max-h-[initial] overflow-hidden text-rose-taupe-700": true,
                    [modalClasses]: !!modalClasses
                })}
            >
                {children}
                <button className="absolute text-2xl md:text-xl top-3 right-3" onClick={onClickOutside}><SlClose /></button>
            </div>
        </div>,
        document.body
    ) : null;
}