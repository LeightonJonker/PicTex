package edu.uoa.pictex;

import edu.stanford.nlp.simple.*;

import java.util.ArrayList;
import java.util.List;

public class Keyword {

    private List<String> keywords;
    private String formString;
    private int sz;

    public Keyword() {
        keywords = new ArrayList();
        formString = "";
        sz = 0;
    }

    public void add(String s) {
        keywords.add(s);
        sz++;
    }

    public void set(int index, String s) {
        keywords.set(index, s);
    }

    public String get(int index) {
        return keywords.get(index);
    }
    public String getString() {
        return formString;
    }
    public List<String> getList() {
        return keywords;
    }
    public int size() {
        return sz;
    }

    public boolean contains(String s) {
        if(keywords.contains(s)) {
            return true;
        } else {
            return false;
        }
    }

    public String toString() {
        if (keywords.size() == 1) {
            formString = keywords.get(0);
            return formString;
        } else if (keywords.size() == 0) {
            formString = "";
            return formString;
        }

        formString = keywords.get(0) + ",";

        for(int i = 1; i < keywords.size(); i++) {
            if (i == keywords.size()-1) {
                formString += ("+" + keywords.get(i));
            } else {
                formString += ("+" + keywords.get(i) + ",");
            }
        }
        return formString;
    }

    public void clear() {
        keywords.clear();
        formString = "";
        sz = 0;
    }

}
