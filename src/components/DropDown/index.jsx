import { Container } from './styles';

import { TbChevronDown } from 'react-icons/tb';

export function DropDown({ title, label }) {
    return (
        <Container>
            <label htmlFor="">{label}</label>

            <div className="wrapper">
                <button>
                    <span>{title}</span>
                    <span><TbChevronDown /></span>
                </button>
            </div>
        </Container>
    )
}