import React, { useContext, useState } from 'react'
import img from '../images/movies.png'
import './movies_nav.css'
import {useNavigate} from 'react-router-dom'
import { Send } from '../collection/collection'

function MoviesUsableNav() {

const navigate = useNavigate()
const [search,setSearch] = useState('') 
const Search_1 = useContext(Send)

    return (
        <>
            <div>
                <ul className='movies-nav'>
                    <li><img src={img} height='50' width='50' /><span>Movies</span></li>
                    <li>
                        <input
                            type="text"
                            placeholder='Search..'
                            onChange={(e)=>{
                                setSearch(e.target.value)
                                Search_1(e.target.value)
                            }}
                        />
                    </li>
                    <li>
                        <ul className='icon'>
                            <li onClick={()=>navigate('/')}>All</li>
                            <li onClick={()=>navigate('/setting')}>Action</li>
                            <li onClick={()=>navigate('/profile')}>Adventure</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MoviesUsableNav