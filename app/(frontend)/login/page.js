
import LoginForm from "../../components/LoginForm"

const page = () => {

    return (
        <>
            <div className="Sign-Up  flex justify-center w-full items-center flex-col bg-pink-200 h-screen">
                <div className="flex justify-start mt-[-15%]">
                    <h1 className="text-4xl font-bold text-cyan-700 font-serif">Log In</h1>
                </div>
                <div className="border p-10 mt-5 border-teal-600 w-1/3 rounded-lg">
                    <LoginForm />
                </div>

            </div >
        </>
    )
}

export default page