import { useEffect, useState } from "react";
import Job from "../JobDetails/Job";
import { data } from "autoprefixer";

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([])
    // this is not the best way to load show all data 
    const [dataLength,setDataLength] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl text-center">Featured Jobs : {jobs.length}</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 mt-10 mb-10 gap-6">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job> )
                }
            </div>
            <div className="text-center">
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
            </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;