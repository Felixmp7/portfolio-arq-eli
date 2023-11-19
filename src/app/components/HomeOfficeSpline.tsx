'use client';
import { Application } from '@splinetool/runtime';
import { lazy, Suspense } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

export const HomeOfficeSpline = () => {
    const onLoad = (spline: Application) => {
        spline.setZoom(0.47);
    };

    return (
        <Suspense fallback={(
            <div className='animate-pulse w-full h-full bg-dravys-gray rounded-xl' />
        )}>
            <Spline scene="https://prod.spline.design/p-16leuPuWRmx-FX/scene.splinecode" onLoad={onLoad} />
        </Suspense>
    );
};
