import React, {useCallback, useEffect, useState} from 'react';
import classes from "./UpdateMenu.module.scss";
import axios from "axios";
import {saveAs} from 'file-saver'


const UpdateMenu = ({switchTable}) => {

    const [state, setState] = useState({
        status: {
            parsed: 0,
            ahrefs: false
        }
    })


    let update = useCallback(async () => {
        let data = await axios.get("http://localhost:4000/status")
        data = data.data;
        setState(prev => {
            return {
                ...prev,
                status: data
            }
        })
    }, [])

    useEffect(() => {
        update();
    }, [])

    const updateAhrefsDrop = useCallback(() => {
        axios.get("http://localhost:4000/updateposts").then(r => {
            update()
        })
    }, [])

    const updateAhrefsParsed = useCallback(() => {
        axios.get("http://localhost:4000/updatePosts?isDrop=false").then(r => {
            update()
        })
    }, [])

    const addParsed = useCallback(() => {
        axios.get("http://localhost:4000/addparsedposts").then(r => {
            update()
        })
    }, [])

    const getExel = useCallback(() => {
        saveAs("http://localhost:4000/getexel", 'table.xlsx')
    }, [])


    return (
        <div className={classes.Menu}>
            {!state.status.ahrefs ?
                <>
                    <button onClick={updateAhrefsDrop}>Ahrefs Drop</button>
                    <button onClick={updateAhrefsParsed}>Ahrefs Parsed</button>
                </> :
                <div>Ahrefs updating</div>
            }
            {state.status.parsed === 0 ?
                <button onClick={addParsed}>Update Parsed</button> :
                <div>{"Parsed " + +(state.status.parsed).toPrecision(1) + "%"}</div>}
            <button onClick={getExel}>Get Exel</button>
            <button onClick={switchTable}>Switch table</button>
        </div>
    );
}

export default UpdateMenu;