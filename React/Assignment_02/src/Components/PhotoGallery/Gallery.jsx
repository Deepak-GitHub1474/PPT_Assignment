import "./main.css"; // Import css
import { useEffect, useState } from "react";  // React Hooks
import axios from "axios";  // External libraries for API Call
import { Link } from "react-router-dom";    // Navigate to other page

function Gallery() {

    const [photosData, setPhotosData] = useState([]);

    const API_URL = `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20`

    useEffect(() => {
        axios.get(API_URL).then(res => {
            setPhotosData(res.data.photos)
        })
        .catch(err => console.log(err));
    }, [API_URL])

    return (
        <div className="wrapper">
            {photosData.map(item =>
            <Link to={`/photo/${item.id}`} className="gallery-link" key={item.id}>
                <div className="main-container">
                    <img src={item.url} alt="" />
                    <h3 className="photo-title">{item.title}</h3>
                    <p className="photo-description">{item.description}</p>
                </div>
            </Link>
            )}
        </div>
    )
}
export default Gallery;