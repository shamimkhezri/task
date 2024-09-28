import Lineimg from "../img/Container(1).png"
function Navigate() {
    return (
        <>
            <div className="m-10">
                <div className="text-center mt-52 m-10">
                    <button className="text-center border-black border-2 rounded-lg p-1">Explore More</button>
                    <h1 className="text-2xl font-bold my-4">Navigate through our Pages</h1>
                    <p className="">Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
                </div>
                <div className=" content-center">
                    <div className="flex  gap-20  justify-around my-12">
                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black  cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-center">
                            <h1 className="text-4xl text-black font-medium text-center">About Us</h1>
                            <img src={Lineimg} />
                            <p className="w-80  mx-36 mt-7">Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
                            <button className="bg-orange-200 p-2 w-96 border-2 border-black  rounded-lg shadow-lg shadow-black mt-10">Learn More </button>
                        </div>
                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black  cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-center">
                            <h1 className="text-4xl text-black font-medium text-center">Academics</h1>
                            <img src={Lineimg} />
                            <p className="w-80 text-center  mx-36 mt-7">Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.</p>
                            <button className="bg-orange-200 p-2 w-96 border-2 border-black  rounded-lg shadow-lg shadow-black mt-10">Learn More </button>
                        </div>
                    </div>
                    <div className="flex  gap-20  justify-around my-12">
                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black  cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  text-center">
                            <h1 className="text-4xl text-black font-medium text-center">Student Life</h1>
                            <img src={Lineimg} />
                            <p className="w-80  mx-36 mt-7">Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.</p>
                            <button className="bg-orange-200 p-2 w-96 border-2 border-black  rounded-lg shadow-lg shadow-black mt-10">Learn More </button>
                        </div>
                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black  cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  text-center">
                            <h1 className=" text-black font-medium text-center text-4xl">Admissions</h1>
                            <img src={Lineimg} />
                            <p className="w-80 text-center mx-36 mt-7">Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.</p>
                            <button className="bg-orange-200 p-2 w-96 border-2 border-black  rounded-lg shadow-lg shadow-black mt-10">Learn More </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navigate;