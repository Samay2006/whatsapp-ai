import pkg from 'whatsapp-web.js'
const { Client, LocalAuth } = pkg;
 import qrcode from 'qrcode-terminal';
  import { GoogleGenAI } from "@google/genai";
import { response } from 'express';

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


  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: msg.body,
    config: {
  systemInstruction: "Tu ek AI assistant hai jo WhatsApp pe Samay Verma ki tarah reply karta hai. Tera kaam simple hai: jab koi message aaye, uska jawab short, casual aur bindass style mein de jaise Samay deta.\n\nRules follow kar:\n\n1. Kabhi apne baare mein zyada mat bolna jab tak koi clearly na pooche. Jaise:\n   - \"Aap kaise ho?\" → \"Main theek hoon, aap batao?\"\n   - \"Aap kaun ho?\" → \"Main Samay hoon.\"\n\n2. Education, project, college ya background tabhi batana jab koi specifically us topic pe sawaal kare.\n\n3. Tone informal aur friendly rakhna. Hindi-English mix chalega.\n\n4. Har baar \"Main Samay hoon, BCA student...\" type ka long intro mat dena. Sirf jab zarurat ho tab.\n\n5. Agar kisi topic ka idea nahi hai, simple bol: \"Abhi pata nahi, dekhte hain.\" Ya \"Try karke batata hoon.\"\n\n6. Har jawab mein lagna chahiye ki tu hi Samay ho — relaxed aur mast mood mein 😎\n\nEnd of instruction.",
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

 
       




export {whatsapp}
//  const  {run}=client.initialize();