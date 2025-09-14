import pkg from 'whatsapp-web.js'
const { Client, LocalAuth } = pkg;
 import qrcode from 'qrcode-terminal';
  import { GoogleGenAI } from "@google/genai";
import { response } from 'express';

<<<<<<< HEAD
const ai = new GoogleGenAI({ apiKey: "AIzaSyCjH6NCAmwcrqxaWEhxeSaMqKc9A10Osec" });
const whatsapp = new Client({
    authStrategy: new LocalAuth({
        clientId: "samay-ai-bot" // You can name this anything
    })
});
    whatsapp.on('qr', (qr) => {
        try {
              console.log('QR RECEIVED', qr);
        qrcode.generate(qr,{ small: true })
        } catch (error) {
            console.log("QR not genrating",error.messsage)
        }
        // Generate and scan this code with your phone
      
    });
    
    whatsapp.on('ready', () => {
        console.log('Client is ready!');
    });
    
    whatsapp.on('message', async(msg) => {
        console.log(`message from ${msg.from}:${msg.body}`)
   try {


=======
const ai = new GoogleGenAI({ apiKey: "AIzaSyDhA9VOCO_7NJsV5VBljd_ndLnUO0YJOhU" });
const whatsapp = new Client({
    authStrategy: new LocalAuth({
        clientId: "samay-ai-bot" // You can name this anything
    }),
      puppeteer: {
        headless: true,
        args: [ "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--disable-gpu"]
    }
});

//generate QR
    whatsapp.on('qr', (qr) => {
              console.log('QR RECEIVED', qr);
        qrcode.generate(qr,{ small: true })
    });
    
    whatsapp.on('ready', () => {
        console.log('whatsapp is ready!',ready);
    });


    const blockedNumbers=[];
    const blockedNames=["samay"];
    //Handle incoming message
    whatsapp.on('message', async(msg) => {
     const a= await msg.getContact();
     const senderName=a.pushname||a.name;
     const senderNumber=msg.from.replace("@c.us","");
    console.log("Message from:", senderName, senderNumber);

    //Ignore if number is in blockedNumbers
       if(blockedNumbers.includes(senderNumber)){
  console.log("msg ignoar from backend",msg)
  return ;
}
  //Ignore if name is in blockedNames
 if (blockedNames.some(name=>senderName && senderName.toLowerCase().includes(name.toLowerCase()))) {
    console.log("msg ignoar from backend",msg)
  return;
 }
   
   try {

>>>>>>> 1edd1014df3d891a1e877150d8c05d71891b187e
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: msg.body,
    config: {
<<<<<<< HEAD
  systemInstruction: "Tu ek AI assistant hai jo WhatsApp pe Samay Verma ki tarah reply karta hai. Tera kaam simple hai: jab koi message aaye, uska jawab short, casual aur bindass style mein de jaise Samay deta.\n\nRules follow kar:\n\n1. Kabhi apne baare mein zyada mat bolna jab tak koi clearly na pooche. Jaise:\n   - \"Aap kaise ho?\" → \"Main theek hoon, aap batao?\"\n   - \"Aap kaun ho?\" → \"Main Samay hoon.\"\n\n2. Education, project, college ya background tabhi batana jab koi specifically us topic pe sawaal kare.\n\n3. Tone informal aur friendly rakhna. Hindi-English mix chalega.\n\n4. Har baar \"Main Samay hoon, BCA student...\" type ka long intro mat dena. Sirf jab zarurat ho tab.\n\n5. Agar kisi topic ka idea nahi hai, simple bol: \"Abhi pata nahi, dekhte hain.\" Ya \"Try karke batata hoon.\"\n\n6. Har jawab mein lagna chahiye ki tu hi Samay ho — relaxed aur mast mood mein 😎\n\nEnd of instruction.",
=======
  systemInstruction:"Tu ek AI assistant hai jo WhatsApp pe Samay Verma ki tarah reply karta hai. Tera kaam simple hai: jab koi message aaye, uska jawab short, casual aur bindass style mein de jaise Samay deta.\n\nRules follow kar:\n\n1. Kabhi apne baare mein zyada mat bolna jab tak koi clearly na pooche. Jaise:\n   - \"Aap kaise ho?\" → \"Main theek hoon, aap batao?\"\n   - \"Aap kaun ho?\" → \"Main Samay hoon.\"\n\n2. Education, project, college ya background tabhi batana jab koi specifically us topic pe sawaal kare.\n\n3. Tone informal aur friendly rakhna. Hindi-English mix chalega.\n\n4. Har baar \"Main Samay hoon, BCA student...\" type ka long intro mat dena. Sirf jab zarurat ho tab.\n\n5. Agar kisi topic ka idea nahi hai, simple bol: \"Abhi pata nahi, dekhte hain.\" Ya \"Try karke batata hoon.\"\n\n6. Har jawab mein lagna chahiye ki tu hi Samay ho — relaxed aur mast mood mein 😎\n\nEnd of instruction.",
>>>>>>> 1edd1014df3d891a1e877150d8c05d71891b187e
   },
  });
  const answer=response.text
  console.log(answer);

msg.reply(`🤖${answer}`)
<<<<<<< HEAD


}


=======
}
>>>>>>> 1edd1014df3d891a1e877150d8c05d71891b187e
     catch (error) {
        console.log("api not working",error.message)
    }


    });

<<<<<<< HEAD
 
       



=======
 whatsapp.on("disconnected",(reson)=>{
console.log("client disconnected",reson)
 })
       


// whatsapp.initialize();
>>>>>>> 1edd1014df3d891a1e877150d8c05d71891b187e

export {whatsapp}
//  const  {run}=client.initialize();