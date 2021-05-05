import React from 'react';
import classes from "./List.module.scss";

const List = ({posts, page, maxPages, sort, changePage, isParsed}) => {

    if (!isParsed) {
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
                        <td onClick={() => {
                            sort("id")
                        }}>ID
                        </td>
                        <td onClick={() => {
                            sort("domain")
                        }}>Domain
                        </td>
                        <td onClick={() => {
                            sort("createdAt")
                        }}>Created at
                        </td>
                        <td onClick={() => {
                            sort("dr")
                        }}>DR
                        </td>
                        <td onClick={() => {
                            sort("blacklinks")
                        }}>Blacklinks
                        </td>
                        <td onClick={() => {
                            sort("doFollowBlacklinks")
                        }}>Do follow blacklinks
                        </td>
                        <td onClick={() => {
                            sort("organicKeywords")
                        }}>Organic keywords
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {posts}
                    </tbody>
                    <tfoot/>
                </table>
                <ul className={classes.Next}>
                    {page === 1 ? <li className={classes.Blank}>Prev</li> : <li onClick={() => {
                        changePage(-1)
                    }}>Prev</li>}
                    <li className={classes.Number}>{page}</li>
                    {page === maxPages ? <li className={classes.Blank}>Next</li> : <li onClick={() => {
                        changePage(1)
                    }}>Next</li>}
                </ul>
            </div>
        );
    } else {
        posts = posts.map((element, index) => {
            if (element.age != null && element.createdAt != null)
                return (
                    <tr key={element.id} className={classes.Parsed}>
                        <td>{element.id}</td>
                        <td><a href={element.marketplacePage} target="_blank">{element.url}</a></td>
                        <td>{element.minPrice}</td>
                        <td>{element.optimalPrice}</td>
                        <td>{element.returning}</td>
                        <td>{element.age.split("T")[0]}</td>
                        <td>{element.createdAt.split("T")[0]}</td>
                        <td>{element.monthlyUsers}</td>
                        <td>{element.dr}</td>
                        <td>{element.blackLinks}</td>
                        <td>{element.organicKeywords}</td>
                    </tr>
                )
        })
        return (
            <div className={classes.List}>
                <table>
                    <thead>
                    <tr>
                        <td onClick={() => {
                            sort("id")
                        }}>ID
                        </td>
                        <td onClick={() => {
                            sort("url")
                        }}>URL
                        </td>
                        <td onClick={() => {
                            sort("price")
                        }}>Price
                        </td>
                        <td onClick={() => {
                            sort("optimalPrice")
                        }}>Local price
                        </td>
                        <td onClick={() => {
                            sort("returning")
                        }}>Income
                        </td>
                        <td onClick={() => {
                            sort("age")
                        }}>age
                        </td>
                        <td onClick={() => {
                            sort("createdAt")
                        }}>Created at
                        </td>
                        <td onClick={() => {
                            sort("monthlyUsers")
                        }}>Monthly users
                        </td>
                        <td onClick={() => {
                            sort("dr")
                        }}>DR
                        </td>
                        <td onClick={() => {
                            sort("blacklinks")
                        }}>Blacklinks
                        </td>
                        <td onClick={() => {
                            sort("organicKeywords")
                        }}>Organic keywords
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {posts}
                    </tbody>
                    <tfoot/>
                </table>
                <ul className={classes.Next}>
                    {page === 1 ? <li className={classes.Blank}>Prev</li> : <li onClick={() => {
                        changePage(-1)
                    }}>Prev</li>}
                    <li className={classes.Number + " " + classes.ParsedNumber}>{page}</li>
                    {page === maxPages ? <li className={classes.Blank}>Next</li> : <li onClick={() => {
                        changePage(1)
                    }}>Next</li>}
                </ul>
            </div>
        );
    }

};

export default List;