'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Button } from '@/components/ui/button';

const CandidatesHeroSection = () => {
  useLayoutEffect(() => {
    const text = new SplitType('#candidates_overview_title');
    gsap.from('.char', {
      y: 100,
      stagger: 0.05,
      duration: 0.5,
      rotate: 25,
      ease: 'back.out(1.7)',
    });
    gsap.fromTo(
      '#candidates_overview_hero_content',
      {
        y: 200,
        duration: 0.5,
        ease: 'back.out(1.7)',
      },
      {
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      },
    );
    gsap.fromTo(
      '#candidates_overview_hero_btn',
      {
        scale: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      },
      {
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.7)',
      },
    );
  }, []);
  return (
    <div className="container py-6 lg:px-16 xl:px-20">
      <div className="pb-[120px] pt-[9rem] text-center">
        <h1
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            lineHeight: '6rem',
          }}
          id="candidates_overview_title"
          className="candidates_overview_title text-[80px] font-bold"
        >
          Find the job made for you.
        </h1>
        <div id="candidates_overview_hero_content" className="">
          <p className="py-6 text-[22px]">
            We make it easy to find whats next.
            <br />
            Browse over 100,000 jobs — from top companies to fast-growing
            startups.
          </p>
          <div className="flex items-center justify-center gap-5">
            <Button
              id="candidates_overview_hero_btn"
              className="bg-blue-midnight_blue text-white"
            >
              Create your profile
            </Button>
            <Button
              id="candidates_overview_hero_btn"
              variant="outline"
              className=""
            >
              Search jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesHeroSection;
