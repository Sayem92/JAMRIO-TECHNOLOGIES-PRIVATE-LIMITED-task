import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { image, likes, text, id } = post;
    const shortTitle = text?.slice(0, 35);


    return (
        <div>
            <div className="">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={image} alt="" />
            </div>

            <h1 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
                👍<span>{likes}</span>
            </h1>
            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                {shortTitle}...
            </h1>

            <hr className="w-32 my-2 text-blue-500" />

            <p className="text-sm text-gray-500 dark:text-gray-400">
                Dogs are known for their loyalty, love and companionship. They bring happiness and joy to people's lives and are considered part of ...
            </p>
            
            <Link to={`/details/${id}`}>
                <button className="px-6 py-2 mt-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Show more
                </button>
            </Link>
        </div>

    );
};

export default Post;