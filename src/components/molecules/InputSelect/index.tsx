import React from 'react';

type Props = {
    categories: Categories[],
}

interface Categories {
    name: string,
}

export default function InputSelect({categories}:Props) {
    return(
        <div>
            <select name="Categorias" id="categorias">
                {categories.map(category => (
                    <option value={category.name}>{category.name}</option>
                ))}
            </select>
        </div>

    );
}