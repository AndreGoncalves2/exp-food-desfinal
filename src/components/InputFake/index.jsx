import { Container, Wrapper } from "./styles";


import { Tag } from "../Tag";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function InputFake({ title, setIngredients, dish_id }) {

    const [NewTag, setNewTag] = useState([]);
    const [TagName, setTagName] = useState("");

   

    function newTag() {
        setNewTag(prevent => [...prevent, TagName]);
        setTagName("");
    };

    function deleteTag(title) {
        const tagFiltered = NewTag.filter(tag => tag != title);
        setNewTag(tagFiltered);
    };

    useEffect(() =>{
        setIngredients(NewTag);
    },[newTag]);

    useEffect(() => {
        async function loadingIngredients() {
            const { data } = await api.get(`/ingredients/${dish_id}`);
            let oldIngredient= [];
            data.forEach((ingredient) => {
                oldIngredient.push(ingredient.name)
            })
            setNewTag(oldIngredient);
        };
        loadingIngredients()
    },[])

    return (
        <Container>
            <h4>{title}</h4>

            <Wrapper>
                { NewTag &&
                    NewTag.map((title, index) => (
                        <Tag
                            key={index}
                            title={title} 
                            onClick={() => deleteTag(title)} 
                        />
                    ))
                }

                <Tag 
                    isNew
                    value={TagName}
                    onChange={(e) => setTagName(e.target.value)}
                    onClick={newTag}
                />
                
            </Wrapper>
        </Container>
    );
};
