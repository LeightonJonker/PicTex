package edu.uoa.pictex.restful.controller;

import edu.uoa.pictex.Keyword;
import edu.uoa.pictex.SentenceProcessor;
import edu.uoa.pictex.Email;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
public class WebRestController {

    private static final SentenceProcessor sp = new SentenceProcessor();
    private Keyword keywords = new Keyword();
    

    @RequestMapping("/api/processText")
    public String getKeywords(@RequestParam(value="text", defaultValue="") String text) {
        keywords = sp.process(text);
        
        return keywords.toString();
    }

    @RequestMapping("/api/getTags")
    public List<String> getTags() {
        List<String> tags = keywords.getList();
        return tags;
    }

    @RequestMapping("api/getText")
    public String getText(@RequestParam(value="fp",defaultValue="") String fp) {
        String basedir = System.getProperty("user.dir").replace('\\','/');
        basedir += fp;
        System.out.println(basedir);
        try {
            FileReader fr = new FileReader(basedir);
            BufferedReader br = new BufferedReader(fr);
            String output = "";
            String line = "";
            while ((line = br.readLine()) != null) {
                output += line;
            }
            return output;
        } catch (FileNotFoundException ex) {
            System.out.println("File not found");
            return null;
        } catch (IOException ex) {
            System.out.println("Error reading file");
            return null;
        }
    }

    @RequestMapping("api/email")
    public String sendEmail() {
        Email email = new Email();
        Boolean sentEmail = email.sendEmail();
        if (sentEmail) {
            return "E-mail sent successfully";
        } else {
            return "E-mail unsuccessful";
        }
    }

}