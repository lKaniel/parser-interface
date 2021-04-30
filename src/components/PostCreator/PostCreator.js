import React, {useCallback, useEffect, useRef, useState} from 'react';
import classes from "./PostCreator.module.scss";
import {Transition} from "react-transition-group";
import SortMenu from "../SortMenu/SortMenu";

function debounce(fn, ms) {
    let timer;
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments)
        }, ms)
    };
}

const openedMap = {
    width: '50%',
    height: '100%',
    transition: "width .4s ease-in-out",
    zIndex: 10000,
    position: "fixed"
};

const openedMobileMap = {
    width: '100%',
    height: '35%',
    transition: "height .4s ease-in-out",
    zIndex: 10000,
    position: "relative"
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const PostCreator = (props) => {
        const [dimensions, setDimensions] = useState({
            height: window.innerHeight,
            width: window.innerWidth
        });
        useEffect(() => {
            let isMounted = true;

            const debouncedHandleResize = debounce(function handleResize() {
                if (isMounted) {
                    setDimensions({
                        height: window.innerHeight,
                        width: window.innerWidth
                    })
                }
            }, 0)
            window.addEventListener('resize', debouncedHandleResize)
        });

        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        const date = yyyy + '-' + mm + '-' + dd;
        const [state, setState] = useState({
            isOpen: false,
            isClosing: false,
        })

        const openPostCreator = useCallback(() => {
            setState(prevState => {
                    return {
                        ...prevState,
                        isOpen: !prevState.isOpen
                    }
                }
            )
        }, [])


        const postWrapCls = [classes.PostCreatorWrap];

        const postCreatorCls = [classes.PostCreator];
        if (state.isOpen) {
            postCreatorCls.push(classes.open);
        }

        const openButtonCls = [classes.OpenButton];
        if (state.isOpen) {
            openButtonCls.push(classes.open);
        }


        if (props.left === true){
            postWrapCls.push(classes.left);
            openButtonCls.push(classes.left);
            postCreatorCls.push(classes.left);
        }

        return (
            <div className={postCreatorCls.join(" ")}>
                <button className={openButtonCls.join(" ")} onClick={openPostCreator}>{state.isOpen ? "+" : "+"}</button>
                <Transition
                    in={state.isOpen === true}
                    timeout={{
                        enter: 0,
                        exit: 500
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    {state1 => {
                        if (state1 === "entering") {
                        } else if (state1 === "entered") {
                            postWrapCls.push(classes.open)
                        } else if (state1 === "exiting") {
                            postWrapCls.push(classes.closing)
                        } else if (state1 === "exited") {
                        }
                        return (
                            <div className={postWrapCls.join(" ")}>
                                {props.children}
                            </div>
                        )
                    }}
                </Transition>
            </div>
        );
    }
;

export default PostCreator;