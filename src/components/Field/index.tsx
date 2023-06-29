import './style.scss'
import { useField } from "formik"
import { TextField } from "@mui/material";


export default function Field(props: { id: string, label: string, name: string, type: string, erro?: string }) {
    const [inputProps, meta] = useField(props);
    const id = props.id

    return (
        <div className='groupField'>
            <label htmlFor={id} className={`labelStyle ${props.erro ? ' labelErro' : ''}`}>
                {props.label.split(/(?=[A-Z])/)[0]}{props.label.split(/(?=[A-Z])/)[1] ? ' ' + props.label.split(/(?=[A-Z])/)[1] : ''}:
            </label>
            <TextField
                className="inputStyle"
                type={props.type}
                error={props.erro ? true : false}
                id={id}
                color='primary'
                {...inputProps}
            />
            <span>{props.erro}</span>
        </div>
    )
}
