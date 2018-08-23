package edu.uoa.pictex.restful.controller;

import edu.uoa.pictex.ImageEditor;
import edu.uoa.pictex.Keyword;
import edu.uoa.pictex.SentenceProcessor;
import edu.uoa.pictex.Email;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
        return keywords.getList();
    }

    /*
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
    */

    @RequestMapping("api/email")
    public String sendEmail(@RequestParam(value = "recipient") String recipient) {
        Email email = new Email();
        Boolean sentEmail = email.sendEmail(recipient);
        if (sentEmail) {
            return "E-mail sent successfully";
        } else {
            return "E-mail unsuccessful";
        }
    }

    @RequestMapping("api/saveImg")
    public String saveImg(
          @RequestParam(value = "imgURL") String imgURL,
          @RequestParam(value = "fontFamily") String fontFamily,
          @RequestParam(value = "hex") String hex,
          @RequestParam(value = "text") String text,
          @RequestParam(value = "fileName") String fileName,
          @RequestParam(value = "bold") Boolean isBold,
          @RequestParam(value = "italics") Boolean isItalics,
          @RequestParam(value = "underline") Boolean isUnderline,
          @RequestParam(value = "x") int x,
          @RequestParam(value = "y") int y,
          @RequestParam(value = "fontSize") int fontSize
    ) {
        ImageEditor ie = new ImageEditor(imgURL, fontFamily, hex, text, fileName,
                isBold, isItalics, isUnderline, x, y, fontSize);
        return ie.writeImage();
    }
}