// // import ChatBot from "react-simple-chatbot";
// // import { ThemeProvider } from "styled-components";
// // import { Image } from "@nextui-org/react";
// // import { Poppins } from "@/resources/fonts";

// // const steps = [
// //     {
// //         id: '0',
// //         message: 'Hey Geek!',

// //         // This calls the next id
// //         // i.e. id 1 in this case
// //         trigger: '1',
// //     }, {
// //         id: '1',

// //         // This message appears in
// //         // the bot chat bubble
// //         message: 'Please write your username',
// //         trigger: '2'
// //     }, {
// //         id: '2',

// //         // Here we want the user
// //         // to enter input
// //         user: true,
// //         trigger: '3',
// //     }, {
// //         id: '3',
// //         message: " hi {previousValue}, how can I help you?",
// //         trigger: 4
// //     }, {
// //         id: '4',
// //         options: [

// //             // When we need to show a number of
// //             // options to choose we create alist
// //             // like this
// //             { value: 1, label: 'View Courses' },
// //             { value: 2, label: 'Read Articles' },

// //         ],
// //         end: true
// //     }
// // ];

// // const theme = {
// //   background: "#F1F5F5",
// //   fontFamily: {Poppins},
// //   headerBgColor: "#EF6C00",
// //   headerFontColor: "#fff",
// //   headerFontSize: "15px",
// //   botBubbleColor: "#ffffff",
// //   botFontColor: "#000000",
// //   optionsBubbleColor: "#EF6C00",
// //   userBubbleColor: "#D9D9D9",
// //   userFontColor: "#000000",
// // };

// // const config = {
// //   //   botAvatar: "img.png",
// // };

// // function Chatbot() {
// //   return (
// //     <div className="App">
// //       <ThemeProvider theme={theme}>
// //         <ChatBot
// //         className={Poppins.className}
// //         width="400px"
// //         //   headerComponent={
// //         //     <section className="h-[150px] overflow-hidden relative bg-[url('/images/new-about-us.jpg')] bg-no-repeat bg-center bg-cover opacity-90">
// //         //       <p className="text-[70px] h-[100px] ml-0 pl-0 w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-2 mb-0 pb-0">
// //         //         Chatbot
// //         //       </p>
// //         //     </section>
// //         //   }
// //           headerTitle="North Devon Recruitment"

// //           recognitionEnable={true}
// //           steps={steps}
// //           floating={true}
// //           {...config}
// //         />
// //       </ThemeProvider>
// //     </div>
// //   );
// // }

// // export default Chatbot;

// import React from "react";
// import ChatBot from "react-chatbotify";
// import "react-chatbotify/dist/react-chatbotify.css";
// import { Poppins } from "@/resources/fonts";
// import { IoIosChatboxes } from "react-icons/io";
// import { Image } from "@nextui-org/react";
// import { url } from "inspector";
// import Heading from "./Heading";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// const Chatbot = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const options = {
//     // play around with the colors below to try out different themes!
//     theme: {
//       // embedded: true,
//       primaryColor: "#E9722B",
//       secondaryColor: "#FFBF98",
//       fontFamily: { Poppins },
//       showHeader: true,
//     },
//     chatHistory: {
//       storageKey: "example_theming",
//     },
//     floated: true,
    
//     chatButton: {
//       icon: "/images/north.png",
//     },
//     header: {
//       title: (
//         <p className="text-5xl pb-1 h-[200px] w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70">
//           Chatbot
//         </p>
//       ),
//       showAvatar: false,
//       // avatar: botAvatar,
//       closeChatIcon: "svg/close_chat_icon.svg",
//     },
//     audio: {
//       disabled: false,
//       defaultToggledOn: false,
//       language: "en-US",
//       voiceNames: [
//         "Microsoft David - English (United States)",
//         "Alex (English - United States)",
//       ],
//       rate: 1,
//       volume: 1,
//       icon: "/svg/audio_icon.svg",
//     },

