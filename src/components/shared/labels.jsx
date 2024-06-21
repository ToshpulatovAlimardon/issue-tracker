import { defaultLabels } from "@/constants";
import React from "react";
import { Badge } from "../ui/badge";

const Labels = () => {
  
  const LabelBg = (badge) => {
    switch (badge.color) {
      case "red":
        return `bg-red-500`;
      case "blue":
        return `bg-blue-500`;
      case "cyan":
        return `bg-cyan-500`;
      case "orange":
        return `bg-orange-500`;
      case "lime":
        return `bg-lime-500`;
      case "white":
        return `bg-white`;
      case "purple":
        return `bg-purple-500`;
    
      default:
        break;
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold  pb-12">Labels</h1>
      <div>
        {defaultLabels.map((badge) => (
          <Badge key={badge.id} className={`${LabelBg(badge)} m-1`}>{badge.name}</Badge>
        ))}
      </div>
      <h2 className='text-2xl font-bold pt-12 pb-12'>Status</h2>
        
    </div>
  );
};

export default Labels;
