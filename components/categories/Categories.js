import { podcastCategoriesData } from "@/data/podcastCategoriesData"

const Categories = () => {
    return (
        <div className="space-x-5 mt-16">
            {podcastCategoriesData?.map(category => <button key={category._id} className='font-semibold text-lg py-4 px-14 bg-secondary-bg hover:bg-primary-btn duration-300  rounded-full'>{category.category}</button>)}
        </div>
    )
}

export default Categories