import React from 'react';
import classes from "./List.module.scss";

const List = ({posts}) => {

    posts = posts.map((element, index) => {
        return (
            <tr>
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
                <thead/>
                <tbody>
                <tr>
                    <td>ID</td>
                    <td>Domain</td>
                    <td>Created at</td>
                    <td>DR</td>
                    <td>Blacklinks</td>
                    <td>Do follow blacklinks</td>
                    <td>Organic keywords</td>
                </tr>
                {posts}
                </tbody>
                <tfoot/>
            </table>
        </div>
    );
};

export default List;