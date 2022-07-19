import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const data = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(data.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie.medium_cover_image);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} />
          <h1>{movie.title}</h1>
          <Link to={`${process.env.PUBLIC_URL}/`}>Go To Home</Link>
        </div>
      )}
    </div>
  );
};

export default Detail;
