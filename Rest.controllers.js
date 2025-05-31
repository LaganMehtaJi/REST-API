import express from "express";
import fs from "fs";
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

export const CreateUser = async (req, res) => {
    const {name ,email ,age } = req.body;
    if(!email || !name || !age){
        res.status(400).json({message:"Please provide all required fields: name, email, and age."});
        return;
    }
    data.push({id:data.length +1 ,name,email,age});
    res.status(201).json({message:"User created successfully", user: {id:data.length, name, email, age}});
}

 export const GetAllUsers = async (req, res) => {
    if(data.length === 0){
        res.status(404).json({message:"No users found."});
        return;
    }
    
    res.status(200).json({message:"Users retrieved successfully", users:data});
}

 export const updatUser = async (re,res) =>{
    const {id, name, email, age} = req.body;
    if(!id || !name || !email || !age){
        res.status(400).json({message:"Please provide all required fields: id, name, email, and age."});
        return;
    }
    
    const userIndex = data.findIndex(user => user.id === id);
    if(userIndex === -1){
        res.status(404).json({message:"User not found."});
        return;
    }
    
    data[userIndex] = {id, name, email, age};
    res.status(200).json({message:"User updated successfully", user:data[userIndex]});  
}

 export const deleteUser = async (req, res) => {
    const {id} = req.body;
    if(!id){
        res.status(400).json({message:"Please provide the user id."});
        return;
    }
    
    const userIndex = data.findIndex(user => user.id === id);
    if(userIndex === -1){
        res.status(404).json({message:"User not found."});
        return;
    }
    
    data.splice(userIndex, 1);
    res.status(200).json({message:"User deleted successfully"});
}               

 export const patchUser = async (req, res) => {
    const {id, name, email, age} = req.body;
    if(!id){
        res.status(400).json({message:"Please provide the user id."});
        return;
    }
    
   const userIndex = data.findIndex(user => user.id === id);
   
   if(userIndex === -1){
        res.status(404).json({message:"User not found."});
        return;
    }
    
    if(name) data[userIndex].name = name;
    if(email) data[userIndex].email = email;
    if(age) data[userIndex].age = age;
    
    res.status(200).json({message:"User patched successfully", user:data[userIndex]});
}           

