import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
    return (
        <>
            <Header
                loggedIn={props.loggedIn}
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
                headerHref1='/movies'
                headerHref2='/saved-movies'/>
            <SearchForm
                onSearchSavedMovies={props.onSearchSavedMovies}
                saved={true} onShortMoviesCheck={props.onShortMoviesCheck}
                isChecked={props.isShortMoviesChecked}/>
            <MoviesCardList saved={true} movies={props.movies} onDeleteMovie={props.onDeleteMovie} />
            <Footer />
        </>
    )
}

export default SavedMovies;
