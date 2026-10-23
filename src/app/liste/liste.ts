import { Component } from '@angular/core';

interface Movie {
  id: number;
  name: string;
  // Chemin de l'affiche dans public/, résolu relativement à index.html.
  link: string;
}

@Component({
  imports: [],
  selector: 'app-liste',
  styleUrl: './liste.scss',
  templateUrl: './liste.html',
  host: { class: 'd-flex flex-column align-items-center flex-grow-1 container py-4' },
})
export class Liste {
  public movies: Movie[] = [
    { id: 1, name: 'Inception', link: 'posters/inception.jpg' },
    { id: 2, name: 'The Dark Knight', link: 'posters/dark-knight.jpg' },
    { id: 3, name: 'Interstellar', link: 'posters/interstellar.jpg' },
    { id: 4, name: 'Pulp Fiction', link: 'posters/pulp-fiction.jpg' },
    { id: 5, name: 'The Matrix', link: 'posters/matrix.png' },
  ];

  // null jusqu'au clic sur un film ; le template n'affiche la section
  // détail qu'une fois cette valeur renseignée.
  public selectedMovie: Movie | null = null;

  public showMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
