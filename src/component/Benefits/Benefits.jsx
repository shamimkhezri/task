import Icon1 from "../img/Icon.png";
import Icon2 from "../img/Icon(1).png";
import Icon3 from "../img/Icon(2).png";
import Icon4 from "../img/Icon(3).png";
import Icon5 from "../img/Icon(4).png";
import Icon6 from "../img/Vector(1).png";
import Icon7 from "../img/Icon Container.png";
function Benefits() {
    return (
        <>
            <div className="text-center mt-52 m-10">
                <button className="text-center border-black border-2 rounded-lg p-1">Children Deserve Bright Future</button>
                <h1 className="text-2xl font-bold my-4">Our Benefits</h1>
                <p>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
            </div>
            <div className="items-center m-10">
                <div className="flex justify-around  mt-10  gap-10 ">

                    <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                        <img className="bg-orange-200 p-2 rounded-lg" src={Icon1}/>
                        <h3 className="text-lg text-black font-medium">Holistic Learning Approach</h3>
                        <p className="text-inherit w-80">Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.</p>
                    </div>

                    <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black  cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                        <img className="bg-orange-200 p-2 rounded-lg" src={Icon6} />
                        <h3 className="text-lg text-black font-medium">Experienced Educators</h3>
                        <p className="w-80">Our passionate and qualified teachers create a supportive and stimulating learning environment.
                        </p>
                    </div>

                    <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                        <img className="bg-orange-200 p-2 rounded-lg" src={Icon5} />
                        <h3 className="text-lg text-black font-medium">Nurturing Environment</h3>
                        <p className="w-80">We prioritize safety and provide a warm and caring atmosphere for every child.</p>
                    </div>
                </div>
                <div className="flex justify-around gap-10 mt-10 ">

                    <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                        <img className="bg-orange-200 p-2 rounded-lg" src={Icon4} />
                        <h3 className="text-lg text-black font-medium">Play-Based Learning</h3>
                        <p className="w-80">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    </div>

                    <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                        <img className="bg-orange-200 p-2 rounded-lg" src={Icon2} />
                        <h3 className="text-lg text-black font-medium">Individualized Attention</h3>
                        <p className="w-80">Our small class sizes enable personalized attention, catering to each child's unique needs.</p>
                    </div>

                    <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                        <img className="bg-orange-200 p-2 rounded-lg " src={Icon3} />
                        <h3 className="text-lg text-black font-medium">Parent Involvement</h3>
                        <p className="w-80">We foster a strong parent-school partnership to ensure seamless communication and collaboration.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Benefits;