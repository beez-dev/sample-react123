import funcComp from "./funcComp1";
import funcComp2 from "./funcComp2";
import funcComp3 from "./funcComp3";
import funcComp4 from "./funcComp4";
import React from "react";

const titleSchema = {
    title: funcComp,
    text: "title one",
}

const descriptionSchema = {
    description: funcComp2,
    text: "title two", 
}

const textAreaSchema = {
    textArea: funcComp3,
    text: "title three",
}

const buttonSchema = {
    buttonArea : funcComp4,
    text: "somewhat"
}

const schema: any = {
    title: titleSchema,
    description: descriptionSchema,
    textArea: textAreaSchema,
    buttonArea: buttonSchema
}

export default schema;