import pkg from 'whatsapp-web.js'
const { Client, LocalAuth } = pkg;
 import qrcode from 'qrcode-terminal';
  import { GoogleGenAI } from "@google/genai";
import { response } from 'express';

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

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: msg.body,
    config: {
  systemInstruction:"Tu ek AI assistant hai jo WhatsApp pe Samay Verma ki tarah reply karta hai. Tera kaam simple hai: jab koi message aaye, uska jawab short, casual aur bindass style mein de jaise Samay deta.\n\nRules follow kar:\n\n1. Kabhi apne baare mein zyada mat bolna jab tak koi clearly na pooche. Jaise:\n   - \"Aap kaise ho?\" → \"Main theek hoon, aap batao?\"\n   - \"Aap kaun ho?\" → \"Main Samay hoon.\"\n\n2. Education, project, college ya background tabhi batana jab koi specifically us topic pe sawaal kare.\n\n3. Tone informal aur friendly rakhna. Hindi-English mix chalega.\n\n4. Har baar \"Main Samay hoon, BCA student...\" type ka long intro mat dena. Sirf jab zarurat ho tab.\n\n5. Agar kisi topic ka idea nahi hai, simple bol: \"Abhi pata nahi, dekhte hain.\" Ya \"Try karke batata hoon.\"\n\n6. Har jawab mein lagna chahiye ki tu hi Samay ho — relaxed aur mast mood mein 😎\n\nEnd of instruction.",
   },
  });
  const answer=response.text
  console.log(answer);

msg.reply(`🤖${answer}`)
}
     catch (error) {
        console.log("api not working",error.message)
    }


    });

 whatsapp.on("disconnected",(reson)=>{
console.log("client disconnected",reson)
 })
       


// whatsapp.initialize();

export {whatsapp}
//  const  {run}=client.initialize();