import { useParams } from "react-router-dom";
import Header from "../components/sections/Header/Header";

function SingleNews() {
    const { slug } = useParams();

    const post = {
        title: "Заголовок новости из WordPress",
        date: "21 Августа 2026",
        category: "Технологии",
        featuredImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        altText: "Превью статьи",
        content: `
            <p className="mb-4">Это вводный абзац статьи. В WordPress редакторе Gutenberg контент верстается блоками, и API отдаст его в виде готового HTML.</p>
            <h2 className="text-2xl font-bold my-4">Подзаголовок внутри статьи</h2>
            <p className="mb-4">Второй абзац текста. Здесь могут быть ссылки, выделенный текст и другие стандартные элементы форматирования.</p>
        `,
    };

    return (
        <>
            <Header />
            <main className="md:mt-20 mt-8 mb-16">
                <article className="w-full max-w-[1170px] mx-auto xl:px-0 px-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{post.category}</span>
                        <time>{post.date}</time>
                    </div>

                    <h1 className="md:text-4xl text-2xl font-bold text-gray-900 mb-6">
                        {post.title} (slug: {slug})
                    </h1>

                    <div className="w-full max-h-[500px] overflow-hidden rounded-2xl mb-8 shadow-md">
                        <img src={post.featuredImage} alt={post.altText} className="w-full h-full object-cover" />
                    </div>

                    <div className="prose max-w-none text-gray-800 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
            </main>
        </>
    );
}

export default SingleNews;
