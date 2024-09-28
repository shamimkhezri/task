import Headimg from "../../img/Image Container.png";
function Main() {
    return (
        <>
            <div className="flex m-10 gap-16 ">
                <div className="w-3/6">
                    <img src={Headimg} />
                </div>
                <div className="w-3/6 mt-48">
                    <p className="text-xl font-medium">Welcome to little Learners Academy</p>
                    <hr className="w-auto "/>
                    <h1 className="text-2xl font-bold  w-4/5">Where Young Minds Blossom and  <span className="text-amber-500">Dreams Take Flight.</span></h1>
                    <p className="w-96 mt-8">Our Kinder garden school provides a nurturing and stimulating environment,fostering a love for learning that lasts a lifetime. join us as we embark on an exciting educational journery together!</p>
                    <div className="  flex gap-20  shadow-xl p-3 shadow-orange-500 content-center rounded-lg mt-8 bg-orange-200 pl-10 border-2 font-bold w-auto ">
                        <div className="">
                        <h1>+7000</h1>
                        <p>students Passed out </p>
                        </div>
                        <div>
                        <h1>+37</h1>
                        <p>Awards & Recognitions</p>
                        </div>
                        <div>
                        <h1>+15</h1>
                        <p>Experience Educators</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;