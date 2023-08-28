import { useEffect, useState } from 'react';
import { Container } from './styles';

import { TbChevronDown } from 'react-icons/tb';
import { IoEllipse } from "react-icons/io5";

export function DropDown({ label, setStatus, useCategories, currentCategory}) {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [classDropDown, setClassDropDown] = useState("");
    const [categories, setCategories] = useState(useCategories);
    
    const [category, setCategory] = useState({});

    function handleDropDownClick() {

        setDropDownOpen(prevent => !prevent);
        dropDownOpen ? setClassDropDown('dropdown-close') : setClassDropDown('dropdown-open');
    };

    useEffect(() => {
        setStatus(category.title);
    }, [category]);

    useEffect(() => {
        if (currentCategory){ 
            setCategory({ title: currentCategory});
        };
        
    }, [currentCategory]);

    return (
        <Container
            
        >
            <label htmlFor="">{label}</label>

            <div className="wrapper">
                <button
                    onClick={handleDropDownClick}
                >
                    <span>  { category.color ?  <div><IoEllipse className={category.color} />{category.title} </div> : category.title } </span>
                    <span><TbChevronDown className='arrow'/></span>
                </button>

                <ul
                    className={classDropDown}
                >
                    <li><button
                        onClick={
                            (e) => {
                                setCategory(e.target.children.length == 1 ? {color: "red", title: e.target.textContent} : {title: e.target.textContent});
                                handleDropDownClick();
                            }
                        }
                    >
                        {
                            categories[0].color ? <div> <IoEllipse className={categories[0].color} /> {categories[0].title} </div> : categories[0].title 
                        }
                    </button></li>

                    <li><button
                        onClick={
                            (e) => {
                                setCategory(e.target.children.length == 1 ? {color: "yellow", title: e.target.textContent} : {title: e.target.textContent});
                                handleDropDownClick();
                            }
                        }
                    >
                        {
                            categories[1].color ? <div><IoEllipse className={categories[1].color}/> {categories[1].title}</div> : categories[1].title
                        }
                    </button></li>

                    <li><button
                        onClick={
                            (e) => {
                                setCategory(e.target.children.length == 1 ? {color: "green", title: e.target.textContent} : {title: e.target.textContent});
                                handleDropDownClick();
                            }
                        }
                    >   
                    {
                        categories[2].color ? <div><IoEllipse className={categories[2].color}/> {categories[2].title}</div> : categories[2].title
                    }
                    </button></li>
                </ul>
            </div>
        </Container>
    )
};