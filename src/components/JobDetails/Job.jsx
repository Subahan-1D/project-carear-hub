
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type,location,salary } = job;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Google" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 border rounded font-extrabold border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 border rounded font-extrabold border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="mt-3 flex">
                       <h2 className="flex mr-4"><CiLocationOn className="text-xl mr-1"></CiLocationOn>{location}</h2>
                       <h2 className="flex"><HiOutlineCurrencyDollar className="text-xl mr-1"></HiOutlineCurrencyDollar>{salary}</h2>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Job;