import { AboutResume } from "@/components/home/AboutResume";
import { MainHeader } from "@/components/home/MainHeader";

export default function Home() {
    return (
        <>
            <MainHeader />
            <div className="px-40">
                <AboutResume />
            </div>
        </>
    );
}
