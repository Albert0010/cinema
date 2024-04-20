"use client"
import React from 'react';
import {Timeline, TimelineProps} from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import moment from 'moment';
import { usePathname, useRouter } from "next/navigation";
import { sortEventsByEndDate } from '@/constants/constants';

export interface ITemplateDemoProps extends TimelineProps{
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
    events?: ITemplateDemoProps[];
    schedule_id?: number;
}

export default function MoviesTimeLine({events}: ITemplateDemoProps) {
    const {push} = useRouter();
    const pathname = usePathname ();
    const handleNavigate = (id?:number) => {
        push(`${pathname}/${id}`);
    }
    const customizedMarker = ({icon}: ITemplateDemoProps) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 bg-[#9C27B0] p-2 rounded-2xl" >
                <i className={icon}></i>
            </span>
        );
    };

    const customizedContent = ({ image, status, date, schedule_id }: ITemplateDemoProps) => {
        return (
            <Card title={status} subTitle={()=>{
                return <p>Start Date: {moment(date).format('HH:mm A')}</p>
            }}>
                { image && <img src={`${image}`} alt={image} width={200} className="shadow-1" />}
                <Button onClick={() => handleNavigate(schedule_id)} label="Sea Seats" className="border border-blue-500 mt-4 p-2"></Button>
            </Card>
        );
    };

    return (
        <div className="card">
            <Timeline value={sortEventsByEndDate(events || [])} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}
