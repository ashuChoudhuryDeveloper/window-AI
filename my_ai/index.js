const{GoogleGenerativeAI}=require("@google/generative-ai");
const {GoogleAIFileManager}=require("@google/generative-ai/server");
require('dotenv').config();
const {manageData}=require("../helpers/dataManagement");


let candidate =[0];
const myAI=new GoogleGenerativeAI(process.env.API_KEY);//For this you need to create  env file in Root of this project
const  FileManager =new GoogleAIFileManager(process.env.API_KEY);
const  model =myAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "A virtual assistant act like a doraemon in windows ",
    });
const getData=await manageData(candidate,worker=false);

let chat=model.startChat();
if (getData[0]){
    chat=model.startChat({
        history :getData[1].history,
    });
}
const chatHistory ={
};
setInterval(() => {
    candidate[0]=chatHistory;
    manageData(candidate);
    },3000);
class AI{
async sendText(text){
    chatHistory.chat=await chat.getHistory();
    return await chat.sendMessage(text);
}

}
module.exports={model, chat, AI, FileManager, myAI};
