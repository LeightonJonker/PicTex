package edu.uoa.pictex;

import java.io.*;

public class IO {

    private BufferedReader cin;

    public IO() {
        cin = new BufferedReader(new InputStreamReader(System.in));
    }

    public String read() throws IOException {
        return cin.readLine();
    }

}
