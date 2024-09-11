import Link from "next/link";
import DbConnect from "../config/DbConnect";
import Book from "../models/Book";
import Category from "../models/Category";
import BookCard from "../components/BookCard";


export default async function Home() {
  DbConnect();

  let BookData = await Book.find().populate("category")
  let callingCategory = await Category.find()
  return (
    <>
      <div className="Home flex w-full justify-center  flex-col gap-20 h-auto mt-10 ">
        <div className="flex justify-center items-center w-1/3  flex-col ml-[30%]  " >
          <h1 className="text-red-600 text-xl font-serif mb-3">Find your Favourite Books</h1>
          <input type="search" placeholder="Search books...." className="border-teal-600 border py-3 px-2 w-full rounded-lg mb-5" />
          <button type="submit" className="bg-sky-500 px-5 py-3 text-xl text-white rounded-xl hover:bg-sky-600">Search</button>

        </div>

        <div className="w-full   px-10  ">
          <div className="flex gap-2 flex-1 items-center w-1/12">
            {callingCategory.map((cat, i) => <Link href={`/category/${cat._id}`} className="text-slate-800 text-md px-3 py-1 hover:bg-slate-200 bg-white border border-slate-300 rounded-full capitalize text-center">{cat.catTitle}</Link>)}
          </div>
          <h1 className="text-3xl font-semibold font-serif mt-5 px-10 text-rose-500" >Latest Books</h1>
          <div className=" grid grid-cols-5 justify-center gap-5 mt-5 px-10">
            {BookData.map((post, index) => (<BookCard key={index} data={post} />))}</div>
        </div>
      </div>
    </>

  );
}
