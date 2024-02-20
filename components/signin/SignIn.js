import Image from "next/image"
import logo from "../../assets/logo.png"
const SignIn = ({ onClose, setShowModal2 }) => {
    const handleSignupModalOpen = () => {
        onClose();
        setShowModal2(true);
    };
    return (
        <div>
            <div className="flex flex-col justify-center items-center mb-8">
                <Image className="w-60" src={logo} alt="Fauget Music Logo" />
                <h2 className="font-semibold text-4xl mt-8">Sign In</h2>
            </div>

            <form>
                <div className="mb-5">
                    <label for="email" className="block text-[#b1b1b1] font-semibold text-lg pb-3">Email:</label>
                    <input type="email" id="email" className="bg-[#0C0C0C] rounded-lg py-3 text-[#b1b1b1] px-6 w-full" placeholder="example@mail.com" required />
                </div>
                <div className="mb-5">
                    <label for="password" className="block text-[#b1b1b1] font-semibold text-lg pb-3">Password:</label>
                    <input type="password" id="password" className="bg-[#0C0C0C] rounded-lg py-3 text-[#b1b1b1] px-6 w-full" placeholder=".................................." required />
                </div>

                <button type="submit" className="font-semibold text-lg py-3 mt-8 px-20 bg-primary-btn hover:bg-secondary-btn duration-300 border border-black rounded-full">Sign In</button>
            </form>
            <span onClick={handleSignupModalOpen} className="block text-[#b1b1b1] font-semibold text-lg pb-3 mt-8">Don’t have account? Create an account <span className="text-[#0C0C0C] font-bold underline cursor-pointer">Sign Up</span></span>
        </div>
    )
}

export default SignIn