import React from "react";

function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://i.pinimg.com/736x/56/7b/0e/567b0e4aedd0c5e5173899a1050b0020.jpg" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        The Dark Knight Trilogy is a British-American superhero film trilogy based on the DC Comics character Batman. The trilogy consists of Batman Begins (2005), The Dark Knight (2008) and The Dark Knight Rises (2012), directed by Christopher Nolan.
                    </h5>
                </a>
                <div className="flex items-center justify-center mt-2">
                    <a
                        href="https://www.imdb.com/list/ls066259178/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Know More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;