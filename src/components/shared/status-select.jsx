import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { possibleStatus } from "@/constants";

const StatusSelect = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a status to filter" />
        </SelectTrigger>
        <SelectContent>
          {possibleStatus.map((status) => (
            <SelectItem key={status.id} value={status.label}>{status.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default StatusSelect;
