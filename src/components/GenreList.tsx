import useGenres from "../hooks/useGenres";
// import { Genres } from "../hooks/useGenres";
// import useData from "../hooks/useData";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
