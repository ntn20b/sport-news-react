import CategoryCard from "../../CategoryCard/CategoryCard";
import football from "../../../assets/soccer-ball-green-grass-soccer-field-generative-ai 1.webp";
import basketball from "../../../assets/close-up-basketball-outdoors 1.webp";
import carSport from "../../../assets/sport-car-is-drifting-track-with-smoke-around-it 1.webp";
import tennis from "../../../assets/tennis.webp";

function Category() {
    const categories = [
        {
            id: 1,
            name: "Football",
            slug: "football",
            image: football,
        },
        {
            id: 2,
            name: (
                <>
                    Basket
                    <br />
                    ball
                </>
            ),
            slug: "basketball",
            image: basketball,
        },
        {
            id: 3,
            name: "Car Sport",
            slug: "car-sport",
            image: carSport,
        },
        {
            id: 4,
            name: "Table Tennis",
            slug: "table-tennis",
            image: tennis,
        },
    ];

    return (
        <section>
            <div className="w-full mx-auto max-w-[1170px] xl:px-0 px-4 xl:pt-[120px] pt-[50px]">
                <h2 className="h2">Category</h2>
                <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-[30px] gap-5 overflow-hidden pt-4">
                    {categories.map((cat, index) => (
                        <CategoryCard key={cat.id} category={cat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Category;
