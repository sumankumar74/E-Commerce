import Link from 'next/link'
import { handleBookDelete } from '../action';

const ManageBooks = ({ data, }) => {
    return (
        <div className='flex flex-col p-10 w-full'>
            <div className='flex justify-between mb-5'>
                <h1 className='text-3xl font-semibold text-black  py-1 px-4 rounded-xl'>Manage Books ({data.length})</h1>
                <Link href="/admin/Books/insert" className='text-4xl font-semibold text-black  py-1 px-4 rounded-xl'>Insert Books</Link>
            </div>
            <table className='border border-black w-full'>
                <thead>
                    <tr>
                        <th className='border border-black p-2 text-center'>Id</th>
                        <th className='border border-black p-2 text-center'>Title</th>
                        <th className='border border-black p-2 text-center'>Author</th>
                        <th className='border border-black p-2 text-center'>Price</th>
                        <th className='border border-black p-2 text-center'>Discount Price</th>
                        <th className='border border-black p-2 text-center'>Status</th>
                        <th className='border border-black p-2 text-center'>Category</th>
                        <th className='border border-black p-2 text-center'>Action</th>
                    </tr>

                </thead>
                <tbody>{
                    data.map((book, index) => {
                        let id = book._id;
                        let handleDeleteWithId = handleBookDelete.bind(null,id);
                        return (
                            <tr key={index}>
                                <td className='border border-black text-center p-2' >{index + 1}</td>
                                <td className='border border-black text-center p-2' >{book.title}</td>
                                <td className='border border-black text-center p-2' >{book.author}</td>
                                <td className='border border-black text-center p-2' >{book.price}</td>
                                <td className='border border-black text-center p-2' >{book.discountPrice}</td>
                                <td className='border border-black text-center p-2' >{book.status}</td>
                                <td className='border border-black text-center p-2' >{book.category}</td>
                                <td className='border border-black text-center p-2 flex ' >
                                    < form action={handleDeleteWithId} method='POST' >
                                        <button type='submit' className='bg-red-600 p-1 rounded-md cursor-pointer text-white '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                        </svg>
                                        </button>
                                    </form >
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>

            </table>
        </div >
    )
}

export default ManageBooks
