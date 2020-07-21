import React  from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';

const Title = styled.h1`
    color: #fff;
    font-size: 40px;
`;

const Home = () => {
   return(
       <div>
           <Head>
               <title>Home</title>
           </Head>
           <Title> Home </Title>
            <Link href="/users">
                <a>Usuários</a>
            </Link>
       </div>
   )
}

export default Home;