import React, { useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

export const GitExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     //setCategories(...categories, 'HunterXHunter');
    //     setCategories(cats => [...cats, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
           <ol>
              {
                //  categories.map( category => {
                //      return <li key={category}> {category}</li>
                //  }) 
                categories.map( category => 
                    <GitGrid 
                        key = {category}
                        category = {category} />
                )
              }
           </ol>
        </>
    )
}
