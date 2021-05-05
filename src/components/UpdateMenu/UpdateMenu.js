import React, {useCallback, useEffect, useState} from 'react';
import classes from "./UpdateMenu.module.scss";
import axios from "axios";
import {saveAs} from 'file-saver'


const UpdateMenu = ({switchTable, isParsed, getData}) => {

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


    useEffect(()=>{
        update()
        let interval = setInterval(()=>{
            update()
        },10000)
        return ()=>{
            clearInterval(interval)
        }
    },[])

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

    const clearTable = useCallback(() => {
        axios.post("http://localhost:4000/cleartable", {
            "isDrop": !isParsed
        }).then(r => {
            getData()
        })
    }, [])

    const stopUpdating = useCallback(() => {
        axios.post("http://localhost:4000/stopupdating").then(r => {
            update()
        })
    }, [])


    return (
        <div className={classes.Menu}>

            {!state.status.ahrefs ?
                !(state.status.parsed === 0) ? null :
                <>
                    <button onClick={updateAhrefsDrop}>Ahrefs Domains</button>
                    <button onClick={updateAhrefsParsed}>Ahrefs Websites</button>
                </> :
                <>
                    <div>Ahrefs updating</div>
                    <button onClick={stopUpdating}>Stop</button>
                </>
            }
            {state.status.parsed === 0 ?
                state.status.ahrefs ? null :
                <button onClick={addParsed}>Add Websites</button> :
                <>
                    <div>Websites adding</div>
                    <button onClick={stopUpdating}>Stop</button>
                </>
            }
            <button onClick={getExel}>Get Exel</button>
            <button onClick={switchTable}>Switch table</button>
            <button onClick={clearTable}>Clear table</button>
        </div>
    );
};

export default UpdateMenu;