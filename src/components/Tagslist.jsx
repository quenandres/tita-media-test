import { useEffect, useState } from "react"

export const Tagslist = ({setFilter}) => {
    const [tags, setTags] = useState([]);

    const getTags = () => {
        const tags = localStorage.getItem('tags');
        const tags_array = tags.split('|');
        setTags(tags_array);
    }

    useEffect(() => {
        getTags();
    }, []);
    
  return (
    <div>
        {
            tags.map((tag, index) => {
                return <button className="filter_button" key={index} onClick={() => setFilter(tag)}>{tag.toUpperCase()}</button>
            })
        }
    </div>
  )
}
