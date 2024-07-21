"use client";

import { auth } from "@/auth";
import { OutputData } from "@editorjs/editorjs";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { z } from "zod";
import SaveBlog from "./save-blog";
import { Blog } from "@/types";


let Editor = dynamic(() => import("./editor"), {
    ssr: false,
});

type BlogEditor = {
    blog: Blog
    blogId: string | null
}

const menus = [
    {
        title: "Editor",
    },
    {
        title: "Settings",
    },
]


const CreateNewBlog = ({ blog, blogId }: BlogEditor) => {
    const [content, setContent] = useState(blog.content as OutputData);
    const { data: session, status } = useSession();

    const [title, setTitle] = useState(blog.title);
    const [description, setDescription] = useState(blog.description);


    const payload = useMemo(() => {
        return {
            title: title,
            userId: session?.user.id as string,
            description: description,
            content: content,
        }

    }, [title, description, content, session])


    const [selectIndex, setSelectIndex] = useState(0);

    if (!session) {
        return null
    };

    return (
        <div>
            <div className="px-6 w-full flex items-center space-x-4 justify-between">
                <div className="flex space-x-4 justify-center">
                    {menus.map((menu, index) => (
                        <Card
                            onClick={() => setSelectIndex(index)}
                            className={cn(
                                "px-4 py-0.5 cursor-pointer",
                                `${selectIndex === index ? "bg-green-300" : ""}`)} key={index}>
                            <p>{menu.title}</p>
                        </Card>
                    ))}

                </div>
                <SaveBlog payload={payload}  userId={session.user.id} blogId={blogId}/>

            </div>

            {
                selectIndex === 0 && (
                    <Editor
                        holder="editor_create"
                        onChange={(e: any) => setContent(e)}
                        data={content}
                        userId={session.user.id}
                        blogId={blogId}
                    />
                )
            }

            {
                selectIndex === 1 && (
                    <div className="flex flex-col  space-y-4 pt-4 justify-center">
                        <Input value={title}  onChange={(e) => setTitle(e.target.value)}/>
                        <div className="w-1/2">
                            <Textarea 
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                placeholder="Add a description" />
                        </div>
                    </div>
                )
            }

        </div>
    )

}

export default CreateNewBlog;


