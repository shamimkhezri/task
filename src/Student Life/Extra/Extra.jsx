import Music from "../image/3.png";
import Pen from "../image/2.png";
import firelight from "../image/1.png";
import Puzzle from "../image/4.png";
import Star from "../image/6.png";
import Shimi from "../image/5.png";
function Extra() {
    return (
        <>
            <div>
                <div className="text-center mt-52 m-10">
                    <button  className="text-center border-black border-2 rounded-lg p-1">Our Features</button>
                    <h1 className="text-2xl font-bold my-4">Extracurricular Activities</h1>
                    <p>At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including</p>
                </div>
                <div className="items-center m-10  ">
                    <div className="flex justify-around  mt-10  gap-10 ">

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <img className="bg-orange-200 p-2 rounded-lg" src={firelight} />
                            <h3 className="text-lg text-black font-medium">Science Club</h3>
                            <p className="text-inherit w-80">The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.</p>
                        </div>

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black  cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <img className="bg-orange-200 p-2 rounded-lg" src={Pen} />
                            <h3 className="text-lg text-black font-medium">Sports and Athletics</h3>
                            <p className="w-80">Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.
                            </p>
                        </div>

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <img className="bg-orange-200 p-2 rounded-lg" src={Music} />
                            <h3 className="text-lg text-black font-medium">Art and Creativity</h3>
                            <p className="w-80">Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.</p>
                        </div>
                    </div>
                    <div className="flex justify-around gap-10 mt-10 ">

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <img className="bg-orange-200 p-2 rounded-lg" src={Puzzle} />
                            <h3 className="text-lg text-black font-medium">Music and Performing Arts</h3>
                            <p className="w-80">Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.</p>
                        </div>

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <img className="bg-orange-200 p-2 rounded-lg" src={Shimi} />
                            <h3 className="text-lg text-black font-medium">Language Clubs</h3>
                            <p className="w-80">The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.</p>
                        </div>

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <img className="bg-orange-200 p-2 rounded-lg " src={Star} />
                            <h3 className="text-lg text-black font-medium">Cooking and Culinary Arts</h3>
                            <p className="w-80">Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Extra;