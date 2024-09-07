"use client";

import React from "react";

interface ExperienceProps {
  experiences: Record<string, any>[];
}

export const ExperienceItem = ({ experiences }: ExperienceProps) => {
  // odd number experiences to show on left and even number experiences to show on right
  const leftExperiences = experiences.filter((_, i) => i % 2 === 0);
  const rightExperiences = experiences.filter((_, i) => i % 2 !== 0);

  return (
    <>
      {experiences.map((experience, i) =>
        i % 2 === 0 ? (
          <div key={i} className="flex h-48 justify-between">
            {/* LEFT */}
            <div className="w-1/3">
              {/* JOB TITLE */}
              <div className="rounded-b-lg rounded-s-lg bg-white p-3 font-semibold">
                {experience.title}
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">{experience.description}</div>
              {/* JOB DATE */}
              <div className="p-3 text-sm font-semibold text-emerald-400">
                {experience.date}
              </div>
              {/* JOB COMPANY */}
              <div className="w-fit rounded bg-white p-1 text-sm font-semibold">
                {experience.company}
              </div>
            </div>
            {/* CENTER */}
            <div className="flex w-1/6 justify-center">
              {/* LINE */}
              <div className="relative h-full w-1 rounded bg-gray-600">
                {/* LINE CIRCLE */}
                <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-emerald-400"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-1/3"></div>
          </div>
        ) : (
          <div key={i} className="flex h-48 justify-between">
            {/* LEFT */}
            <div className="w-1/3"></div>
            {/* CENTER */}
            <div className="flex w-1/6 justify-center">
              {/* LINE */}
              <div className="relative h-full w-1 rounded bg-gray-600">
                {/* LINE CIRCLE */}
                <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-emerald-400"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-1/3">
              {/* JOB TITLE */}
              <div className="rounded-b-lg rounded-s-lg bg-white p-3 font-semibold">
                {experience.title}
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">{experience.description}</div>
              {/* JOB DATE */}
              <div className="p-3 text-sm font-semibold text-emerald-400">
                {experience.date}
              </div>
              {/* JOB COMPANY */}
              <div className="w-fit rounded bg-white p-1 text-sm font-semibold">
                {experience.company}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
