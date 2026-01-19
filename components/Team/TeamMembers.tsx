/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { aboutTeamMembersBio } from '@/site-contents/about/about';

// Static team members data


async function TeamMembers() {
    return (
        <div className="team-members-wrapper flex flex-col sm:flex-row sm:flex-wrap justify-center w-full gap-6">
            {aboutTeamMembersBio.map((member: any) => (
                <div
                    className="members flex flex-col items-center p-4  rounded-lg shadow-md w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]"
                    key={member._id}
                    data-aos="zoom-out-right"
                >
                    <div className="usrImg place-items-center" >
                        <div className="outer-border-line p-3 border-4 border-blue-900 rounded-full">
                            <div
                                className="usrimg h-32 w-32 bg-no-repeat bg-center bg-cover rounded-full"
                                style={{ backgroundImage: `url(${member.img})` }}
                            ></div>
                        </div>
                    </div>

                    <div className="usr-role mt-4 font-semibold text-lg text-center">
                        {member.role}
                    </div>

                    <div className="bio text-center text-sm text-gray-600 mt-2">
                        <p>{member.bio}</p>
                    </div>

                    <div className="usr-social-media flex flex-row gap-3 bg-blue-900 text-white p-3 mt-4 rounded-md">
                        {member.facebook && (
                            <span className="fb">
                                <Link href={member.facebook}><FaFacebookSquare size={20} /></Link>
                            </span>
                        )}
                        {member.linkedin && (
                            <span className="linkedin">
                                <Link href={member.linkedin}><FaLinkedin size={20} /></Link>
                            </span>
                        )}
                        {member.x && (
                            <span className="x">
                                <Link href={member.x}><FaXTwitter size={20} /></Link>
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>

    )
}

export default TeamMembers