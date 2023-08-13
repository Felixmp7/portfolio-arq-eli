/* eslint-disable max-len */
import { SectionTitle } from "@/components/SectionTitle";
import { Subtitle2 } from "@/components/Subtitle2";
import Image from "next/image";

export const ServicesResume = () => {
    return (
        <section className="text-center py-10 px-40">
            <SectionTitle title="Mis" complement="Servicios" />
            <div className="grid grid-cols-3 gap-20 mt-12 text-left">
                <div className="text-7xl">
                    <Image
                        src="/assets/svg-icons/pencil-rule.svg"
                        alt="Buildings"
                        className="mb-4"
                        width={70}
                        height={70}
                    />
                    <Subtitle2 subtitle="Design" />
                    <p className="text-gray-500 leading-6 text-sm mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="text-7xl">
                    <Image
                        src="/assets/svg-icons/plans-house.svg"
                        alt="Buildings"
                        className="mb-4"
                        width={70}
                        height={70}
                    />
                    <Subtitle2 subtitle="House Plans" />
                    <p className="text-gray-500 leading-6 text-sm mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="text-7xl">
                    <Image
                        src="/assets/svg-icons/keys.svg"
                        alt="Buildings"
                        className="mb-4"
                        width={70}
                        height={70}
                    />
                    <Subtitle2 subtitle="Finishing Works" />
                    <p className="text-gray-500 leading-6 text-sm mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
    );
};

