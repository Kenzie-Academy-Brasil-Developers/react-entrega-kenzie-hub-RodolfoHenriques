import { StyledInput } from "./styled"

export const Input = ({ type, id , placeholder,  label, register, error, disabled }) => {
    return(
        <StyledInput>
            {label ? <label htmlFor="">{label}</label> : null}
            <input type={type} id={id} placeholder={placeholder} {...register} disabled={disabled} />
            {error ? <p>{error.message}</p> : null}
        </StyledInput>
    )
}