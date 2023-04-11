import { useState } from "react";
import Modal from "react-modal";
import "./addMovie.css";
const AddMovies = ({ addNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Title, setTitle] = useState("casa del papel");
  const [Year, setYear] = useState(1976);
  const [description, setDescription] = useState("A mentally unstable driver in Ned sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.");
  const [Poster, setPoster] = useState("https://i.inews.co.uk/content/uploads/2020/04/money-heist-first-impression-1200-640x360.jpg");
  const [Ratings, setRatings] = useState(4);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    let newMovie = {
      Title,
      Year,
      description,
      Poster,
     Ratings
     };
    addNewMovie(newMovie);
    setIsOpen(false);
  };
  return (
    <div>
      <button className="Modal-btn" onClick={openModal}>Add Movie</button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Title</label>
          <input
            type="text"
            name="name"
            defaultValue={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Movie Year</label>
          <input
            type="number"
            name="date"
            defaultValue={Year}
            onChange={(e) => setYear(e.target.value)}
          />
          <label>Movie Description</label>
          <textarea
            type="text"
            name="description"
            defaultValue={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Movie Poster</label>
          <input
            type="URL"
            name="type"
            defaultValue={Poster}
            onChange={(e) => setPoster(e.target.value)}
          />
          <label>Movie Rating</label>
          <input
            type="Number"
            name="Rating"
            defaultValue={Ratings}
            onChange={(e) => setRatings(e.target.value)}
          />
          {/* <div className="rating-search">
            <input />
          </div> */}
          
        </form>
        <button className="Modal-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};
export default AddMovies;
/*import { useState } from "react";
import Modal from "react-modal";
const AddMovies = ({ addNewMovie }) => {
  const [Title, setTitle] = useState("");
  const [Year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [Poster, setPoster] = useState("");
  const [ratings, setRatings] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };
  
  const handleSubmit = () => {
    let newMovie = {
     Title,
     Year,
     description,
     Poster,
    ratings
    };
    addNewMovie(newMovie);
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>++</button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Title</label>
          <input
            type="text"
            name="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Movie Year</label>
          <input
            type="number"
            name="Year"
            onChange={(e) => setYear(e.target.value)}
          />
          <label>Movie description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Movie Poster</label>
          <input
            type="URL"
            name="Poster"
            onChange={(e) => setPoster(e.target.value)}
          />
          <label>Movie Ratings</label>
          <input
            type="Number"
            name="Rating"
            onChange={(e) => setRating(e.target.value)}
          />
          {/* <div className="rating-search">
            <input />
          </div> * /}
          
        </form>
        <button className="Modal-btn" onClick={handleSubmit}>
          Submit
        </button>
        </Modal>
        
      
    </div>
  );
};*/
//export default AddMovies;
