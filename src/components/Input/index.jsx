import { Container } from "./styles";

export function Input({ type, placeholder, label, icon, onChange, ...rest }) {
    return (
        <Container>
            {   label &&
                <label>
                    {label}
                </label>
            }
            <div className="input-box">
                {icon}
                <input
                    {...rest}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>

        </Container>
    );
};