// Import css
import "./main.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the data from url
import axios from "axios";

function Photo() {
  const { id } = useParams();
  const [photoDetails, setPhotoDetails] = useState([]);
  const PHOTO_URL = `https://api.slingacademy.com/v1/sample-data/photos/${id}`
 
  useEffect(() => {
    axios
      .get(PHOTO_URL)
      .then((res) => {
        setPhotoDetails(res.data.photo);
      })
      .catch((err) => console.log(err));
  }, [PHOTO_URL]);

  return (
    <div className="photo-details-container">
      <img
        src={photoDetails.url}
        alt=""
      />
      <div>
        <h3 className="photo-title">{photoDetails.title}</h3>
        <p className="photo-description">{photoDetails.description}</p>
      </div>
    </div>
  );
}

export default Photo;
