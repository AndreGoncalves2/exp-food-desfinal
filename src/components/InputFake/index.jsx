import { Container, Wrapper } from "./styles";


import { Tag } from "../Tag";

import { useState } from "react";

export function InputFake({ title }) {
    const [NewTag, setNewTag] = useState([]);
    const [TagName, setTagName] = useState("");

    function newTag() {
        setNewTag(prevent => [...prevent, TagName]);
        setTagName("");
    };

    function deleteTag(title) {
        const tagFiltered = NewTag.filter(tag => tag != title);
        setNewTag(tagFiltered);
    }   ;

    return (
        <Container>
            <h4>{title}</h4>

            <Wrapper>
                { NewTag &&
                    NewTag.map(title => (
                        <Tag 
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
