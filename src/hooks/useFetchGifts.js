import { useState, useEffect } from 'react'
import {getGits} from '../helpers/getGifs';

export const useFecthGifs = ( category ) => {

    const [state, setState] = useState({
        data:[],
        loading : true
    });

    useEffect(() => {
        getGits ( category)
         .then ( imgs => {
             setState({
                 data: imgs,
                 loading: false
             })
         })       
       
    }, [category])

    return state;
}