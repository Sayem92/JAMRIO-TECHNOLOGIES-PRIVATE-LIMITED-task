import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData();
    const { image, likes, owner, tags, text, publishDate } = details;
    const shortDate = publishDate.slice(0, 10);
    // console.log(details)

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Details of Post</h1>

                    <div className="mt-2 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={image} alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-3xl text-blue-500 uppercase">👍{likes}</p>

                            <h1 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                                {text}
                            </h1>

                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                Dogs are one of the most beloved and popular pets in the world, and it's easy to see why. Their affectionate, loyal, and eager-to-please nature make them the perfect companion for people of all ages. With a variety of breeds available, each with their own unique personality and characteristics, it's easy to find the perfect match for your lifestyle. <br /><br />

                                In addition to providing love and companionship, dogs also offer numerous benefits for our physical and mental health. They provide us with opportunities for exercise, help us reduce stress, and can even improve our overall mood and happiness. Their presence can bring comfort and support during difficult times, making them a true asset to any family. <br /><br />

                                Overall, dogs are truly man's best friend and an essential part of many people's lives. Whether you're a seasoned dog lover or just starting to consider adding a furry friend to your family, a dog is sure to bring you endless love, happiness, and joy for many years to come.
                            </p>



                            <div className="flex items-center mt-6">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src={owner?.picture} alt="" />

                                <div className="mx-4">

                                    <h1 className="text-sm text-gray-700 dark:text-gray-200"><span className='uppercase'>
                                        {owner?.title}</span> {owner?.firstName} <span>{owner?.lastName}</span>
                                    </h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{shortDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PostDetails;