export const addTags = (tags) => {
    let tags_storage = localStorage.getItem('tags');
    let arr_tag = [];
    let tags_arr = [];

    if( tags_storage !== null ) {
        tags_arr = tags_storage.split('|');
    }
     
    if( tags.length > 0 ) {
        tags.map(tag => {
            if( tag != '' ) {
                tags_arr.push(tag);
            }
        });
        arr_tag = new Set(tags_arr);
        arr_tag = Array.from(arr_tag);
        addStorage(arr_tag.join('|'));
    }
}

const addStorage = (tags) => {
    localStorage.setItem('tags', tags);

}
