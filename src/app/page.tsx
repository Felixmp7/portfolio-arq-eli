import { AboutResume } from "@/components/home/AboutResume";
import { MainHeader } from "@/components/home/MainHeader";
import { Projects } from "@/components/home/Projects";
import { ServicesResume } from "@/components/home/ServicesResume";

export default function Home() {
    return (
        <>
            <MainHeader />
            <AboutResume />
            <Projects />
            <ServicesResume />
        </>
    );
}