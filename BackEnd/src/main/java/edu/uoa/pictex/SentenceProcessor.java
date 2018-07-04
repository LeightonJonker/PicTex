package edu.uoa.pictex;

import edu.stanford.nlp.simple.*;

import java.util.ArrayList;
import java.util.List;

public class SentenceProcessor {

    public Keyword process(String text) {
        Sentence sent = new Sentence(text);
        List<String> pos = new ArrayList(sent.posTags());
        List<String> lemmas = new ArrayList(sent.lemmas());
        Keyword keywords = new Keyword();
        for (int i = 0; i < pos.size(); i++) {
            if (pos.get(i).contains("NN") || pos.get(i).contains("JJ")) {
                if (!keywords.contains(lemmas.get(i))) {
                    keywords.add(lemmas.get(i));
                }
            }
        }
        return keywords;
    }

}
