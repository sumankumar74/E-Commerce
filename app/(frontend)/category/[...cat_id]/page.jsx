
import BookCard from "@/app/components/BookCard";
import DbConnect from "@/app/config/DbConnect";
import Book from "@/app/models/Book";
import Category from "@/app/models/Category";
import Link from "next/link";


export default async function Home({params}) {
  DbConnect();
  let {cat_id} = params
  let getCurrentCategory = await Category.findById(cat_id);
  let BookData = await Book.find({category:cat_id})
  let callingCategory = await Category.find();
  return (
    <>
      <div className="Home flex w-full justify-center  flex-col gap-20 h-auto mt-10 ">
        <div className="w-full   px-10  ">
          <div className="flex gap-2 flex-1 items-center w-1/12">
            {callingCategory.map((cat, i) => <Link href={`/category/${cat._id}`} className="text-slate-700 text-md px-3 py-1 hover:bg-slate-200 bg-white border rounded-full text-center">{cat.catTitle}</Link>)}
          </div>
          <h1 className="text-3xl font-semibold font-serif mt-5 px-10 text-cyan-700" >{getCurrentCategory.catTitle} Books</h1>
          <div className=" grid grid-cols-5 justify-center gap-5 mt-5 px-10">
            {BookData.map((post, index) => (<BookCard key={index} data={post} />))}</div>
        </div>
      </div>
    </>

  );
}
