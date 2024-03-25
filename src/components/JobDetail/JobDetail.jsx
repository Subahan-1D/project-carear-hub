import { useLoaderData, useParams } from "react-router-dom";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { MdForwardToInbox } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetail = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You Have Applied Successfully')
    }
    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 space-y-2 ">
                    <h1><span className="font-bold">Job Description :</span> {job.job_description}</h1>
                    <h1><span className="font-bold">Job Resposibility :</span> {job.job_responsibility}</h1>
                    <h1><span className="font-bold">Educational Requirements:</span> <br /> {job.educational_requirements}</h1>
                    <h1><span className="font-bold">Experience : </span> <br /> {job.experiences}</h1>
                </div>
                <div className="border mt-2">
                    <h2 className="text-xl  font-bold">Job Detail</h2>
                    <hr />
                    <p className="flex  "><PiCurrencyCircleDollarLight className="mt-1 text-2xl"></PiCurrencyCircleDollarLight> <span className="font-semibold mt-1">Salary :</span> <p className="mt-1"> {job.salary} </p></p>
                    <p className="flex mt-2 "><MdForwardToInbox className="mt-1 text-xl"></MdForwardToInbox> <span className="font-semibold mt-1">Job Title :</span> <p className="mt-1"> {job.job_title}</p></p>
                    <h2 className="text-xl  font-bold"> Contact Information</h2>
                    <hr />
                    <p className="flex mt-2 "><MdOutlinePhoneInTalk className="mt-1 text-2xl"></MdOutlinePhoneInTalk> <span className="font-semibold mt-1">Phone : </span> <p className="mt-1"> {job.contact_information.phone}</p></p>
                    <p className="flex mt-2 "><MdEmail className="mt-1 text-2xl"></MdEmail> <span className="font-semibold mt-1">Email : </span> <p className="mt-1"> {job.contact_information.email}</p></p>
                    <p className="flex mt-2 "><FaLocationDot className="mt-1 text-2xl"></FaLocationDot> <span className="font-semibold mt-1">Email : </span> <p className="mt-1"> {job.contact_information.address.slice(0, 20)}</p></p>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetail;