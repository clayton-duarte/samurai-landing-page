import { NextApiHandler } from "next";
import nodemailer from "nodemailer";

const handler: NextApiHandler = (req, res) => {
  const password = process.env.USER_PASSWORD;
  const fromUser = process.env.USER_EMAIL;

  const { email, name, message } = req.body;

  // validate
  if (!email) {
    res.status(400).send("email is required");
  }
  if (!name) {
    res.status(400).send("name is required");
  }
  if (!message) {
    res.status(400).send("message is required");
  }

  //config
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: fromUser,
      pass: password,
    },
  });

  const mailOptions = {
    subject: "Karate",
    from: fromUser,
    to: fromUser,
    html: `
      <p>Nome: ${name}</p>
      <p>Email: ${email}</p>
      <p>Mensagem: ${message}</p>
    `,
  };

  // send
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(info);
    }
  });
};

export default handler;
