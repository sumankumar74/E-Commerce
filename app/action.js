"use server"

import { redirect } from "next/navigation";
import Category from "./models/Category";
import Book from "./models/Book";
import { join } from "path";
import { writeFile } from "fs/promises"
import DbConnect from "./config/DbConnect";
import User from "./models/User";
import bycrypt from "bcryptjs"
import Address from "./models/Address";


DbConnect();
export const handleSubmit = async (formData) => {

  let catTitle = formData.get("catTitle");
  let catDescription = formData.get("catDescription");

  let record = { catTitle, catDescription }
  let data = await Category.create(record)
  redirect("/admin/Books/category/manage")
}


export const handleSubmitBook = async (formData) => {
  let title = formData.get("title");
  let author = formData.get("author");
  let price = formData.get("price");
  let discountPrice = formData.get("discountPrice");
  let status = formData.get("status");
  let category = formData.get("category");
  let description = formData.get("description");

  let featuredImage = formData.get("featuredImage")

  let bytes = await featuredImage.arrayBuffer();
  let buffer = Buffer.from(bytes)

  const path = join("./public", "image", featuredImage.name)
  await writeFile(path, buffer)

  category = await Category.findById(category)
  let data = await Book.create({ title, author, price, discountPrice, status, category, description, featuredImage: featuredImage.name })
  redirect("/admin/Books/manage")
}

export const handleBookDelete = async (id) => {
  let data = await Book.findByIdAndDelete(id);
  redirect("/admin/Books/manage")
}


export const handleCatDelete = async (id) => {
  let data = await Category.findByIdAndDelete(id);
  redirect("/admin/Books/Category/manage")
}

export const handleCreateAnAccount = async (formData) => {
  let fullName = formData.get("fullName");
  let email = formData.get("email");
  let contact = formData.get("contact");

  let salt = await bycrypt.genSalt(10);
  let password = await bycrypt.hash(formData.get('password'), salt);

  let pincode = formData.get("pincode");
  let address = formData.get("address");

  let records = { fullName, email, contact, pincode, address, password };
  let data = await User.create(records);
  redirect("/User/login")
}
export const handleCreateAnAddress = async (formData) => {
  let name = formData.get("name");
  let contact = formData.get("contact");
  let pincode = formData.get("pincode");
  let area = formData.get("area");
  let city = formData.get("city");
  let landmark = formData.get("landmark");
  let state =formData.get("state");
  let user = formData.get("user")

  let record = { name, city, area, landmark, contact, pincode,state,user };
  let data = await Address.create(record);


}