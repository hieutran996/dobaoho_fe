const nodemailer = require("nodemailer");

export default (req, res) => {
    const { name, email, phone, content } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'hieudev96@gmail.com',
            pass: 'harwnskolvxfqevr',
        },
    });

    const mailOption = {
        from: `hieudev96@gmail.com`,
        to: `hieudev96@gmail.com`,
        subject: "Contact ✔", // Subject line
        html: `
            <div>Name: ${name}</div>
            <div>Phone: ${phone}</div>
            <div>Email: ${email}</div>
            <div>Content: ${content}</div>
        ` // html body
    };

    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
            res.send("error" + JSON.stringify(err));
        } else {
            res.send("success");
        }
    });
};