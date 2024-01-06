import { Movie }  from '../Models/Movie.js'

export const addmovie= async(req,res)=>{
 
const title = req.body.title;
const director = req.body.director;
const classification = req.body.classification;
const releaseYear = req.body.releaseYear;
const rating = req.body.rating;
const duration = req.body.duration;
const mainActors = req.body.mainActors;
const overview = req.body.overview;
const studio = req.body.studio;
const createdAt = req.body.createdAt;

  let movie = await Movie.findOne({ title });
  
  if(movie)
    return res.json({ message: " Movie Already Exist..!" });

  movie = await Movie.create({
   title , director
   ,classification , releaseYear ,rating ,duration , mainActors, overview,studio
   
  });

  res.json({ message: "Movie Saved..!"});
};
// getmovie
export const getmovie = async (req, res) => {
  const movies = await Movie.find();

  res.json({ message: "Movie", movies });
};



// deletemovie
export const deletemovie = async (req, res) => {
  // console.log("Delete route is working..!");
  const id = req.params.id;

  let movie = await Movie.findById(id);

  if (!movie) return res.json({ message: "Id not exist..!" });

  await movie.deleteOne();

  res.json({
    success: true,
    message: "deleted Successfully",
  });
};

//update 

// updatemovies
export const updatemovie = async (req, res) => {
  // console.log(req.params.id);
  const movieId = req.params.id;

  let movie = await Movie.findById(movieId);

  if (!movie) return res.json({ message: "Invalid Id" });

  const { title } = req.body;
movie.title=title

  await movie.save();
  res.json({ movie });
};


