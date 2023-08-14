/* eslint-disable max-len */
import { SectionTitle } from "@/components/SectionTitle";
import { Subtitle1 } from "@/components/Subtitle1";
import { Subtitle2 } from "@/components/Subtitle2";
import Image from "next/image";
import { PiBuildingsThin, PiCompassToolThin, PiWarehouseThin } from 'react-icons/pi';

export const AboutResume = () => {
    return (
        <section className="text-center py-10 px-10 sm:px-20 lg:px-40">
            <SectionTitle title="Sobre" complement="EAGV" />
            <div className="xl:flex xl:justify-between xl:gap-20 mt-12 text-left">
                <div className="xl:mb-0 mb-10">
                    <Subtitle1>we turn ideas into <br /> works of art</Subtitle1>
                    <p className="text-gray-500 leading-6 mt-4 xl:max-w-xs">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div>
                    <Subtitle1>our <br /> specialization</Subtitle1>
                    <div className="flex items-end gap-10 xl:block">
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
                </div>
                <div className="hidden xl:block max-w-sm w-full h-80 relative">
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

