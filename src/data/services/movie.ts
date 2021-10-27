import axios from "axios";
import { Movie } from "../../domain/entities/movie";

export async function getAllMovies(): Promise<Movie[]> {
  return await axios.get("http://localhost:4000/movies");
}
