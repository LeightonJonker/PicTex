package edu.uoa.pictex.restful.controller;

import edu.uoa.pictex.Keyword;
import edu.uoa.pictex.SentenceProcessor;
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
        List<String> tags = keywords.getList();
        return tags;
    }

}