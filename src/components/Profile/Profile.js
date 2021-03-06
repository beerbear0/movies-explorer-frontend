import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import './Profile.css';
import Header from "../Header/Header";
import {useFormWithValidation} from "../../hooks/useForm";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const {values, setValues, handleChange, errors, isFormValid} = useFormWithValidation({
        name: currentUser.name,
        email: currentUser.email
    });
    const [isFormDisabled, setIsFormDisabled] = React.useState(true);

    React.useEffect(() => {
        setValues(currentUser);
    }, [currentUser, setValues]);

    function handleEditProfileClick(e) {
        e.preventDefault();
        setIsFormDisabled(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onChangeUser(values.name, values.email);
    }

    React.useEffect(() => {
        setIsFormDisabled(props.isUpdateSuccess);
    },[props.isUpdateSuccess, props.onChangeUser])

    React.useEffect(() => {
        if(props.isSaving) {
            setIsFormDisabled(true);
        }
    }, [props.isSaving])

    return (
        <>
            <Header
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
                headerHref1='/movies'
                headerHref2='/saved-movies'
            />
            <section className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <fieldset className="profile__fields">
                        <div className="profile__form-input">
                            <p className="profile__form-input-name">Имя</p>
                            <input type="text"
                                   name="name"
                                   pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                                   className="profile__form-input-field"
                                   value={values.name || ''} onChange={handleChange}
                                   disabled={isFormDisabled}
                                   required />
                        </div>
                        <span className="profile__input-error">{errors.name}</span>
                        <div className="profile__form-input">
                            <p className="profile__form-input-name">Email</p>
                            <input
                                type="email"
                                name="email"
                                pattern="^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$"
                                className="profile__form-input-field"
                                value={values.email || ''}
                                onChange={handleChange}
                                disabled={isFormDisabled}
                                required />
                        </div>
                        <span className="profile__input-error">{errors.email}</span>
                    </fieldset>
                    <span
                        className={`profile__form-message ${props.isUpdateSuccess ? 'profile__form-message_type_success' : 'profile__form-message_type_error'}`}>
                        {props.message}</span>
                    {isFormDisabled ? <button className="profile__button profile__button_type_edit" onClick={handleEditProfileClick}>Редактировать</button> :
                        <button type="submit" disabled={!isFormValid}
                                className={`profile__button profile__button_type_save ${isFormValid ? '' : 'profile__button_type_save_disabled'}`}>
                            Сохранить</button>}
                </form>
                <button className={isFormDisabled ? 'profile__signout-link' : 'profile__signout-link no-display'}
                        onClick={props.onSignOut}>Выйти из аккаунта</button>
            </section>
        </>

    )
}

export default Profile;
