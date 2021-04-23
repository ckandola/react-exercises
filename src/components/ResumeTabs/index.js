// ** comment and uncomment for tutorial's data file vs my json file

import React, {useState/* , useEffect */} from 'react';
import { FaAngleDoubleRight} from 'react-icons/fa';
import './ResumeTabs.css';
import jobs from './data.json';

// const url = 'https://course-api.com/react-tabs-project'; **

const ResumeTabs = () => {
    // const [loading, setLoading] = useState(true);        **
    // const [jobs, setJobs] = useState([]);                **
    const [value, setValue] = useState(0);

    // const fetchJobs = async () => {                      ** --
    //     const response = await fetch(url);
    //     const newJobs = await response.json();
    //     setJobs(newJobs);
    //     setLoading(false);
    // };
    
    // useEffect(() => {
    //     fetchJobs();
    // }, []);                                              
    
    // if (loading) {
    //     return <section className="tab-section tab-loading">
    //         <h1>loading...</h1>
    //     </section>
    // }                                                    -- **

    const {company, dates, duties, title} = jobs[value];

    return (
        <section className="tab-section">
            <div className="tab-title">
                <h2>Professional Experience</h2>
                <div className="tab-underline"></div>
                <div className="tab-job-center">
                    <div className="tab-btn-container">
                        {jobs.map((job, index) => {
                            return (
                                <button 
                                    key={index} 
                                    className={`tab-job-btn ${index === value && 'tab-active-btn'}`}
                                    onClick={() => setValue(index)}>
                                        {job.title}
                                </button>
                            );
                        })}
                    </div>
                    <article className="tab-job-info">
                        <h3>{title}</h3>
                        <h4>{company}</h4>
                        <p className="tab-job-date">{dates}</p>
                        {duties.map((task, index) => {
                            return (
                                <div key={index} className="tab-job-desc">
                                    <FaAngleDoubleRight className="tab-job-icon"/>
                                    <p className="tab-job-duty">{task}</p>
                                </div>
                            );
                        })}
                    </article>
                </div>
            </div>
        </section >
    );
};

export default ResumeTabs;
