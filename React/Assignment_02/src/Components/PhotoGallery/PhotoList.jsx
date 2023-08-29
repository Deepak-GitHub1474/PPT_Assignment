import { Link } from "react-router-dom";

function PhotoList({ id, url, title, description }) {
  return (
    <>
      <Link to={`/photo/${id}`} className="gallery-link">
        <div className="main-container">
          <img src={url} alt="" />
          <h3 className="photo-title">{title}</h3>
          <p className="photo-description">{description}</p>
        </div>
      </Link>
    </>
  );
}

export default PhotoList;
