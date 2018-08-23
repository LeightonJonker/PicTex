package edu.uoa.pictex;

import java.io.File;
import java.io.IOException;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

public class Email {

    public boolean sendEmail(String recipient) {
        final String username="uoa.pictex@gmail.com";
        final String password="wcha609ljon139";
        Properties properties = new Properties(); //get system properties
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.host","smtp.gmail.com"); //smtp.gmail.com for gmail
        properties.put("mail.smtp.port", "587"); //587 for gmail, 465 for uni
        properties.put("mail.smtp.starttls.enable", "true");
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("uoa.pictex@gmail.com"));
            message.setRecipients(
                Message.RecipientType.TO, InternetAddress.parse(recipient)
            );
            message.setSubject("UoA PicTex - Your PicTex!");

            StringBuilder msgB = new StringBuilder();
            msgB.append("Thank you for using PicTex! We have attached your image in this e-mail :)\n");
            msgB.append("Thanks from both of us at PicTex!\nLeighton Jonker & William Chao");
            String msg = msgB.toString();

            MimeBodyPart mimeBodyPart = new MimeBodyPart();
            mimeBodyPart.setContent(msg, "text/html");

            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(mimeBodyPart);

            //To send an attachment:
            MimeBodyPart attachmentBodyPart = new MimeBodyPart();
            try {
                attachmentBodyPart.attachFile(new File("./PicTex.png"));
                multipart.addBodyPart(attachmentBodyPart);
            } catch (IOException e) {
                System.out.println("Unable to attach image");
            }

            message.setContent(multipart);

            Transport.send(message);
            System.out.println("Sent message successfully...");
            return true;

        } catch (MessagingException mex) {
            mex.printStackTrace();
        }

        return false;
    }

}