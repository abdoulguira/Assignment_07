import React, {useEffect, useState} from 'react'

const {REACT_APP_API_KEY} = process.env;

export default function GIFScreen(props) {

    const [gifs, setGifs] = useState([])

    useEffect(() => {
            if (props.showGifs) {
                const trendUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${REACT_APP_API_KEY}&limit=20`
                fetch(trendUrl).then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        alert("ERROR FETCHING")
                    }
                }).then((data) => {
                    setGifs(data.data)
                })
            } else if (props.trendOption) {
                const trendUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${REACT_APP_API_KEY}&limit=20`
                fetch(trendUrl).then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        alert("ERROR FETCHING")
                    }
                }).then((data) => {
                    setGifs(data.data)
                })
            } else if (props.term != "") {
                const trendUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${REACT_APP_API_KEY}&limit=20`
                fetch(trendUrl).then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        alert("ERROR FETCHING")
                    }
                }).then((data) => {
                    console.log(data.data)
                    setGifs(data.data)
                })
            } else {
                const trendUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${REACT_APP_API_KEY}&limit=20`
                fetch(trendUrl).then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        alert("ERROR FETCHING")
                    }
                }).then((data) => {
                    setGifs(data.data)
                })
            }
        }, []
    )
    return (
        <div id="image-container">
            {gifs.map(gif => (<img
                    className="gifs"
                    src={gif.images.original.url}
                    alt="test"
                />)
            )}
        </div>
    )
}