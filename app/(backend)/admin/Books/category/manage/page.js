import MangeCategory from "@/app/components/MangeCategory"
import DbConnect from "@/app/config/DbConnect";
import Category from "@/app/models/Category";

DbConnect();

export default async function Home() {
    
    let callingCat = await Category.find()
    return (
        <div className="flex w-full p-10  h-[800px] ">
            <MangeCategory callingCat={callingCat} />
        </div>
    )
}