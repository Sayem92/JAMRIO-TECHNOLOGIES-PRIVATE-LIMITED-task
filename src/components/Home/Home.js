import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Post from './Post';

const Home = () => {
    const [allPost, setAllPost] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetch(`https://dummyapi.io/data/v1/post?page=1&limit=5`, {
            headers: {
                "content-type": "application/json",
                "app-id": "63e4cdd09eb781424646ebe7"
            }
        })
            .then(res => res.json())
            .then(data => {
                setAllPost(data.data);
                setLoader(false);
            })
    }, []);

    // console.log(allPost)
    if (loader) {
        return <Loader></Loader>
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Unleashing the Love: Exploring the Joys of Dog Ownership</h1>

                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                            "Dogs are known for their loyalty, love and companionship. They bring happiness and joy to people's lives and are considered part of the family by many owners."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">

                        {
                            allPost?.map(post => <Post
                                key={post.id}
                                post={post}
                            ></Post>)
                        }

                    </div>
                </div>
            </section>
        </div>

    );
};

export default Home;