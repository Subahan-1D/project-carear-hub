import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import Applide from "../Applied/Applide";
import { FaChevronDown } from "react-icons/fa";


const ApplidJobs = () => {
    const jobs = useLoaderData();
    const [applideJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([])

const handleJobsFilter = filter =>{
    if(filter === 'all'){
        setDisplayJobs(applideJobs)
    }
    else if(filter === 'remote'){
        const remoteJobs  = applideJobs.filter(job => job.remote_or_onsite === 'Remote')
        setDisplayJobs(remoteJobs)
    }
    else if( filter === 'onsite'){
        const onsiteJobs = applideJobs.filter(job => job.remote_or_onsite === 'Onsite')
        setDisplayJobs(onsiteJobs)
    }
}

    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobsId.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobsId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
            // console.log(jobsApplied, jobs, storedJobsId)
        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-10">Applied Jobs</h2>
            <div className="text-end">
                <details className="dropdown">
                    <summary className="m-1 btn btn-end text-2xl">Filter By <FaChevronDown></FaChevronDown> </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleJobsFilter('all')}><a>Remote</a></li>
                        <li onClick={()=>handleJobsFilter('remote')}><a>Onsite</a></li>
                        <li onClick={()=>handleJobsFilter('onsite')}><a>All</a></li>
                    </ul>
                </details>
            </div>
            {
                displayJobs.map(job => <Applide key={job.id} job={job}></Applide>)
            }
        </div>
    );
};

export default ApplidJobs;