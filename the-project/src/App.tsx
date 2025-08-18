
import "./index.css"
import NavBar from "./components/Header.tsx";
import FrontInfoCard from "./components/FrontInfoCard.tsx";
import hands from "./assets/team.jpg"

export default function App() {
    return(
        <>
            <NavBar/>
            <div className="min-h-screen w-full relative
                 bg-gradient-to-t from-purple-500 to-white
                 flex flex-col items-center justify-start
                 text-center gap-10 text-black
                 pt-24 px-8 pb-12"
            >
                <h1 className="text-7xl">
                    Anime Con Management Made Simpler
                </h1>
                <p className="text-3xl">
                    Robust Features. Streamlined Experience. Ease of Use. All at your Fingertips
                </p>

                <div
                    className="grid grid-cols-3 grid-rows-1 gap-20 sm:grid-cols-1 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">

                    <div className="col-start-1 row-start-1 col-span-1 row-span-1">
                        <FrontInfoCard
                        headline={"Volunteer Management"}
                        description={"Onboard Volunteers, Track Room Assignments, Assign Schedules, and Check Them In and Out"}
                        img={hands}
                        />
                    </div>
                    <div className="col-start-2 row-start-1 col-span-1 row-span-1">
                        <FrontInfoCard
                            headline={"Update Guests In Real Time"}
                            description={"Provide Schedules, A Digital Badge, and Maps to guests Right On Their Phone"}
                            img={hands}
                        />
                    </div>
                    <div className="col-start-3 row-start-1 col-span-1 row-span-1">
                        <FrontInfoCard
                            headline={"Vendor & HR Management Tools"}
                            description={"Approve Vendors, Manage Your Team, & Use Our Suite of Project Management Tools"}
                            img={hands}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}