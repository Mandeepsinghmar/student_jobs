import sgMail from '@sendgrid/mail';

export default async (type: string, email: string, token: string): Promise<void> => {
  const subject = type === 'reset' ? 'Reset your password' : 'Account Activation Link';

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    sgMail.send({
      from: process.env.EMAIL_FROM,
      to: email,
      subject,
      html: `
        <h1>Please use the following link to ${subject.includes('Activation') ? 'activate' : 'reset'} your account</h1>
        <a href='${process.env.CLIENT_URL}/${subject.includes('Activation') ? 'confirm-account' : 'reset-password'}/${token}'>
        <p>${process.env.CLIENT_URL}/${subject.includes('Activation') ? 'confirm-account' : 'reset-password'}/${token}</p></a>
        <hr />
        <p>This email may containe sensetive information</p>
        <p>${process.env.CLIENT_URL}</p>
      `,
    });

    console.log('Email sent');
  } catch (error) {
    console.log(error);
  }
};
