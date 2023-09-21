import { Container } from "./styles";
import { useEffect, useState } from "react";

import { TbChevronDown } from "react-icons/tb";
import { IoEllipse } from "react-icons/io5";
import { api } from "../../services/api";
import { useAlert } from "../../hooks/alertContext";

export function DropDown({ label, setStatus, useCategories, currentCategory, sale, className }) {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [classDropDown, setClassDropDown] = useState("");
    const [categories, setCategories] = useState(useCategories);
    
    const [category, setCategory] = useState({});

    const { handleAlertError } = useAlert();

    function handleDropDownClick(e) {
        e.preventDefault();

        setDropDownOpen(prevent => !prevent);
        dropDownOpen ? setClassDropDown("dropdown-close") : setClassDropDown("dropdown-open");
    };

    async function handleChangeCategory(statusName) {
        setDropDownOpen(prevent => !prevent);
        dropDownOpen ? setClassDropDown("dropdown-close") : setClassDropDown("dropdown-open");

        try {
            await api.put("/sale", { statusName, sale })
        } catch (error) {
            if (error.response.status == "401") {
                handleAlertError(error.response.data.message, "error");

                signOut();
                navigate("/");               
            } else if (error.response.data.message) {
                handleAlertError(error.response.data.message, "error");
            } else {
                handleAlertError(error.message, "error");	
            }
        };
    };

    function setColor(color, e) {
        setCategory(e.target.children.length == 1 ? {color: `${color}`, title: e.target.textContent} : {title: e.target.textContent});
        e.target.children.length == 1 ? handleChangeCategory(e.target.textContent) : handleDropDownClick(e);
    };


    useEffect(() => {
        setStatus(category.title);
    }, [category]);

    useEffect(() => {
        if (currentCategory == "Pendente") {
            setCategory({ title: ` Pendente`, color: "red"});
        
        } else if (currentCategory == "Preparando") {
                setCategory({ title: ` Preparando`, color: "yellow"})
    
        } else if (currentCategory == "Entregue") {
            setCategory({ title: ` Entregue`, color: "green"})
        } else {
            setCategory({ title: `${currentCategory}`});
        };
        
    }, [currentCategory]);

    return (
        <Container className={className} >
            <label htmlFor="">{label}</label>

            <div className="wrapper">
                <button
                    onClick={(e) => handleDropDownClick(e)}
                >
                    <span className="drop">  { category.color ?  <div><IoEllipse className={category.color} />{category.title} </div> : category.title } </span>
                    <span><TbChevronDown className="arrow"/></span>
                </button>

                <ul
                    className={classDropDown}
                >
                    <li><button
                        onClick={
                            (e) => {
                                e.preventDefault(e);
                                setColor("red", e)
                            }
                        }
                    >
                        {
                            categories[0].color ? <div><IoEllipse className={categories[0].color}/> {categories[0].title}</div> : categories[0].title 
                        }
                    </button></li>

                    <li><button
                        onClick={
                            (e) => {
                                e.preventDefault(e);
                                setColor("yellow", e)
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
                                e.preventDefault(e);
                                setColor("green", e)
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