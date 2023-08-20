import { useEffect, useState } from 'react';
import { Container } from './styles';

import { TbChevronDown } from 'react-icons/tb';

export function DropDown({ label, setDishCategory }) {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [classDropDown, setClassDropDown] = useState('');
    const [category, setCategory] = useState("Refeição");


    function handleDropDownClick() {

        setDropDownOpen(prevent => !prevent);
        dropDownOpen ? setClassDropDown('dropdown-close') : setClassDropDown('dropdown-open');
    };

    useEffect(() => {
        setDishCategory(category);
    }, [category]);

    return (
        <Container
            
        >
            <label htmlFor="">{label}</label>

            <div className="wrapper">
                <button
                    onClick={handleDropDownClick}
                >
                    <span>{category}</span>
                    <span><TbChevronDown /></span>
                </button>

                <ul
                    className={classDropDown}
                >
                    <li><button
                        onClick={
                            (e) => {
                                setCategory(e.target.textContent);
                                handleDropDownClick();
                            }
                        }
                    >Refeição</button></li>

                    <li><button
                        onClick={
                            (e) => {
                                setCategory(e.target.textContent);
                                handleDropDownClick();
                            }
                        }
                    >Sobremesa</button></li>

                    <li><button
                        onClick={
                            (e) => {
                                setCategory(e.target.textContent);
                                handleDropDownClick();
                            }
                        }
                    >Bebidas</button></li>
                </ul>
            </div>
        </Container>
    )
}