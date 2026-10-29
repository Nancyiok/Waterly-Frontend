import {useFormContext} from "react-hook-form";
import type {ReactNode} from "react";
import classNames from "classnames";

type Props = {
    id?: string;
    header?: string;
    onSubmit: (data: any) => void | Promise<void>;
    children: ReactNode;
    className?: string;

};

export function Form({id, header, onSubmit, children = null, className}: Props) {
    const {handleSubmit} = useFormContext();
    return (
        <div>
            {header ? <h1>{header}</h1> : null}
            <form id={id} onSubmit={handleSubmit(onSubmit)} className={classNames(className)}>
                {children}
            </form>
        </div>
    );
}
