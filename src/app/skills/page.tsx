"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 75, color: "#FF8000" },
    { name: "CSS", percentage: 85, color: "#FF8000" },
    { name: "TypeScript", percentage: 80, color: "#FF8000" },
    { name: "Next.js", percentage: 90, color: "#FF8000" },
  ];

  return (
    <div>
      
      <div className="bg-black">
        <h1 className="text-orange-500 font-extrabold text-center h-16 py-6">
          OUR SKILLS
        </h1>
        <p className="text-orange-500 font-semibold text-center py-5">
          These are the technologies we excel in:
        </p>
      </div>

    
      <div className="flex flex-wrap justify-center gap-8 py-16 bg-black">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="w-40 h-40 bg-gray-800 text-white flex justify-center items-center rounded-full"
          >
            <CardHeader className="text-center">
              {/* Circular Progress */}
              <div
                className="relative w-32 h-32 rounded-full"
                style={{
                  background: `conic-gradient(${skill.color} ${
                    skill.percentage * 3.6
                  }deg, #E5E7EB 0deg)`,
                }}
              >
                <div className="absolute inset-2 bg-black rounded-full flex flex-col justify-center items-center">
                  <span className="text-2xl font-bold">{skill.percentage}%</span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
