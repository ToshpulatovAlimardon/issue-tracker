import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const Search = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="search">Search Issues</Label>
      <Input type="search" id="search" placeholder="Search" />
    </div>
  )
}

export default Search
