import {Coments} from "../../components/Coments/Coments";

import {Outlet} from "react-router-dom";

import css from './CommentsPage.module.css'

const CommentsPage = () => {
    return (
        <div className={css.CommentsPage}>
            <Coments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};