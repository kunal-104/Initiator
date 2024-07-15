"use client";
import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  CardBody,
  Button
} from "@nextui-org/react";
import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { useState, useEffect, useRef } from "react";
import links from '../SidebarLinksData'; 



const stats = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  //   useEffect(() => {
  //     if (!editorRef.current) {
  //       initEditor();
  //       editorRef.current = true;
  //     }
  //   }, []);

  // const handleSubmit = (e) => {
    // e.preventDefault();
    // const newBlog = {
    //   id: Date.now(), // Generate unique ID for the blog
    //   title,
    //   description,
    //   tags,
    //   categories,
    //   // Add more fields as needed
    // };
    // // addBlog(newBlog);
    // setTitle('');
    // setDescription('');
    // setTags([]);
    // setCategories([]);
  // };

  //   const [tagInput, setTagInput] = useState("");
  //   const [category, setCategory] = useState("");

  //   const addTag = () => {
  //     if (tagInput.trim() && !tags.includes(tagInput.trim())) {
  //       setTags([...tags, tagInput.trim()]);
  //       setTagInput("");
  //     }
  //   };

  //   const removeTag = (tagToRemove) => {
  //     setTags(tags.filter((tag) => tag !== tagToRemove));
  //   };

  //   const saveBlog = async () => {
  //     const title = await editorTitleInstance.current.save();
  //     const content = await editorContentInstance.current.save();
  //     const image = await editorImageInstance.current.save();

  //     // Logic to save the blog post (title, content, image, tags, category)
  //     console.log({ title, content, image, tags, category });
  //   };


  return (
    <div className="flex flex-col md:flex-row h-screen bg-bodybg">
      
        <Sidebar links={links} className="flex-none w-full md:w-auto" />
      
      <div className="flex-1 flex flex-col overflow-hidden sm:ml-8">
        <Header />
        <div className=" flex-1 overflow-x-hidden overflow-y-auto p-4  sm:ml-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="col-span-1">
              <Card className="relative w-full h-auto">
                <Button
                  className="absolute cursor-pointer top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full"
                  //   onClick={handleDelete}
                >
                  Delete
                </Button>
                <CardHeader>
                  <p>Title1</p>
                </CardHeader>
                <CardBody>
                  <div className="p-2 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur sint voluptatum non sit voluptates consectetur
                    laudantium ipsum. Quod, vitae consectetur illo facere nihil,
                    eum quibusdam cumque distinctio voluptatibus magnam fugit?
                  </div>
                </CardBody>
               
              </Card>
            </div>


            
          </div>

          <div>
            {/* <Button onClick={()=>{router.push('/creator/blogs/addBlog')}} className="fixed bg-primary text-white bottom-4 right-8 z-11  ">
              Add Blog!
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default stats;
