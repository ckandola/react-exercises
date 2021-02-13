import React, {useState, useEffect} from 'react';
import { FaAngleDoubleRight} from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

const Tabs = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);
    const fetchJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    };
    
    useEffect(() => {
        fetchJobs();
    }, []);
    
    if (loading) {
        return <section className="section loading">
            <h1>loading...</h1>
        </section>
    }
    return (
        <h1>Tabs</h1>
    );
};

export default Tabs;