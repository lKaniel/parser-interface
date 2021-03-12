import List from "./components/List/List";
import {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import classes from "./App.module.scss";
import PostCreator from "./components/PostCreator/PostCreator";
import SortMenu from "./components/SortMenu/SortMenu";

function App() {

    let [state, setState] = useState({
        posts: [],
        sort: {
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
        },
    })

    const sort = useCallback((order)=>{
        setState((prev)=>{
            if (prev.sort.order === order){
                return{
                    ...prev,
                    sort:{
                        ...prev.sort,
                        reverse: !prev.sort.reverse
                    }
                }
            }
            return{
                ...prev,
                sort:{
                    ...prev.sort,
                    order: order,
                    reverse: false
                }
            }
        })
    },[])

    const getData = useCallback(async () => {
        try {
            const SQL = `http://timewars.online:4000/getposts?` +
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
            let pages = parseInt(response.data.pages);
            setState((prev) => {
                return {
                    ...prev,
                    posts: posts,
                    sort:{
                        ...prev.sort,
                        maxPages: pages
                    }
                }
            })
        } catch (e) {
        }
    }, [state.sort.blacklinks, state.sort.count, state.sort.createdAt, state.sort.doFollowBlacklinks, state.sort.dr, state.sort.order, state.sort.organicKeywords, state.sort.page, state.sort.reverse])

    useEffect(() => {
        getData()
    }, [getData]);


    return (
        <div className={classes.App}>
            <PostCreator left={true}><SortMenu/></PostCreator>
            <PostCreator><SortMenu/></PostCreator>
            <List posts= {state.posts} page={state.sort.page+1} maxPages={state.sort.maxPages} sort={sort}/>
        </div>
    );
};

export default App;
