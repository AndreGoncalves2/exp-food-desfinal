import { Container, Wrapper } from "./styles";


import { Tag } from "../Tag";

import { useEffect, useState } from "react";

export function InputFake({ title, setIngredients }) {
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
    }, [NewTag]);

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
                    onChange={(e) => setTagName(e.target.value)}
                    onClick={newTag}
                />
                
            </Wrapper>
        </Container>
    );
};
