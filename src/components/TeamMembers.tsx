import React, { useState, useEffect } from 'react';
import { X } from './icons/Twitter';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  link: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  bio,
  link,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
  }, [image]);

  return (
    <div className="bg-[#b4b3b1] border border-[#d8d9ec] gap-6 p-3 text-black rounded-lg shadow-md w-full flex-row md:flex items-center justify-between overflow-hidden">
      <div className="md:h-60 lg:h-64 h-fit w-full md:w-64 p-2 border border-[#d8d9ec] rounded-lg bg-white">
        {imageLoaded ? (
          <img
            className="object-cover border border-[#d8d9ec] rounded-lg"
            src={image}
            alt={name}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>
        )}
      </div>
      <div className="flex-col w-full md:mt-0 mt-4 md:w-1/2">
        <div className="py-3 p-4 rounded-md border border-[#d8d9ec] bg-white">
          <p className="text-sm text-black">Bio:</p>
          <p className="text-sm mt-3">{bio}</p>
        </div>
        <div className="flex-col border text-sm border-[#d8d9ec] items-center mt-4 bg-white p-2 rounded-md">
          <h3 className="text-sm">{name}</h3>
          <div className="flex justify-between">
            <p className="text-sm text-[#5e5e5e]">{role}</p>
            <Link to={link}>
              <X className="text-gray-400 text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
