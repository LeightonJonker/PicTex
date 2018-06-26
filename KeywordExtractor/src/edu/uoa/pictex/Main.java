package edu.uoa.pictex;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

import edu.stanford.nlp.simple.*;

public class Main {

    public static void main(String[] args) throws IOException {
	    BufferedReader cin = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter your message: ");
        //Document doc = new Document(cin.readLine());
        Sentence sent = new Sentence(cin.readLine());
        //for (Sentence sent : doc.sentences()) {
        List<String> pos = new ArrayList(sent.posTags());
        List<String> lemmas = new ArrayList(sent.lemmas());
        List<String> keywords = new ArrayList();
        System.out.println(pos);
        //System.out.println("Open IE: " + sent.openie()); //
        //System.out.println("Parse: " + sent.parse());
        /*
        String parse = sent.parse().toString();
        String[] tokens = parse.split("NP");
        for(int i = 1; i < tokens.length; i++) {
            System.out.println(tokens[i].trim());
        }
        */
        for(int i = 0; i < pos.size(); i++) {
            if (pos.get(i).contains("NN")) {
                if(!keywords.contains(lemmas.get(i))) {
                    if(i != 0 && pos.get(i-1).contains("JJ")) {
                        keywords.add(lemmas.get(i-1) + " " + lemmas.get(i));
                    } else {
                        keywords.add(lemmas.get(i));
                    }
                }
            }
        }
        System.out.println("Keywords: " + keywords);
        //Combining keywords into single comma-delimited string
        String output = "";
        for(int i = 0; i < keywords.size(); i++) {
            if (i == keywords.size()-1) {
                output += keywords.get(i);
            } else {
                output += keywords.get(i) + ", ";
            }
        }
        System.out.println("Keywords: " + output);
        //}
    }
}
