export interface Movie {
  id: number;
  name: string;
  rating: number;
  releaseYear: string;
  genre: string;
  image: string;
  show: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    name: 'Kill Bill Vol. 1',
    rating: 5,
    releaseYear: '2003',
    genre: 'Action',
    image:
      'http://nybyu.com/wp-content/uploads/2017/05/20b2f9_8af5ff4641b54f8ab379658e280e620c.jpg',
    show: true,
  },
  {
    id: 2,
    name: 'Inception',
    rating: 5,
    releaseYear: '2010',
    genre: 'Sci-Fi',
    image:
      'https://xenlogic.files.wordpress.com/2010/08/inception-banner-poster.jpg',
    show: true,
  },
  {
    id: 3,
    name: 'Sinister',
    rating: 3,
    releaseYear: '2012',
    genre: 'Horror',
    image:
      'https://calvintheleo.files.wordpress.com/2014/10/sinister_poster.jpg?w=700',
    show: true,
  },
];
