import { useParams } from "react-router-dom";
import Header from "../components/sections/Header/Header";

function BlogCategory() {
    const { slug } = useParams();

    return (
        <>
            <Header></Header>
            <div className="max-w-[1170px] mx-auto px-4 pt-[120px]">
                <h1 className="text-3xl font-bold"> Category slug: {slug}</h1>
            </div>
        </>
    );
}

export default BlogCategory;
