import React, {useEffect, useState} from 'react'

const {REACT_APP_API_KEY} = process.env;

export default function GIFScreen(props) {

    const [gif, setGif] = useState([])
    const [gifs, setGifs] = useState([])

    useEffect(() => {
            if (props.showGifs === "random" && !(props.showGifs === "trending" || props.showGifs === "search")) {
                const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_API_KEY}`
                fetch(randomUrl).then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        alert("ERROR FETCHING")
                    }
                }).then((data) => {
                    setGif(data.data.images.original.url)
                })
            } else if (props.showGifs === "trending") {
                const trendUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${REACT_APP_API_KEY}&limit=28`
                fetch(trendUrl).then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        alert("ERROR FETCHING")
                    }
                }).then((data) => {
                    setGifs(data.data)
                    console.log(gifs)
                })
            } else if (props.showGifs === "search") {
                const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${props.term}&api_key=${REACT_APP_API_KEY}&limit=28`
                fetch(searchUrl).then(r => {
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
        }, [props.showGifs, props.term, props.count]
    )
    return <div >
        {(props.showGifs === "random" && !(props.showGifs === "search" || props.showGifs === "trending")) && <img
            className="gif"
            src={gif}
        />}
        {(props.showGifs === "search" || props.showGifs === "trending") && gifs.map(gif => <img
                className="gifs"
                src={gif.images.original.url}
            />
        )}
    </div>

}