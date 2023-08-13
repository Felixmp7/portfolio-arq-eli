import { AboutResume } from "@/components/home/AboutResume";
import { MainHeader } from "@/components/home/MainHeader";
import { ServicesResume } from "@/components/home/ServicesResume";

export default function Home() {
    return (
        <>
            <MainHeader />
            <AboutResume />
            <ServicesResume />
        </>
    );
}
