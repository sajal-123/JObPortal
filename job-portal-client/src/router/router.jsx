import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import App from "../App";
import CreateJob from "../pages/CreateJob";
import MyJobs from "../pages/MyJobs";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}  >
            <Route path='' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/post-job' element={<CreateJob />} />
            <Route path='/my-job' element={<MyJobs />} />
        </Route>
    )
)
export default router;