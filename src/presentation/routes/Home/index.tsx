import React, { useEffect } from "react";
import { CardComponent } from "../../components/Card";
import { useMovie } from "../../hooks/useMovie";
import { List, Main, Search } from "./style";

export const Home: React.FC = () => {
  const {
    movies,
    filter,
    setFilter,
    setSortBy,
    sortBy,
    actions: { handleGetAllMovies },
  } = useMovie();

  useEffect(() => handleGetAllMovies(), [handleGetAllMovies]);

  return (
    <Main>
      <h1>The Most Popular Movies</h1>
      <Search>
        <input
          type="text"
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
          placeholder="Search by title"
        />

        <select
          onChange={(event) => setSortBy(event.target.value)}
          value={sortBy}
        >
          <option value="rank-asc">rank up</option>
          <option value="rank-desc">rank down</option>
          <option value="year-asc">oldest</option>
          <option value="year-desc">newest</option>
          <option value="imDbRating-desc">rating up</option>
          <option value="imDbRating-asc">rating down</option>
          <option value="imDbRatingCount-desc">top vote</option>
          <option value="imDbRatingCount-asc">lowest vote</option>
          <option value="title-asc">A - Z</option>
          <option value="title-desc">Z - A</option>
        </select>
      </Search>
      {movies.length > 0 ? (
        <List>
          {movies.map((movie) => (
            <CardComponent key={movie.id} {...movie} />
          ))}
        </List>
      ) : (
        <h2 style={{ width: "100%", textAlign: "center" }}>
          No movies to be shown
        </h2>
      )}
    </Main>
  );
};