//     voice: {
//       disabled: false,
//       defaultToggledOn: false,
//       timeoutPeriod: 10000,
//       autoSendDisabled: false,
//       autoSendPeriod: 1000,
//       icon: "svg/voice_icon.svg",
//     },
//     tooltip: {
//       mode: "CLOSE",
//       text: "Let's Talk! 😊",
//     },

//     footer: {
//       text: (
//         <div
//           style={{ cursor: "pointer" }}
//           onClick={() => window.open("https://react-chatbotify.tjtanjin.com")}
//         >
//           {/* <span>Powered By </span> */}
//           <span style={{ fontWeight: "bold" }}>
//             <Image
//               width={50}
//               height={50}
//               className="mb-[-10px] pt-2"
//               src="/images/north.png"
//               alt="logo"
//             />
//             <span className="text-[10px]">North Devon Recruitment</span>
//           </span>
//         </div>
//       ),
//     },

//     chatButtonStyle: {
//       // backgroundColor: "#FFFFFF",
//       // height: "150px"
//       // width: "1"
//     },
//     headerStyle: {
//       background: "url('/images/chatboot.jpg')",
//       height: "50%",
//       width: "100%",
//     },
//     tooltipStyle: {
//       zIndex: "100",
//       width: "130px",
//       fontSize: "13px"
//     },
//     chatWindowStyle: {
//       width: "400px",
//     },
//     botOptionStyle: {
//       display: "inline",
//     },

//     // depending on your color scheme, you may want to make adjustments
//     // to other parts of your chatbot (uncomment below to see what happens)
//     // userBubbleStyle: {
//     //     color: "#000000"
//     // },
//     // botOptionStyle: {
//     //     color: "#FFA500",
//     //     borderColor: "#FFA500"
//     // },
//     // botOptionHoveredStyle: {
//     //     backgroundColor: "#FFA500",
//     // },
//     // sendButtonStyle: {
//     //     backgroundColor: "#FFA500",
//     // },
//     // sendButtonHoveredStyle: {
//     //     backgroundColor: "#FFD700",
//     // }
//   };
//   const helpOptions = ["Vacancies", "Our Services", "Help Desk", "About Us"];
//   const flow = {
//     start: {
//       message: "Hello there! What is your name?",
//       // transition: { duration: 1000 },
//       path: "ask_name",
//     },
//     ask_name: {
//       message: (params: { userInput: any }) =>
//         `Good to see you ${params.userInput}, how may we help you?`,
//       transition: { duration: 1000 },

//       path: "show_options",
//     },
//     show_options: {
//       // message:
//       //   // "It looks like you have not set up a conversation flow yet. No worries! Here are a few helpful " +
//       //   "things you can check out to get started:",
//       options: helpOptions,
//       path: "process_options",
//     },
//     prompt_again: {
//       message: "Do you need any other help?",
//       options: helpOptions,
//       path: "process_options",
//     },
//     unknown_input: {
//       message:
//         "Sorry, I do not understand your message 😢! If you require further assistance, you may click on " +
//         "the Contact option and open an issue there.",
//       options: helpOptions,
//       path: "process_options",
//     },
//     process_options: {
//       transition: { duration: 0 },
//       path: (params: {
//         userInput: any;
//         injectMessage: (arg0: string) => void;
//       }) => {
//         let link = "";
//         switch (params.userInput) {
//           case "Vacancies":
//             setTimeout(() => {
//               router.push("/vacancies");
//             }, 1000);
//             break;
//           case "Our Services":
//             setTimeout(() => {
//               router.push("/our-services");
//             }, 1000);
//             break;
//             case "About Us":
//               setTimeout(() => {
//                 router.push("/about-us");
//               }, 1000);
//               break;
//           case "Help Desk":
//             // link = "https://wa.me/+233530610013";
//             // setTimeout(() => {
//             //   window.open(link);
//             // }, 1000);
//             break;

//           default:
//             return "unknown_input";
//         }
//         params.injectMessage("Sit tight! I'll send you right there!");

//         return "repeat";
//       },
//     },
//     repeat: {
//       transition: { duration: 3000 },
//       path: "prompt_again",
//     },
//   };

//   return <ChatBot options={options} flow={flow} />;
// };

// export default Chatbot;
