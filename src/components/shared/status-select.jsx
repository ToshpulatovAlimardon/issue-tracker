import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { possibleStatus } from "@/constants";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const StatusSelect = () => {
  return (
    <>
      <div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a status to filter" />
          </SelectTrigger>
          <SelectContent>
            {possibleStatus.map((status) => (
              <SelectItem key={status.id} value={status.label}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="mt-10">Add Issue</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <h1 className="font-bold text-3xl">Add Issue</h1>
          <div>
            <Label htmlFor="search" className="mb-5">Title</Label>
            <Input type="text" id="title" placeholder="Title" />
          </div>
          <div>
            <Label htmlFor="search" className="mb-5">Comment</Label>
            <Textarea type="text" id="comment" placeholder="Comment"/>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction>Add Issue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default StatusSelect;
