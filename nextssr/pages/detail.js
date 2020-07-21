import React from 'react';
import axios from 'axios';

const Detail = ( { user } ) => (
    <div>
        <h1>{user.login}</h1>
        <img src={user.avatar_url} width="400"/>
    </div>
);


Detail.getInitialProps = async ({ query }) => {
    const res = await axios.get(
        `https://api.github.com/users/${query.user}`
    );


    return { user: res.data };
}

export default Detail;