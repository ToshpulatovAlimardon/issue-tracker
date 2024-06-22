import { defaultIssue } from '@/constants'
import React from 'react'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const IssuesList = () => {
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
    <div className='pt-12'>
      <h2 className='text-2xl font-bold pb-4'>Issues List</h2>
      
      <div className='mr-10 mb-20'>
        {defaultIssue.map((issue) => (
          <Card className="px-8 py-6 my-5 font-bold" key={issue.id}>{issue.title}{issue.labels.map((badge) => (
            <Badge key={badge.id} className={`${LabelBg(badge)} mx-5 font-bold cursor-pointer`}>{badge.name}</Badge>
          ))}</Card>
        ))}
      </div>
    </div>
  )
}

export default IssuesList
