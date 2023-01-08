import React,{useState} from 'react'
import MoviesUsableNav from '../navbar/moviesUsableNav'
import '../collection/collection.css'
function Action()
{
    const [movies,setMovies] = useState([
        {
            title:"Wakanda forever",
            url:"https://assetscdn1.paytm.com/images/cinema/wakanda_1-b6bb5900-50fe-11ed-9b3e-edc965e39985.jpg",
            Text:"It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors"
        }
        ,
        {
            title:"City of gold",
            url:"https://qqcdnpictest.mxplay.com/pic/c7d1ca32774fb050286ef81dfab6653b/en/2x3/320x480/6da7688e8a6a1126af7c65e2ff4b4434_1280x1920.webp",
            Text:"It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors"
        }
        ,
        {
            title:"Johnny english",
            url:"https://media-cache.cinematerial.com/p/500x/3p93mvgs/johnny-english-reborn-spanish-movie-poster.jpg?v=1456709289",
            Text:"It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors"
        }
        ,
        {
            title: "Mortal engines",
            url: "https://qph.cf2.quoracdn.net/main-qimg-2eaaf9806fcd7a3ae94b7c0adadb18f7-lq",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=IRsFc2gguEg"
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

export default Action