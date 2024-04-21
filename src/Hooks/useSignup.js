import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const colleges = [
    "Akshaya College, Puttur",
    "Alva's College, Moodubidre",
    "Canara College, Mangalore",
    "Carmel Degree College, Bantwal",
    "Dr. NSAM First Grade College, Nitte",
    "Govinda Das College, Surathkal",
    "Mahatma Gandhi Memorial College, Udupi",
    "Nehru Memorial College (NMC), Sullia",
    "Padua Degree College, Mangalore",
    "Sacred Heart College, Madanthyar",
    "SDM College of Business Management, Mangalore",
    "Sharada College, Mangalore",
    "Shree Devi College, Mangalore",
    "Shree Devi College of Information Science, Mangalore",
    "Sri Bhuvanendra College, Karkala",
    "Sri Mahaveera College, Moodbidri",
    "Sri Venkataramana Swamy College, Bantwal",
    "Srinivas First Grade College, Mangalore",
    "Srinivas Institute of Computer Science and Information Science, Mangalore",
    "St. Agnes College, Mangalore",
    "St. Aloysius College (Deemed to be University), Mangalore",
    "St. Philomena College, Puttur",
    "Vivekananda College, Puttur",
    "Yenepoya Institute of Arts, Science, Commerce and Management",
];

function useSignup() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const signupverify = async ({ college, email, password, confirmpassword }) => {

        const pass = errhandle(college, email, password, confirmpassword);
        setLoading(true);

        if (!pass) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                '/api/user/register',
                {
                    email,
                    password,
                    collegeName: college,
                },
            );
            if (!response.data) {
                console.log('No response!');
                toast.error("No response!");
            }
            toast.success(response.data.message);
            console.log("Success: " + response.data.message);
            navigate('/register')
        } catch (error) {
            if (error.response && error.response.status >= 500) {
                console.log('Something went wrong!');
                toast.error("Something went wrong!");
            }
            else if (error.message) {
                toast.error(error.response.data.message);
                console.log(error.message);
            }
            else {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return { loading, signupverify };
}

function errhandle(college, email, password, confirmpassword) {
    if (!college || !email || !password || !confirmpassword) {
        toast.error("Please fill all the fields !");
        return false;
    }
    if (!colleges.includes(college)) {
        toast.error("Invalid college selection");
        return;
    }
    if (password !== confirmpassword) {
        toast.error("Passwords do not match");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password should have at least 6 characters");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        toast.error("Enter a valid email address");
        return false;
    }
    return true;
}

export default useSignup;
