import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select, Container } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { handleSubmit, watch, control, register, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  console.log(userData);

  const submit = async (data) => {
    if (post) {
      console.log("button clicked");
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      console.log(file);
      console.log("Else");
      console.log(userData);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)} className="flex justify-start items-start gap-x-2 ">
        <div className="p-2 w-auto flex flex-col items-start bg-slate-600 rounded-lg">
          <Input
            label="Title:"
            placeholder="Title"
            className="m-2 border-2 h-8 p-2"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug:"
            placeholder="Slug"
            className="m-2 border-2 h-8 p-2"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
        <div className="p-2 flex flex-col justify-start items-end bg-slate-600 rounded-lg">
          <Input
            label="Featured Image:"
            type="file"
            className="text-gray-300"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className=" border">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className=""
              />
            </div>
          )}
          <Select
            options={["active", "inactive"]}
            label="Status:"
            className="p-2"
            {...register("status", { required: true })}
          />
          <Button
            type="submit"
            bgColor={post ? "bg-green-500" : undefined}
            className="mx-auto"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </Container>
  );
}
