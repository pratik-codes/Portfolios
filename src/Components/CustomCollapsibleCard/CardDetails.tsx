import React from "react";

interface Props {
  details: any;
  type: string;
  techStack: Array<string>;
  skillsTech: Array<string> | null;
  skillsTechFamiliar: Array<string> | null;
}

const CardDetails: React.FC<Props> = ({
  details,
  type,
  techStack,
  skillsTech,
  skillsTechFamiliar,
}) => {
  return (
    <div>
      {/* history section */}
      {type === "history" &&
        details.map((detail: any) => {
          return <li>{detail}</li>;
        })}
      {techStack.length > 0 && (
        <>
          <h1 className="font-bold text-gray-500 mt-4">Tech stack used:</h1>
          <div className="mt-5">
            {techStack.map((tech: any) => {
              return (
                <span className="inline-block cursor-pointer bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4 mb-2">
                  #{tech}
                </span>
              );
            })}
          </div>
        </>
      )}

      {/* skills section */}
      {type === "skills" && (
        <>
          {skillsTech &&
            skillsTech.map((tech: any) => {
              return (
                <span className="inline-block cursor-pointer bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4 mb-2">
                  #{tech}
                </span>
              );
            })}
          <h1 className="font-bold text-gray-500 my-4">Familiar with:</h1>
          {skillsTechFamiliar &&
            skillsTechFamiliar.map((tech: any) => {
              return (
                <span className="inline-block cursor-pointer bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4 mb-2">
                  #{tech}
                </span>
              );
            })}
        </>
      )}
    </div>
  );
};

export default CardDetails;
