import React from 'react';
import classes from "./SortMenu.module.scss";
import Input from "../UI/Input/Input";

const SortMenu = ({form, update}) => {

    const renderInputs = () => {
        const inputs = Object.keys(form).map((controllName, index) => {
            const control = form[controllName];
            return (

                <div className={classes.Punkt} key={controllName + index}>
                    <div>{controllName}</div>
                    <div className={classes.InputWrapper}>
                        <Input
                            label={control.min.label}
                            type={control.min.type}
                            value={control.min.value}
                            valid={control.min.valid}
                            touched={control.min.touched}
                            shouldValidate={!!control.min.validation}
                            errorMessage={control.min.errorMessage}
                            onChange={event => update(event, controllName, true)}
                            inverse={true}
                        />
                        <Input
                            label={control.max.label}
                            type={control.max.type}
                            value={control.max.value}
                            valid={control.max.valid}
                            touched={control.max.touched}
                            shouldValidate={!!control.max.validation}
                            errorMessage={control.max.errorMessage}
                            onChange={event => update(event, controllName, false)}
                            inverse={true}
                        />
                    </div>
                </div>
            )
        });
        return inputs
    }


    return (
        <div className={classes.SortMenu}>
            {renderInputs()}
        </div>
    );
};

export default SortMenu;