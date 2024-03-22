import blogData from "../blogData";
import PostCard from "./PostCard";

const Posts = () => {
    return (
        <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>
                <p className="max-w-lg mx-auto mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                    quia tempore delect
                </p>
                
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                {blogData.map((post, id) => (
                    <PostCard key={id} {...post} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
