/* eslint-disable max-len */
import { SectionTitle } from "@/components/SectionTitle";
import { Subtitle1 } from "@/components/Subtitle1";
import { Subtitle2 } from "@/components/Subtitle2";
import Image from "next/image";
import { PiBuildingsThin, PiCompassToolThin, PiWarehouseThin } from 'react-icons/pi';

export const AboutResume = () => {
    return (
        <section className="text-center py-10">
            <SectionTitle title="About" complement="EAGV" />
            <div className="flex justify-evenly gap-20 mt-10">
                <div className="text-left">
                    <Subtitle1>we turn ideas into <br /> works of art</Subtitle1>
                    <p className="text-gray-500 leading-6 mt-4 max-w-xs">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className="text-left">
                    <Subtitle1>our <br /> specialization</Subtitle1>
                    <div className="text-5xl my-4 text-isabelline-800">
                        <PiBuildingsThin />
                        <Subtitle2 subtitle="Architecture" />
                    </div>
                    <div className="text-5xl mb-4 text-redwood">
                        <PiWarehouseThin />
                        <Subtitle2 subtitle="Interiors" />
                    </div>
                    <div className="text-5xl mb-4 text-blue-munsel">
                        <PiCompassToolThin />
                        <Subtitle2 subtitle="Planing" />
                    </div>
                </div>
                <div className="max-w-sm w-full h-80 relative">
                    <Image
                        fill
                        src="/assets/about.jpeg"
                        alt="Buildings"
                    />
                </div>
            </div>
        </section>
    );
};

