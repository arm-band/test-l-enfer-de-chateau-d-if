const generateObj = (srcArray) => {
    let array = [];
    for (const [key, val] of srcArray.entries()) {
        array = array.concat(
            {
                value: `value-${key}`,
                label: val,
            }
        );
    }
    return array;
};
const getArraysDiff = (array1, array2) => {
    const array1LabelArray = array1.map((itm) => {
        return itm.label;
    });
    const array2LabelArray = array2.map((itm) => {
        return itm.label;
    });
    const arr1 = [...new Set(array1LabelArray)];
    const arr2 = [...new Set(array2LabelArray)];
    return [...arr1, ...arr2].filter((val) => {
        return !arr1.includes(val) || !arr2.includes(val);
    });
};

window.addEventListener('load', () => {
    const tagOrigins = [
        'Château d\'If',
        'Marseille',
        'France',
        'Le Comte de Monte-Cristo',
        'Alexandre Dumas',
        'Rhino',
        'prison',
        'François I',
        'Jean-Baptiste Kléber',
    ];
    const tagSelected = [
        'Château d\'If',
        'Le Comte de Monte-Cristo',
        'Alexandre Dumas',
    ];
    const tagSource = generateObj(tagOrigins);
    document.querySelector('#origin').value = JSON.stringify(tagSource, null , "\t");
    document.querySelector('#originLabel').value = JSON.stringify(tagOrigins, null , "\t");
    const tags = generateObj(tagSelected);
    document.querySelector('#selected').value = JSON.stringify(tags, null , "\t");
    document.querySelector('#selectedLabel').value = JSON.stringify(tagSelected, null , "\t");
    const ChateuDiff = getArraysDiff(tagSource, tags);
    const enferChateuDiff = tagSource.filter((item) => {
        return ChateuDiff.includes(item.label);
    });
    document.querySelector('#diff').value = JSON.stringify(enferChateuDiff, null , "\t");
    document.querySelector('#diffLabel').value = JSON.stringify(ChateuDiff, null , "\t");
});
