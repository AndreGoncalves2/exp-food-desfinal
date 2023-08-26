import { useEffect, useState } from 'react';
import { Container } from './styles';

import { TbChevronDown } from 'react-icons/tb';

export function DropDown({ label, setStatus, useCategories}) {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [classDropDown, setClassDropDown] = useState('');
    const [categories, setCategories] = useState(useCategories)
    const [category, setCategory] = useState(categories[0]);


    function handleDropDownClick() {

        setDropDownOpen(prevent => !prevent);
        dropDownOpen ? setClassDropDown('dropdown-close') : setClassDropDown('dropdown-open');
    };

    useEffect(() => {
        // setStatus("peido");
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
                    >{categories[0]}</button></li>

                    <li><button
                        onClick={
                            (e) => {
                                setCategory(e.target.textContent);
                                handleDropDownClick();
                            }
                        }
                    >{categories[1]}</button></li>

                    <li><button
                        onClick={
                            (e) => {
                                setCategory(e.target.textContent);
                                handleDropDownClick();
                            }
                        }
                    >{categories[2]}</button></li>
                </ul>
            </div>
        </Container>
    )
}