'use client';

import {
  AvatarGroup,
  AvatarGroupTooltip,
} from '@/components/animate-ui/components/animate/avatar-group';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

const AVATARS = [
  {
    src: '/images/atishay-jain.png',
    fallback: 'AJ',
    tooltip: 'Atishay Jain',
  },
  {
    src: '/images/prateek-somani.png',
    fallback: 'PS',
    tooltip: 'Prateek Somani',
  },
  {
    src: '/images/sanam-makkar.png',
    fallback: 'SM',
    tooltip: 'Sanam Makkar',
  },
  {
    src: '/images/surya-roy.png',
    fallback: 'SR',
    tooltip: 'Surya Roy',
  },
];

export default function DemoAnimateAvatarGroup() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Our Team</h3>
      <AvatarGroup>
        {AVATARS.map((avatar, index) => (
          <AvatarGroupTooltip key={index} tooltip={avatar.tooltip}>
            <Avatar className="border-2 border-white w-12 h-12">
              <AvatarImage src={avatar.src} alt={avatar.tooltip} />
              <AvatarFallback className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">{avatar.fallback}</AvatarFallback>
            </Avatar>
          </AvatarGroupTooltip>
        ))}
      </AvatarGroup>
      <p className="text-sm text-gray-600">Hover over avatars to see names</p>
    </div>
  );
}