package edu.uoa.pictex;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

public class Email {

    public boolean sendEmail(String[] args) {
        String to = "ljon139@aucklanduni.ac.nz";
        String from = "wcha609@aucklanduni.ac.nz";
        String host = "smtp.gmail.com";
        final String username="wcha609@aucklanduni.ac.nz";
        final String password="d8i2IB0eAXuy3VjkCLJE";
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
            message.setFrom(new InternetAddress("wcha609@aucklanduni.ac.nz"));
            message.setRecipients(
                Message.RecipientType.TO, InternetAddress.parse("ljon139@aucklanduni.ac.nz")
            );
            message.setSubject("Mail Subject");

            String msg = "This is my first email using JavaMailer";

            MimeBodyPart mimeBodyPart = new MimeBodyPart();
            mimeBodyPart.setContent(msg, "text/html");

            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(mimeBodyPart);

            /*
            To send an attachment:
            MimeBodyPart attachmentBodyPart = new MimeBodyPart();
            attachmentBodyPart.attachFile(new File("path/to/file"));
            multipart.addBodyPart(attachmentBodyPart);
            */

            message.setContent(multipart);

            Transport.send(message);
            System.out.println("Sent message successfully...");
            return true;

        } catch (MessagingException mex) {
            mex.printStackTrace();
        }

        return false;
    }

    public boolean sendEmail() {
        String[] defaultOptions = {""};
        return sendEmail(defaultOptions);
    }

}