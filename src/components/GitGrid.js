import React, {} from 'react'
import { useFecthGifs } from '../hooks/useFetchGifts'
//import React, {useState, useEffect} from 'react'
//import { getGits } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GitGrid = ( {category }) => {

    // const [images, setImages] = useState([]);
    // Utilizar un custom hook, que son no mas que funciones
    const { data:images, loading} = useFecthGifs(category);
     
    // useEffect(() => {
    //     getGits(category).then(imgs => setImages(imgs))
    // },[category])   

    // getGits();

    return (
        <>
        <h3 className="animate__animated animate__bounce">{ category }</h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        {/* <div className="card-grid"> 
       

                {
                    images.map ( img => (
                        <GifGridItem 
                        key={ img.id}
                        {...img} />
                    ))
                }
        </div> */}
        <div className="card-grid">       

       {
           images.map ( img => (
               <GifGridItem 
               key={ img.id}
               {...img} />
           ))
       }
        </div>

        </>
    )

}
