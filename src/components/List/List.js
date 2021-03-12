import React from 'react';
import classes from "./List.module.scss";

const List = ({posts, page, maxPages, sort}) => {

    posts = posts.map((element, index) => {
        return (
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.domain}</td>
                <td>{element.createdAt.split("T")[0]}</td>
                <td>{element.dr}</td>
                <td>{element.blackLinks}</td>
                <td>{element.doFollowBlacklinks}</td>
                <td>{element.organicKeywords}</td>
            </tr>
        )
    })


    return (
        <div className={classes.List}>
            <table>
                <thead>
                <tr>
                    <td onClick={()=>{sort("id")}}>ID</td>
                    <td onClick={()=>{sort("domain")}}>Domain</td>
                    <td onClick={()=>{sort("createdAt")}}>Created at</td>
                    <td onClick={()=>{sort("dr")}}>DR</td>
                    <td onClick={()=>{sort("blacklinks")}}>Blacklinks</td>
                    <td onClick={()=>{sort("doFollowBlacklinks")}}>Do follow blacklinks</td>
                    <td onClick={()=>{sort("organicKeywords")}}>Organic keywords</td>
                </tr>
                </thead>
                <tbody>
                {posts}
                </tbody>
                <tfoot/>
            </table>
            <ul className={classes.Next}>
                {page === 1 ? <li className={classes.Blank}>Prev</li> : <li>prev</li>}
                <li className={classes.Number}>{page}</li>
                {page === maxPages ? <li className={classes.Blank}>Next</li> : <li>next</li>}
            </ul>
        </div>
    );
};

export default List;