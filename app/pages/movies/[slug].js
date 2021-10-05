import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import { PrismaClient } from "@prisma/client";
const prisma  = new PrismaClient();

export const getStaticPaths = async () => {
    const  slugs = await prisma.movie.findMany();


    const paths = slugs.map((slug)=> {
        return {
            params: {
                slug: slug.slug.toString()
            }
        }
    });

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const movie = await prisma.movie.findFirst({
        where:{
            slug: slug
        }
    });

    return {
        props: {
            movie : movie
        }
    }
}



export default function Movies({ movie }){
    return(
        <div className={styles.container}>
            <Head>
                <title>{ movie.title }</title>
            </Head>
            <main>
                <h2>{ movie.title }</h2>
            </main>
        </div>
    );
}
