import React, {useEffect, useState} from 'react'

const {REACT_APP_API_KEY} = process.env;

export default function GIFScreen(props) {

    const [gifs, setGifs] = useState([])

    useEffect(async () => {
            if (props.showGifs === "random") {
                const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_API_KEY}`
                await fetch(randomUrl).then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        alert("ERROR FETCHING")
                    }
                }).then((data) => {
                    console.log(data)
                    setGifs(data.data)
                })
            } else if (props.showGifs === "trending") {
                const trendUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${REACT_APP_API_KEY}&limit=20`
                await fetch(trendUrl).then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        alert("ERROR FETCHING")
                    }
                }).then((data) => {
                    setGifs(data.data)
                })
            } else if (props.showGifs === "search") {
                const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${props.term}&api_key=${REACT_APP_API_KEY}&limit=20`
                await fetch(searchUrl).then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        alert("ERROR FETCHING")
                    }
                }).then((data) => {
                    console.log(data.data)
                    setGifs(data.data)
                })
            }
        }, [props.showGifs, props.term]
    )
    return <div id="image-container">
        {(props.showGifs === "search" || props.showGifs === "trending") && gifs.map(gif => <img
                className="gifs"
                src={gif.images.original.url}
            />
        )}
        {props.showGifs === "random" && <img
                className="gifs"
                src={gifs.images.original.url}
            />
        }
    </div>

}