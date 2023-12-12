import errorImg from "../../../assets/error.png"
import eeverse from "../../../assets/eeverse.png"
import food from "../../../assets/food.png"

const Projects = () => {
    return (
        <div>
            <div className="text-center">
                <button className="btn my-10 text-xl font-semibold border-b-4 border-b-black">Projects</button>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className="h-64 w-full" src={errorImg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Error Byte
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                        <div className="flex justify-between my-5">
                            <button className="btn btn-neutral">Live Link</button>
                            <button className="btn btn-neutral">GitHub</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-64 w-full" src={eeverse} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            EE Verse
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                        <div className="flex justify-between my-5">
                            <button className="btn btn-neutral">Live Link</button>
                            <button className="btn btn-neutral">GitHub</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className="h-64 w-full" src={food} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Q Food
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                        <div className="flex justify-between my-5">
                            <button className="btn btn-neutral">Live Link</button>
                            <button className="btn btn-neutral">GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;