import List from "./components/List/List";
import {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import classes from "./App.module.scss";
import PostCreator from "./components/PostCreator/PostCreator";
import SortMenu from "./components/SortMenu/SortMenu";
import UpdateMenu from "./components/UpdateMenu/UpdateMenu";

function App() {

    let [state, setState] = useState({
        posts: [],
        sort: {
            dr: [-1, 1000],
            blacklinks: [-1, 1000],
            doFollowBlacklinks: [-1, 100],
            organicKeywords: [-1, 1000],
            createdAt: ["2000-01-01", "2200-01-01"],
            order: "id",
            reverse: false,
            page: 0,
            count: 20,
            maxPages: 1
        },
        createPostForm: {
            createdAt: {
                min: {
                    value: "2000-01-01",
                    type: "date",
                    label: "min",
                    hint: "min",
                    errorMessage: "Enter correct value",
                    valid: true,
                    touched: false,
                    validation: {
                        required: true,
                        date: true
                    }
                },
                max: {
                    value: "2200-01-01",
                    type: "date",
                    label: "max",
                    hint: "max",
                    errorMessage: "Enter correct value",
                    valid: true,
                    touched: false,
                    validation: {
                        required: true,
                        date: true
                    }
                },

            },
            dr: {
                min: {
                    value: 1,
                    type: "text",
                    label: "min",
                    hint: "min",
                    errorMessage: "Enter correct value",
                    valid: true,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 1,
                        isInt: true
                    }
                },
                max: {
                    value: 1000,
                    type: "text",
                    label: "max",
                    hint: "max",
                    errorMessage: "Enter correct value",
                    valid: true,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 1,
                        isInt: true
                    }
                },

            },
            blacklinks: {
                min: {
                    value: 20,
                    type: "text",
                    label: "min",
                    hint: "min",
                    errorMessage: "Enter correct value",
                    valid: true,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 1,
                        isInt: true
                    }
                },
                max: {
                    value: 1000,
                    type: "text",
                    label: "max",
                    hint: "max",
                    errorMessage: "Enter correct value",
                    valid: true,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 1,
                        isInt: true
                    }
                },

            },
            doFollowBlacklinks: {
                min: {
                    value: 3,
                    type: "text",
                    label: "min",
                    hint: "min",
                    errorMessage: "Enter correct value",
                    valid: true,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 1,
                        isInt: true
                    }
                },
                max: {
                    value: 100,
                    type: "text",
                    label: "max",
                    hint: "max",
                    errorMessage: "Enter correct value",
                    valid: true,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 1,
                        isInt: true
                    }
                },

            },
            organicKeywords: {
                min: {
                    value: 0,
                    type: "text",
                    label: "min",
                    hint: "min",
                    errorMessage: "Enter correct value",
                    valid: true,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 1,
                        isInt: true
                    }
                },
                max: {
                    value: 1000,
                    type: "text",
                    label: "max",
                    hint: "max",
                    errorMessage: "Enter correct value",
                    valid: true,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 1,
                        isInt: true
                    }
                },

            }
        },
        isFormValid: true,
        isParsed: false
    })

    const switchTable = useCallback(() => {
        setState(prev => {
            return {
                ...prev,
                isParsed: !prev.isParsed,
                sort:
                    prev.isParsed ?
                        {
                            dr: [1, 1000],
                            blacklinks: [20, 1000],
                            doFollowBlacklinks: [3, 100],
                            organicKeywords: [0, 1000],
                            createdAt: ["2000-01-01", "2200-01-01"],
                            order: "id",
                            reverse: false,
                            page: 0,
                            count: 20,
                            maxPages: 1
                        }:{
                            price: [-1,1000],
                            returning: [-1,1000],
                            age: ["2000-01-01", "2200-01-01"],
                            createdAt: ["2000-01-01", "2200-01-01"],
                            monthlyUsers: [-1,1000],
                            googlePages: [-1,1000],
                            tf: [-1, 1000],
                            dr: [-1, 1000],
                            blacklinks: [-1, 1000],
                            organicKeywords: [-1, 1000],
                            order: "id",
                            reverse: false,
                            page: 0,
                            count: 20,
                            maxPages: 1
                        },
                createPostForm:
                    prev.isParsed ?
                        {
                            createdAt: {
                                min: {
                                    value: "2000-01-01",
                                    type: "date",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        date: true
                                    }
                                },
                                max: {
                                    value: "2200-01-01",
                                    type: "date",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        date: true
                                    }
                                },

                            },
                            dr: {
                                min: {
                                    value: 1,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 1000,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            },
                            blacklinks: {
                                min: {
                                    value: 20,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 1000,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            },
                            doFollowBlacklinks: {
                                min: {
                                    value: 3,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 100,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            },
                            organicKeywords: {
                                min: {
                                    value: 0,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 1000,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            }
                        } :
                        {
                            price: {
                                min: {
                                    value: -1,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 1000,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            },
                            returning: {
                                min: {
                                    value: -1,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 1000,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            },
                            age: {
                                min: {
                                    value: "2000-01-01",
                                    type: "date",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        date: true
                                    }
                                },
                                max: {
                                    value: "2200-01-01",
                                    type: "date",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        date: true
                                    }
                                },

                            },
                            createdAt: {
                                min: {
                                    value: "2000-01-01",
                                    type: "date",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        date: true
                                    }
                                },
                                max: {
                                    value: "2200-01-01",
                                    type: "date",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        date: true
                                    }
                                },

                            },
                            monthlyUsers: {
                                min: {
                                    value: -1,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 1000,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            },
                            googlePages: {
                                min: {
                                    value: -1,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 1000,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            },
                            dr: {
                                min: {
                                    value: -1,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 1000,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            },
                            blacklinks: {
                                min: {
                                    value: -1,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 1000,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            },
                            organicKeywords: {
                                min: {
                                    value: -1,
                                    type: "text",
                                    label: "min",
                                    hint: "min",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },
                                max: {
                                    value: 1000,
                                    type: "text",
                                    label: "max",
                                    hint: "max",
                                    errorMessage: "Enter correct value",
                                    valid: true,
                                    touched: false,
                                    validation: {
                                        required: true,
                                        minLength: 1,
                                        isInt: true
                                    }
                                },

                            }
                        }
            }
        })
    }, [])

    const validate = useCallback((value, validation) => {
        if (!validation) {
            return true;
        }
        let isValid = true;
        if (validation.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }, [])

    const updateFrame = useCallback((event, controllName, isMin) => {
        const form = {...state.createPostForm};
        let control = form[controllName];
        if (isMin) {
            control = control.min
        } else {
            control = control.max
        }
        control.value = event.target.value;
        control.touched = true;
        control.valid = validate(control.value, control.validation);

        let isFormValid = true;

        if (isMin) {
            form[controllName].min = control;
        } else {
            form[controllName].max = control;
        }

        Object.keys(form).forEach(name => {
            isFormValid = form[name].min.valid && isFormValid;
            isFormValid = form[name].max.valid && isFormValid;
        })
        if (!state.isParsed) {
            setState(prevState => {
                let dr = [form.dr.min.value, form.dr.max.value];
                let blacklinks = [form.blacklinks.min.value, form.blacklinks.max.value];
                let doFollowBlacklinks = [form.doFollowBlacklinks.min.value, form.doFollowBlacklinks.max.value];
                let organicKeywords = [form.organicKeywords.min.value, form.organicKeywords.max.value];
                let createdAt = [form.createdAt.min.value, form.createdAt.max.value];

                if (dr[0] === "") {
                    dr[0] = -1
                }
                if (dr[1] === "") {
                    dr[1] = -1
                }
                if (blacklinks[0] === "") {
                    blacklinks[0] = -1
                }
                if (blacklinks[1] === "") {
                    blacklinks[1] = -1
                }
                if (doFollowBlacklinks[0] === "") {
                    doFollowBlacklinks[0] = -1
                }
                if (doFollowBlacklinks[1] === "") {
                    doFollowBlacklinks[1] = -1
                }
                if (organicKeywords[0] === "") {
                    organicKeywords[0] = -1
                }
                if (organicKeywords[1] === "") {
                    organicKeywords[1] = -1
                }
                if (createdAt[0] === "") {
                    createdAt[0] = -1
                }
                if (createdAt[1] === "") {
                    createdAt[1] = -1
                }
                return {
                    ...prevState,
                    loginForm: form,
                    isFormValid,
                    sort: {
                        ...prevState.sort,
                        dr,
                        blacklinks,
                        doFollowBlacklinks,
                        organicKeywords,
                        createdAt
                    }
                }
            })
        }else{
            setState(prevState => {
                let price = [form.price.min.value, form.price.max.value];
                let returning = [form.returning.min.value, form.returning.max.value];
                let age = [form.age.min.value, form.age.max.value];
                let createdAt = [form.createdAt.min.value, form.createdAt.max.value];
                let monthlyUsers = [form.monthlyUsers.min.value, form.monthlyUsers.max.value];
                let googlePages = [form.googlePages.min.value, form.googlePages.max.value];
                let dr = [form.dr.min.value, form.dr.max.value];
                let blacklinks = [form.blacklinks.min.value, form.blacklinks.max.value];
                let organicKeywords = [form.organicKeywords.min.value, form.organicKeywords.max.value];

                if (price[0] === "") {
                    price[0] = -1
                }
                if (price[1] === "") {
                    price[1] = -1
                }
                if (returning[0] === "") {
                    returning[0] = -1
                }
                if (returning[1] === "") {
                    returning[1] = -1
                }
                if (monthlyUsers[0] === "") {
                    monthlyUsers[0] = -1
                }
                if (monthlyUsers[1] === "") {
                    monthlyUsers[1] = -1
                }
                if (googlePages[0] === "") {
                    googlePages[0] = -1
                }
                if (googlePages[1] === "") {
                    googlePages[1] = -1
                }
                if (dr[0] === "") {
                    dr[0] = -1
                }
                if (dr[1] === "") {
                    dr[1] = -1
                }
                if (blacklinks[0] === "") {
                    blacklinks[0] = -1
                }
                if (blacklinks[1] === "") {
                    blacklinks[1] = -1
                }
                if (organicKeywords[0] === "") {
                    organicKeywords[0] = -1
                }
                if (organicKeywords[1] === "") {
                    organicKeywords[1] = -1
                }
                if (createdAt[0] === "") {
                    createdAt[0] = -1
                }
                if (createdAt[1] === "") {
                    createdAt[1] = -1
                }
                return {
                    ...prevState,
                    loginForm: form,
                    isFormValid,
                    sort: {
                        ...prevState.sort,
                        price,
                        returning,
                        age,
                        createdAt,
                        monthlyUsers,
                        googlePages,
                        tf: [-1, 10000],
                        dr,
                        blacklinks,
                        organicKeywords,
                    }
                }
            })

        }
    }, [state.createPostForm, state.isParsed, validate]);

    const sort = useCallback((order) => {
        setState((prev) => {
            if (prev.sort.order === order) {
                return {
                    ...prev,
                    sort: {
                        ...prev.sort,
                        reverse: !prev.sort.reverse,
                        page: 0
                    }
                }
            }
            return {
                ...prev,
                sort: {
                    ...prev.sort,
                    order: order,
                    reverse: false,
                    page: 0
                }
            }
        })
    }, [])

    const getData = useCallback(async () => {
        if (!state.isParsed) {
            try {
                const SQL = `http://localhost:4000/getposts?` +
                    `dr=${state.sort.dr[0]}:${state.sort.dr[1]}&` +
                    `blacklinks=${state.sort.blacklinks[0]}:${state.sort.blacklinks[1]}&` +
                    `doFollowBlacklinks=${state.sort.doFollowBlacklinks[0]}:${state.sort.doFollowBlacklinks[1]}&` +
                    `organicKeywords=${state.sort.organicKeywords[0]}:${state.sort.organicKeywords[1]}&` +
                    `createdAt=${state.sort.createdAt[0]}:${state.sort.createdAt[1]}&` +
                    `order=${state.sort.order}&` +
                    `reverse=${state.sort.reverse}&` +
                    `page=${state.sort.page}&` +
                    `count=${state.sort.count}`;
                const response = await axios.get(SQL);
                let posts = response.data.posts;
                let pages = response.data["pages"];
                setState((prev) => {
                    return {
                        ...prev,
                        posts: posts,
                        sort: {
                            ...prev.sort,
                            maxPages: parseInt(pages)
                        }
                    }
                })
            } catch (e) {
            }
        } else {
            const SQL = `http://localhost:4000/getparsedposts?` +
                `price=${state.sort.price[0]}:${state.sort.price[1]}&` +
                `returning=${state.sort.returning[0]}:${state.sort.returning[1]}&` +
                `age=${state.sort.age[0]}:${state.sort.age[1]}&` +
                `createdAt=${state.sort.createdAt[0]}:${state.sort.createdAt[1]}&` +
                `monthlyUsers=${state.sort.monthlyUsers[0]}:${state.sort.monthlyUsers[1]}&` +
                `googlePages=${state.sort.googlePages[0]}:${state.sort.googlePages[1]}&` +
                `tf=${state.sort.tf[0]}:${state.sort.tf[1]}&` +
                `dr=${state.sort.dr[0]}:${state.sort.dr[1]}&` +
                `blacklinks=${state.sort.blacklinks[0]}:${state.sort.blacklinks[1]}&` +
                `organicKeywords=${state.sort.organicKeywords[0]}:${state.sort.organicKeywords[1]}&` +
                `order=${state.sort.order}&` +
                `reverse=${state.sort.reverse}&` +
                `page=${state.sort.page}&` +
                `count=${state.sort.count}`;
            const response = await axios.get(SQL);
            let posts = response.data.posts;
            let pages = response.data["pages"];
            setState((prev) => {
                return {
                    ...prev,
                    posts: posts,
                    sort: {
                        ...prev.sort,
                        maxPages: parseInt(pages)
                    }
                }
            })
        }
    }, [state.isParsed, state.sort.age, state.sort.blacklinks, state.sort.count, state.sort.createdAt, state.sort.doFollowBlacklinks, state.sort.dr, state.sort.googlePages, state.sort.monthlyUsers, state.sort.order, state.sort.organicKeywords, state.sort.page, state.sort.price, state.sort.returning, state.sort.reverse, state.sort.tf])

    useEffect(() => {
        getData()
    }, [getData]);

    const changePage = useCallback((amount) => {
        setState((prev) => {
            return {
                ...prev,
                sort: {
                    ...prev.sort,
                    page: prev.sort.page + amount
                }
            }
        })
    }, [])


    return (
        <div className={classes.App}>
            <PostCreator left={true}><UpdateMenu switchTable={switchTable} isParsed={state.isParsed} getData={getData}/></PostCreator>
            <PostCreator><SortMenu form={state.createPostForm} update={updateFrame}/></PostCreator>
            <List posts={state.posts} page={state.sort.page + 1} maxPages={state.sort.maxPages} sort={sort}
                  changePage={changePage} isParsed={state.isParsed}/>
        </div>
    );
};

export default App;
