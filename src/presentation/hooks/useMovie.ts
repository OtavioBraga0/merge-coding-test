import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { getAllMovies } from "../../data/services/movie";
import { Movie } from "../../domain/entities/movie";

type UseMovieProps = {
  movies: Movie[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  actions: {
    handleGetAllMovies: () => void;
  };
};

export const useMovie = (): UseMovieProps => {
  const [filter, setFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("rank-asc");
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleGetAllMovies = useCallback(async () => {
    const allMovies = await getAllMovies();
    setMovies(allMovies);
  }, []);

  const handleFilterByName = useCallback(
    (movie: Movie) =>
      movie.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    [filter]
  );

  const handleSortBy = useCallback(
    (currentMovie, nextMovie) => {
      const [prop, sort]: string[] = sortBy.split("-");

      const isNumber =
        ["rank", "year", "imDbRating", "imDbRatingCount"].indexOf(prop) !== -1;

      let compare: number = 1;

      if (isNumber) {
        if (sort === "asc") {
          compare =
            Number(currentMovie[prop as keyof Movie]) >
            Number(nextMovie[prop as keyof Movie])
              ? 1
              : Number(currentMovie[prop as keyof Movie]) ===
                Number(nextMovie[prop as keyof Movie])
              ? 0
              : -1;
        } else {
          compare =
            Number(currentMovie[prop as keyof Movie]) <
            Number(nextMovie[prop as keyof Movie])
              ? 1
              : Number(currentMovie[prop as keyof Movie]) ===
                Number(nextMovie[prop as keyof Movie])
              ? 0
              : -1;
        }
      } else {
        if (sort === "asc") {
          compare =
            currentMovie[prop as keyof Movie] > nextMovie[prop as keyof Movie]
              ? 1
              : currentMovie[prop as keyof Movie] ===
                nextMovie[prop as keyof Movie]
              ? 0
              : -1;
        } else {
          compare =
            currentMovie[prop as keyof Movie] < nextMovie[prop as keyof Movie]
              ? 1
              : currentMovie[prop as keyof Movie] ===
                nextMovie[prop as keyof Movie]
              ? 0
              : -1;
        }
      }

      return compare;
    },
    [sortBy]
  );

  const filteredMovies: Movie[] = useMemo(
    () => movies.filter(handleFilterByName).sort(handleSortBy),
    [movies, handleFilterByName, handleSortBy]
  );

  return {
    movies: filteredMovies,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    actions: { handleGetAllMovies },
  };
};
