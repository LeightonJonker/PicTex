package edu.uoa.pictex.restful.controller;

import edu.uoa.pictex.Keyword;
import edu.uoa.pictex.SentenceProcessor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebRestController {

    private static final SentenceProcessor sp = new SentenceProcessor();

    @RequestMapping("/api/processText")
    public String getKeywords(@RequestParam(value="text", defaultValue="") String text) {
        Keyword keywords = sp.process(text);
        return keywords.toString();
    }

}