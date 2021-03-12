import React from 'react';
import classes from "./SortMenu.module.scss";

const SortMenu = () => {
    return (
        <div className={classes.SortMenu}>
            <div className={classes.Punkt}>
                <div>Возраст</div>
                <input/>
                <input/>
            </div>
            <div className={classes.Punkt}>
                <div>Место продажи</div>
                <input/>
                <input/>
            </div>
            <div className={classes.Punkt}>
                <div>Посетители</div>
                <input/>
                <input/>
            </div>
            <div className={classes.Punkt}>
                <div>Доходность</div>
                <input/>
                <input/>
            </div>
            <div className={classes.Punkt}>
                <div>Цена</div>
                <input/>
                <input/>
            </div>
            <div className={classes.Punkt}>
                <div>DR</div>
                <input/>
                <input/>
            </div>
        </div>
    );
};

export default SortMenu;