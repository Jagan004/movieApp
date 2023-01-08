import React, { createContext, useRef, useState } from 'react'
import MoviesUsableNav from '../navbar/moviesUsableNav'
import './collection.css'

export const Send = createContext(null)

function Collection() {
    const [movies, setMovies] = useState([
        {
            title: "Avatar",
            url: "https://lumiere-a.akamaihd.net/v1/images/p_avatar_de27b20f.jpeg",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=d9MyW72ELq0"
        }
        ,
        {
            title: "Morbius",
            url: "https://static.toiimg.com/photo/msid-88103948/88103948.jpg",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=oZ6iiRrz1SY"
        }
        ,
        {
            title: "Uncharted",
            url: "https://stat5.bollywoodhungama.in/wp-content/uploads/2022/02/Uncharted-English-306x393.jpg",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=eHp3MbsCbMg"
        }
        ,
        {
            title: "Jumanji",
            url: "https://media5.bollywoodhungama.in/wp-content/uploads/2019/12/Jumanji-The-Next-Level-English-306x393.jpg",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=2QKg5SZ_35I"
        }
        ,
        {
            title: "Popeye",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6smfJwyVG4Yi1DjgJQ9Nfzurf__kraTJM6w&usqp=CAU",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=i4tNuM9XttM"
        }
        ,
        {
            title: "Black widow",
            url: "https://images.penguinrandomhouse.com/cover/9781787733527",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=ybji16u608U"
        }
        ,
        {
            title: "Wakanda forever",
            url: "https://assetscdn1.paytm.com/images/cinema/wakanda_1-b6bb5900-50fe-11ed-9b3e-edc965e39985.jpg",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=_Z3QKkl1WyM"
        }
        ,
        {
            title: "Raya",
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2021-01-08-at-2-12-55-pm-1610133207.png?crop=1.00xw:0.853xh;0,0.0364xh&resize=480:*",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=1VIZ89FEjYI"
        }
        ,
        {
            title: "City of gold",
            url: "https://qqcdnpictest.mxplay.com/pic/c7d1ca32774fb050286ef81dfab6653b/en/2x3/320x480/6da7688e8a6a1126af7c65e2ff4b4434_1280x1920.webp",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=n7VXSfdT4Pw"
        }
        ,
        {
            title: "Mortal engines",
            url: "https://qph.cf2.quoracdn.net/main-qimg-2eaaf9806fcd7a3ae94b7c0adadb18f7-lq",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=IRsFc2gguEg"
        }
        ,
        {
            title: "Johnny english",
            url: "https://media-cache.cinematerial.com/p/500x/3p93mvgs/johnny-english-reborn-spanish-movie-poster.jpg?v=1456709289",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=-Qv6p6pTz5I"
        }
        ,
        {
            title: "Hacker",
            url: "https://qqcdnpictest.mxplay.com/pic/ab50a1e87b15628c8a38e8ed1df0d4a7/en/2x3/320x480/ba7540a0a0677b006edfb27afcd1b196_1280x1920.webp",
            Text: "It's a movie about the ills of colonialism and the importance of environmentalism told through the eyes of a soldier who falls in love with the moon he invades—and one of its native warriors",
            trailer: "https://www.youtube.com/watch?v=y8HsD9qmTiY"
        }
    ])


    const [find, setFind] = useState("")

    const change = useRef(null)



    function Search_1(getSearch) {
        setFind(getSearch)
    }

    console.log(find);

    const changeHandeler = () => {
        change.current.style.color = "red"
    }

    return (
        <>

            <Send.Provider value={Search_1}>
                <MoviesUsableNav />
            </Send.Provider>
        <div className=' clr'>
            <div className='data container'>

                {
                    movies.filter((val) => {
                        if (find.trim() === '') {
                            return val
                        }
                        else if (val.title.toLowerCase().includes(find.toLowerCase())) {
                            return val
                        }
                    }).map((val, ind) => {
                        return (

                            <div className='card main' key={ind}>
                                <div className='hide'>
                                    <img
                                        src={val.url}
                                        className='card-img-top'
                                        height="300px" 
                                    />
                                </div>

                                <div className='card-body'>
                                    <h4 className='card-title'>{val.title}</h4>
                                    <p className='card-text'>{val.Text}</p>
                                </div>
                                <div className='card-footer foot'>
                                    <button className='btn btn-primary anch'><a href={val.trailer} target="new
                                    ">Play Trailer</a></button>
                                    <span
                                        class="material-symbols-outlined"
                                        ref={change}
                                        onClick={changeHandeler}
                                    >
                                        thumb_up
                                    </span>
                                    <span class="material-symbols-outlined">
                                        thumb_down_off
                                    </span>
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

export default Collection