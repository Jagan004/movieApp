import React,{useState} from 'react'
import MoviesUsableNav from '../navbar/moviesUsableNav'
import '../collection/collection.css'
function Adventure()
{
    const [movies,setMovies] = useState([
        {
            title:"Uncharted",
            url:"https://stat5.bollywoodhungama.in/wp-content/uploads/2022/02/Uncharted-English-306x393.jpg",
            Text:"It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors"
        }
        ,
        {
            title:"Jumanji",
            url:"https://media5.bollywoodhungama.in/wp-content/uploads/2019/12/Jumanji-The-Next-Level-English-306x393.jpg",
            Text:"It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors"
        }
        ,
        {
            title:"Black widow",
            url:"https://images.penguinrandomhouse.com/cover/9781787733527",
            Text:"It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors"
        }
        ,
        {
            title:"Avatar",
            url:"https://lumiere-a.akamaihd.net/v1/images/p_avatar_de27b20f.jpeg",
            Text:"It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors"
        }
    ])
    return(
        <>
        <MoviesUsableNav/>
        <div className='clr'>
        <div className='data container'>
        {
            movies.map((val)=>{
                return(
                    
                <div  className='card main'>
                    <div className='hide'>
                    <img
                        src={val.url}
                        className='card-img-top'
                        height="330px"
                    />
                    </div>
                    
                    <div className='card-body'>
                        <h4 className='card-title'>{val.title}</h4>
                        <p className='card-text'>{val.Text}</p>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-primary'>Play</button>
                    </div>
                </div>
                
                )
            })
        }
        </div>
        </div>
        </>
    )
}

export default Adventure