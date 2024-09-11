
const ManageUser = ({ userData }) => {

    return (
        <div className='flex justify-center p-10 w-full'>
            <table className='border border-black p-2 text-center w-1/2'  >
                <thead>
                    <tr >
                        <th className='border border-black p-2 text-center'>ID</th>
                        <th className='border border-black p-2 text-center'>FullName</th>
                        <th className='border border-black p-2 text-center'>Email</th>
                        <th className='border border-black p-2 text-center'>Contact</th>
                        <th className='border border-black p-2 text-center'>Password</th>
                        <th className='border border-black p-2 text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>{userData.map((user , index) => {
                    <tr key={index}>
                        <td className='border border-black p-2 text-center'>{index + 1}</td>
                        <td className='border border-black p-2 text-center'>{user.fullName}</td>
                        <td className='border border-black p-2 text-center'>{user.email}</td>
                        <td className='border border-black p-2 text-center'>{user.contact}</td>
                        <td className='border border-black p-2 text-center'>{user.password}</td>
                    </tr>
                })
                }
                </tbody>
            </table>
        </div>
    )
}

export default ManageUser