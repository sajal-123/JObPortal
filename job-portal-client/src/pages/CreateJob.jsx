import { useState } from "react";
import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable";
export default function CreateJob() {
    // useForm hook to manage form state and validation
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
    } = useForm();

    // Callback function to handle form submission
    const onSubmit = (data) => {
        data.skills = selectedOptions;
        console.log(data);
        fetch("http://localhost:5000/post-jobs", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) })
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                if (result.acknowledged=== true){
            alert("Jobs Posted SuccessFully!!!")
        } reset();
    })
}

const [selectedOptions, setSelectedOptions] = useState(null)
// Some Default options for creatable
const options = [
    { value: "Javascript", label: "JavaScript" },
    { value: "Typescript", label: "TypeScript" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "Csharp", label: "C#" },
    { value: "Ruby", label: "Ruby" },
    { value: "Go", label: "Go" },
    { value: "Swift", label: "Swift" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "PHP", label: "PHP" },
    { value: "Rust", label: "Rust" },
    { value: "Cplusplus", label: "C++" },
    { value: "React", label: "React" },
    { value: "Angular", label: "Angular" },
    { value: "Vue", label: "Vue.js" },
    { value: "Svelte", label: "Svelte" },
    { value: "Ember", label: "Ember.js" },
    { value: "Backbone", label: "Backbone.js" },
    { value: "Meteor", label: "Meteor" },
    { value: "Apollo", label: "Apollo" },
    { value: "Flutter", label: "Flutter" },
    { value: "Dart", label: "Dart" },
    { value: "Swiftui", label: "SwiftUI" },
    { value: "Kotlinmultiplatform", label: "Kotlin Multiplatform" },
    { value: "Rn", label: "React Native" },
    { value: "Ionic", label: "Ionic" },
    { value: "Flutterweb", label: "Flutter for Web" },
    { value: "Electron", label: "Electron" },
    { value: "Nwjs", label: "NW.js" },
    { value: "Gatsby", label: "Gatsby" },
    { value: "Nextjs", label: "Next.js" },
    { value: "Nuxtjs", label: "Nuxt.js" },
    { value: "Express", label: "Express" },
    { value: "Django", label: "Django" },
    { value: "Flask", label: "Flask" },
    { value: "Rails", label: "Ruby on Rails" },
    { value: "Laravel", label: "Laravel" },
    { value: "Spring", label: "Spring" },
    { value: "Deno", label: "Deno" },
    { value: "Nestjs", label: "Nest.js" },
    { value: "Graphql", label: "GraphQL" },
    { value: "Rest", label: "REST" },
    { value: "Websocket", label: "WebSocket" },
    { value: "Socketio", label: "Socket.IO" },
    { value: "Golanggrpc", label: "gRPC (Go)" },
    { value: "Nodegrpc", label: "gRPC (Node.js)" },
    { value: "Firebase", label: "Firebase" },
    { value: "Aws", label: "AWS" },
    { value: "Azure", label: "Azure" },
    { value: "Googlecloud", label: "Google Cloud" },
    { value: "Docker", label: "Docker" },
    { value: "Kubernetes", label: "Kubernetes" },
    { value: "Terraform", label: "Terraform" },
    { value: "Ansible", label: "Ansible" },
    { value: "Kafka", label: "Kafka" },
    { value: "Rabbitmq", label: "RabbitMQ" },
    { value: "Redis", label: "Redis" },
    { value: "Mongodb", label: "MongoDB" },]

// Render the form
return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-2">
        <div className="bg-[#FAFAFA] py-10px-4 lg:px-4">
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">

                {/* First row */}

                <div className="create-job-flex">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Job Title</label>
                        <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className="create-job-input" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Comapany Name</label>
                        <input type="text" defaultValue={"Ex:Microsoft"} {...register("companyName")} className="create-job-input" />
                    </div>
                </div>

                {/* Second row */}

                <div className="create-job-flex">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Minimum Salary</label>
                        <input type="text" placeholder="$20K" {...register("minPrice")} className="create-job-input" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Maximum Salary</label>
                        <input type="text" placeholder="$100K" {...register("maxPrice")} className="create-job-input" />
                    </div>
                </div>

                {/* Third row */}

                <div className="create-job-flex">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Slary Type</label>
                        <select {...register("salaryType")} className="create-job-input">
                            <option value="">Choose Your Salary</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Job Location</label>
                        <input type="text" placeholder="Ex:NewYork" {...register("jobLocation")} className="create-job-input" />
                    </div>
                </div>

                {/* Fourth row */}

                <div className="create-job-flex">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Job Posting date</label>
                        <input type="date" placeholder="Ex:2023-11-10" {...register("postingDate")} className="create-job-input" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Experience Level</label>
                        <select {...register("experienceLevel")} className="create-job-input">
                            <option value="">Choose Your Experience</option>
                            <option value="Any experience">Any experience</option>
                            <option value="Internship">Internship</option>
                            <option value="Work remotely">Work remotely</option>
                        </select>
                    </div>
                </div>

                {/* fifth row */}

                <div>
                    <label className="block mb-2 text-lg">Required skill Sets</label>
                    <CreatableSelect defaultInputValue={selectedOptions} onChange={setSelectedOptions} options={options}
                        isMulti className="create-job-input py-4" />
                </div>

                {/* 6th Row */}


                <div className="create-job-flex">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Company Logo</label>
                        <input type="url" placeholder="Paste Your Company Logo URL : https://meta.wikimedia.org/wiki/Special:MyLanguage/Main_Page" {...register("companyLogo")} className="create-job-input" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Employement Type</label>
                        <select {...register("employmentType")} className="create-job-input">
                            <option value="">Choose Any One</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                    </div>
                </div>

                {/* 7th Row */}
                <div className="w-full">
                    <label className="block mb-2 text-lg">Job Description</label>
                    <textarea {...register("description")} className=" w-full pl-3 py-1.5 focus:outline-none" rows={6} placeholder="Job description" />
                </div>

                {/* 8 th Row */}
                <div className="w-full">
                    <label className="block mb-2 text-lg ">Job Posted By</label>
                    <input type="email"
                        placeholder="Enter Your Email"
                        {...register("postedBy")} className="create-job-input" />
                </div>


                <input type="submit" className="block-mt-12 bg-sky-700 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" />
            </form>
        </div>
    </div>
)
}