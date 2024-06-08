const nodemailer = require("nodemailer");
// import user model
exports.generateOTP = () => {
  let otp = "";
  for (let i = 0; i <= 3; i++) {
    const randVal = Math.round(Math.random() * 9);
    otp += randVal;
  }
  return otp;
};
exports.mailTransport = () =>
  nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "nournz1605@gmail.com", //new key
      pass: "klhj vfyu gtgf fyvn", //
    },
  });

exports.generateEmailTemplate = (code) => {
  return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Template</title>
            <style>
                body {
                    background-color: #f4f4f7;
                    margin: 0;
                    padding: 0;
                    font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-image: url('https://via.placeholder.com/1200x800.png?text=Background+Image');
                    background-size: cover;
                    background-repeat: no-repeat;
                }
    
                .container {
                    max-width: 600px;
                    background-color: rgba(255, 255, 255, 0.95);
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    width: 100%;
                    backdrop-filter: blur(10px);
                    margin: 20px;
                }
    
                .header {
                    background-color: #d4af37;
                    color: #ffffff;
                    padding: 20px;
                    text-align: center;
                    font-size: 24px;
                }
    
                .content {
                    padding: 30px 20px;
                    text-align: center;
                }
    
                .message {
                    font-size: 16px;
                    color: #333;
                    margin-bottom: 20px;
                }
    
                .verification-code {
                    font-size: 24px;
                    font-weight: bold;
                    color: #d4af37;
                    background-color: #faf8e7;
                    padding: 15px;
                    display: inline-block;
                    border-radius: 4px;
                }
    
                .additional-info {
                    font-size: 14px;
                    color: #555;
                    margin-top: 20px;
                    line-height: 1.5;
                }
    
                .image-container {
                    margin-top: 20px;
                }
    
                .image-container img {
                    max-width: 100%;
                    border-radius: 8px;
                }
    
                .footer {
                    font-size: 12px;
                    color: #777;
                    padding: 20px;
                    text-align: center;
                    background-color: #f4f4f7;
                    border-top: 1px solid #ddd;
                }
    
                @media screen and (max-width: 600px) {
                    .container {
                        width: 100%;
                        border-radius: 0;
                    }
    
                    .header {
                        font-size: 20px;
                        padding: 15px;
                    }
    
                    .content {
                        padding: 20px 15px;
                    }
    
                    .verification-code {
                        font-size: 20px;
                        padding: 10px;
                    }
    
                    .footer {
                        font-size: 10px;
                        padding: 15px;
                    }
                }
            </style>
        </head>
    
        <body>
            <div class="container">
                <div class="header">
                    CitiesIn
                </div>
                <div class="content">
                    <div class="message">
                        <p>Hello,</p>
                        <p>Please use the verification code below on the <span style="color: #d4af37;">CitiesIn</span> website:</p>
                    </div>
                    <div class="verification-code">${code}</div>
                    <div class="message">
                        <p>If you didn't request this, you can ignore this email or let us know.</p>
                        <p>Thanks!<br /><span style="color: #d4af37;">CitiesIn</span> team</p>
                    </div>
                    <div class="image-container">
                        <img src="https://www.pngkey.com/png/detail/131-1316417_love-the-church-world-map-globe-vector.png" alt="Love The Church - World Map Globe Vector@pngkey.com">
                    </div>
                    <div class="additional-info">
                        <p>At CitiesIn, we are committed to providing the best experiences for our users. If you have any questions or need further assistance, feel free to contact our support team.</p>
                        <p>Stay connected with us for more updates and exciting features!</p>
                        <p>Don't forget to check out our new blog section where we share insights on urban living, travel tips, and much more. Visit our blog <a href="https://example.com/blog" style="color: #d4af37; text-decoration: none;">here</a>.</p>
                        <p>Join our community and follow us on social media for the latest updates and special offers. Follow us on <a href="https://facebook.com/CitiesIn" style="color: #d4af37; text-decoration: none;">Facebook</a>, <a href="https://twitter.com/CitiesIn" style="color: #d4af37; text-decoration: none;">Twitter</a>, and <a href="https://instagram.com/CitiesIn" style="color: #d4af37; text-decoration: none;">Instagram</a>.</p>
                    </div>
                </div>
                <div class="footer">
                    © 2024 CitiesIn. All rights reserved.
                </div>
            </div>
        </body>
        </html>
        `;
};

exports.plainEmailTemplate = (heading, message) => {
  return `
          <!DOCTYPE html>
          <html lang="en">
          
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Email Template</title>
              <style>
                  body {
                      background-color: #f4f4f7;
                      margin: 0;
                      padding: 0;
                      font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 100vh;
                      background-image: url('https://via.placeholder.com/1200x800.png?text=Background+Image');
                      background-size: cover;
                      background-repeat: no-repeat;
                  }
  
                  .container {
                      max-width: 600px;
                      background-color: rgba(255, 255, 255, 0.95);
                      border-radius: 8px;
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                      overflow: hidden;
                      width: 100%;
                      backdrop-filter: blur(10px);
                      margin: 20px;
                      padding: 20px;
                      text-align: center;
                  }
  
                  .header {
                      background-color: #d4af37;
                      color: #ffffff;
                      padding: 20px;
                      text-align: center;
                      font-size: 24px;
                  }
  
                  h2 {
                      color: #333;
                      margin-bottom: 20px;
                  }
  
                  p {
                      font-size: 16px;
                      color: #333;
                      margin: 0;
                      line-height: 1.5;
                  }
  
                  .footer {
                      font-size: 12px;
                      color: #777;
                      padding: 20px;
                      text-align: center;
                      background-color: #f4f4f7;
                      border-top: 1px solid #ddd;
                  }
  
                  @media screen and (max-width: 600px) {
                      .container {
                          width: 100%;
                          border-radius: 0;
                      }
  
                      .header {
                          font-size: 20px;
                          padding: 15px;
                      }
  
                      h2 {
                          font-size: 20px;
                          margin-bottom: 15px;
                      }
  
                      p {
                          font-size: 14px;
                      }
  
                      .footer {
                          font-size: 10px;
                          padding: 15px;
                      }
                  }
              </style>
          </head>
          
          <body>
              <div class="container">
                  <div class="header">
                      CitiesIn
                  </div>
                  <h2>${heading}</h2>
                  <p>${message}</p>
                  <p>Thank you for choosing CitiesIn. We're thrilled to have you with us. Your journey with us will be filled with exciting discoveries and opportunities to connect with people and places worldwide.</p>
                  <p>We believe in creating experiences that bring people together, fostering a sense of belonging no matter where you are. Stay tuned for updates, new features, and more enriching experiences!</p>
                  <div class="footer">
                      © 2024 CitiesIn. All rights reserved.
                  </div>
              </div>
          </body>
          
          </html>
      `;
};

exports.generatePasswordResetTemplate = (url) => {
  return `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset</title>
      <style>
        body {
          background-color: #f4f4f7;
          font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          max-width: 600px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 40px;
          text-align: center;
        }
        h1 {
          color: #d4af37;
          font-size: 28px;
          margin-bottom: 20px;
        }
        p {
          color: #333;
          font-size: 18px;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .button {
          display: inline-block;
          font-size: 18px;
          color: #ffffff;
          background-color: #d4af37; /* Changed button color to gold */
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 30px;
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color: #ffcc00;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 30px;
        }
        th, td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          text-align: left;
        }
        th {
          background-color: #f4f4f7;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hi there,</h1>
        <p>You recently requested a password reset here at GMALL.</p>
        <p>Here are some important details:</p>
        
        <p>Click the button below to complete your password reset.</p>
        <a class="button" href="${url}">Reset Password</a>
        <p>If you did not request a password reset, please ignore this message.</p>
      </div>
    </body>
  </html>
    `;
};

exports.ResetPasswordEmailSuccess = (heading, msg) => {
  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset Success</title>
        <style>
          body {
            background-color: #f4f4f7;
            font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            max-width: 600px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
          }
          .header {
            padding: 20px;
            text-align: center;
            background-color: #0073e6;
            color: #ffffff;
            border-radius: 8px 8px 0 0;
          }
          .success-message {
            font-size: 24px;
            font-weight: bold;
            color: #20c997;
            margin-top: 20px;
          }
          .message {
            font-size: 16px;
            color: #333;
            padding: 0 25px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${heading}</h1>
          </div>
          <div class="success-message">${msg}</div>
          <div class="message">
            <p>Your password has been successfully reset.</p>
            <p>If you have any questions, feel free to contact us.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// const nodemailer =require('nodemailer');
// exports.generateOTP =()=>{
//     let otp ='' ;
//     for(let i =0;i<=3;i++){
//      const randVal= Math.round(Math.random()*9);
//      otp+=randVal;
//     }
//     return otp;
// };
// exports.mailTransport=()=> nodemailer.createTransport({
//         host: "sandbox.smtp.mailtrap.io",
//         port: 2525,
//         auth: {
//           user: process.env.MAILTRAP_USERNAME,
//           pass: process.env. MAILTRAP_PASSWORD
//         }
//       });

// exports.generateEmailTemplate = code =>{
//   return `<!DOCTYPE html>
//   <html lang="en">

//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Email Template</title>
//       <style>
//           body {
//               background-color: #fafbfc;
//               margin: 0;
//               padding: 0;
//               font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               height: 100vh;
//           }

//           .container {
//               max-width: 600px;
//               text-align: center;
//           }

//           .logo {
//               padding: 25px;
//               width: 125px;
//               margin: 0 auto;
//               display: block;
//           }

//           .content {
//               background-color: #fff;
//               padding-bottom: 20px;
//               padding-top: 20px;
//           }

//           .message {
//               font-size: 16px;
//               padding-left: 25px;
//               padding-right: 25px;
//           }

//           .verification-code {
//               font-size: 24px;
//               font-weight: bold;
//               background-color: gold;
//               padding: 15px;
//               display: inline-block;
//           }
//       </style>
//   </head>

//   <body>
//       <div class="container">
//           <img class="logo" src="https://global-uploads.webflow.com/5f059a21d0c1c3278fe69842/5f188b94aebb5983b66610dd_logo-arengu.png"
//               alt="Logo">
//           <div class="content">
//               <div class="message">
//                   <p>Hello,</p>
//                   <p>Please use the verification code below on the <span style="color: gold;">GlobeIn</span> website:</p>
//               </div>
//               <div class="verification-code">${code}</div>
//               <div class="message">
//                   <p>If you didn't request this, you can ignore this email or let us know.</p>
//                   <p>Thanks! <br /><span style="color: gold;">GlobeIn</span> team</p>
//               </div>
//           </div>
//       </div>
//   </body>

//   </html>
//   `
// };
// exports.plainEmailTemplate = (heading, message) => {
//   return `
//       <!DOCTYPE html>
//       <html lang="en">

//       <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Email Template</title>
//       </head>

//       <body style="background-color: #fafbfc; margin: 0; padding: 0; font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;">
//           <div style="max-width: 600px; margin: 0 auto; text-align: center;">
//               <h2>${heading}</h2>
//               <p>${message}</p>
//           </div>
//       </body>

//       </html>
//   `;
// };
// exports.generatePasswordResetTemplate = url => {
//   return `
//     <html>
//       <head>
//         <style>
//           .button {
//             display: inline-block;
//             font-size: 16px;
//             color: #ffffff;
//             background-color: #ff0000;
//             padding: 10px 20px;
//             text-decoration: none;
//             border-radius: 5px;
//           }
//         </style>
//       </head>
//       <body>
//         <h1>Hi User</h1>
//         <br/>
//         You recently requested a password reset here at GMALL.<br/>
//         Click the button below to complete your password reset.<br/>
//         <a class="button" href="${url}">Reset Password</a><br/>
//         If you did not request a password reset, please ignore this message.<br/>
//       </body>
//     </html>
//   `;
// };
// exports.ResetPasswordEmailSuccess = (heading, msg) => {
//   return `
//     <html>
//       <head>
//         <style>
//           body {
//             font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
//           }
//           .container {
//             max-width: 600px;
//             margin: 0 auto;
//           }
//           .header {
//             padding: 20px;
//             text-align: center;
//             background-color: #fafbfc;
//           }
//           .success-message {
//             text-align: center;
//             font-size: 24px;
//             font-weight: bold;
//             color: #20c997;
//           }
//           .message {
//             text-align: center;
//             font-size: 16px;
//             padding: 0 25px;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="header">
//             <h1>${heading}</h1>
//           </div>
//           <div class="success-message">${msg}</div>
//           <div class="message">
//             <p>Your password has been successfully reset.</p>
//             <p>If you have any questions, feel free to contact us.</p>
//           </div>
//         </div>
//       </body>
//     </html>
//   `;
// };
