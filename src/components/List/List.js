import React from 'react';
import classes from "./List.module.scss";

const List = ({posts}) => {

    posts = posts.map((element, index) => {
        return (
            <>
                <td>{element.id}</td>
                <td>{element.domain}</td>
                <td>{element.createdAt}</td>
                <td>{element.dr}</td>
                <td>{element.blackLinks}</td>
                <td>{element.doFollowBlacklinks}</td>
                <td>{element.organicKeywords}</td>
            </>
        )
    })


    return (
        <div className={classes.List}>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Domain</td>
                    <td>Created at</td>
                    <td>DR</td>
                    <td>Blacklinks</td>
                    <td>Do follow blacklinks</td>
                    <td>Organic keywords</td>
                </tr>
            </table>
        </div>
    );
};

export default List;