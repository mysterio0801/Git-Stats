import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchPageHeader from './SearchPageHeader';
import SearchPageFooter from './SearchPageFooter';


function Search() {
    const [name, setUsername] = useState({
        userName: ''
    });

    const changeUsername = (e) => {
        setUsername({userName: e.target.value})
    }

    return (
        <>
            <div className="cntnr">
                <SearchPageHeader />
                <form>
                    <div className="form-group">
                        <input type="text" value={name.userName} onChange={changeUsername} placeholder="Enter Username" className="form-control"/>
                    </div>
                    <div  className="text-center">
                        <Link to={'/' + name.userName} className="text-light"><button className="btn btn-dark"> Search  </button> </Link>
                    </div>
                </form>
                {/* <SearchPageFooter /> */}
            </div>
        </>

    )
}

export default Search