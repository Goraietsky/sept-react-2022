import css from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to="">Home</NavLink>
            <NavLink to="todos">Todos</NavLink>
            <NavLink to="albums">Albums</NavLink>
            <NavLink to="comments">Comments</NavLink>
            <NavLink to="posts">Posts</NavLink>
        </div>
    );
};

export {Header};