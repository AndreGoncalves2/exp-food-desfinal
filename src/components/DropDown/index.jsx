import { useState } from 'react';
import { Container } from './styles';

import { TbChevronDown } from 'react-icons/tb';

export function DropDown({ title, label }) {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [classDropDown, setClassDropDown] = useState('');


    function handleDropDownClick() {
        setDropDownOpen(prevent => !prevent);
        dropDownOpen ? setClassDropDown('dropdown-close') : setClassDropDown('dropdown-open')
    }

    return (
        <Container>
            <label htmlFor="">{label}</label>

            <div className="wrapper">
                <button
                    onClick={handleDropDownClick}
                >
                    <span>{title}</span>
                    <span><TbChevronDown /></span>
                </button>

                <ul
                    className={classDropDown}
                >
                    <li><button>Refeição</button></li>
                    <li><button>Sobremesa</button></li>
                    <li><button>Bebidas</button></li>
                </ul>
            </div>
        </Container>
    )
}