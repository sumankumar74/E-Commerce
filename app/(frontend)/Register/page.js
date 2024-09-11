import AdminRegister from '@/app/components/AdminRegister';
import DbConnect from '@/app/config/DbConnect';
import { redirect } from 'next/navigation';

const page = async() => {
  DbConnect();

  const handleSubmit = async (formData) => {
      "use server"
      let fullName = formData.get("fullName")
      let email = formData.get("email")
      let contact = formData.get("contact")
      let password = formData.get("password")

      let data = { fullName, email, contact, password }

      let res = await fetch("http://localhost:3000/api/admin/register", { method: "POST", body:JSON.stringify(data) })
      const register = await res.json()
      redirect("/login")
  }

  return (
    <>
      <div className='flex justify-center items-center h-screen mt-[-5%]'>
        <AdminRegister handleSubmit={handleSubmit} />
      </div>
    </>
  )
}

export default page