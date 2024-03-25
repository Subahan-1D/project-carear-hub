
import { FaLocationDot } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi2";
const Applide = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className="mt-10 border">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="bg-gray-300 w-56 h-56 rounded-md border mt-5 "><img className="" src={logo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-bold border border-[#7E90FE] text-[#7E90FE] mr-2 rounded-md">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-bold border border-[#7E90FE] text-[#7E90FE] rounded-md">{job_type}</button>
                    </div>
                    <div className="mt-3 flex">
                        <h6 className="flex mr-4"><FaLocationDot className="text-xl mr-1"></FaLocationDot>{location}</h6>
                        <h6 className="flex"><HiCurrencyDollar className="text-xl mr-1"></HiCurrencyDollar>{salary}</h6>
                    </div>
                    <div className="card-actions justify-end items-center ">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Applide;