'use client';
import { useState } from 'react';
import * as z from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Loader2, PlusCircle, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { File } from 'lucide-react';
import { Attachment, Course } from '@prisma/client';
import { FileUpload } from '@/components/file-upload';

interface AttachmentFormProps {
  initialData: Course & { attachments: Attachment[] };
  courseId: string;
}

const formSchema = z.object({
  url: z.string().min(1),
});
const AttachmentForm = ({ initialData, courseId }: AttachmentFormProps) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [deletingAttachmentId, setDeletingAttachmentId] = useState<
    string | null
  >(null);

  const toggleEdit = () => setIsEditing((c) => !c);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      await axios.post(`/api/courses/${courseId}/attachments`, values);
      toast.success('Course updated');
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error('Something  went wrong');
    }
  };

  const onDelete = async (id: string) => {
    try {
      setDeletingAttachmentId(id);
      await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
      toast.success('Attachment deleted');
      router.refresh();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setDeletingAttachmentId(null);
    }
  };
  return (
    <div className="mt-6 rounded-md border bg-slate-100 p-4">
      <div className="flex items-center justify-between font-medium">
        Course attachments
        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add a file
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          {initialData.attachments.length === 0 && (
            <p className="mt-2 text-sm italic text-slate-500">
              No attachments yet
            </p>
          )}
        </>
      )}
      {initialData.attachments.length > 0 && (
        <div className="space-y-2">
          {initialData.attachments.map((attachment) => (
            <div
              key={attachment.id}
              className="flex w-full items-center rounded-md border border-sky-200 bg-sky-100 p-3 text-sky-700"
            >
              <File className="mr-2 h-4 w-4 flex-shrink-0" />
              <p className="line-clamp-1 text-xs">{attachment.name}</p>
              {deletingAttachmentId === attachment.id && (
                <div>
                  <Loader2 className="h-4  w-4 animate-spin" />
                </div>
              )}
              {deletingAttachmentId !== attachment.id && (
                <button
                  className="ml-auto transition hover:opacity-75"
                  onClick={() => onDelete(attachment.id)}
                >
                  <X className="h-4  w-4 " />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit({ url: url });
              }
            }}
          />
          <div className="mt-4 text-xs text-muted-foreground">
            Add anything your student might need to complete the course.
          </div>
        </div>
      )}
    </div>
  );
};

export default AttachmentForm;
