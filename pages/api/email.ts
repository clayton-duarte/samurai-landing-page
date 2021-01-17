import { NextApiHandler } from "next";
import nodemailer from "nodemailer";

const handler: NextApiHandler = (req, res) => {
  const password = process.env.USER_PASSWORD;
  const fromUser = process.env.USER_EMAIL;

  const { email, name, message } = req.body;

  // validate
  if (!name) {
    res.status(400).send("name is required");
  }
  if (!email) {
    res.status(400).send("email is required");
  }
  if (!message) {
    res.status(400).send("message is required");
  }

  //config
  try {
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
      bcc: fromUser,
      to: email,
      html: `
      <h3>Mensagem recebida!</h3>
      <p>Nome: ${name}</p>
      <p>Email: ${email}</p>
      <p>Mensagem: ${message}</p>
      `,
    };

    // send
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(info);
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

export default handler;
